import * as vscode from 'vscode';

// HTML escaping utility
function escapeHtml(unsafe: string): string {
  return unsafe.replace(/[&<>"]/g, (match) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[match] || match));
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('paai-doc-previewer.previewer', async () => {
    const panel = vscode.window.createWebviewPanel(
      'paaiPreview',
      'Paai Preview',
      vscode.ViewColumn.Beside,
      { enableScripts: true }
    );

    function updatePreview(document: vscode.TextDocument) {
      const jsonText = document.getText();
      let jsonData;
      try {
        jsonData = JSON.parse(jsonText);
      } catch (error) {
        panel.webview.html = `<p style='color:red;'>Invalid JSON format.</p>`;
        return;
      }
      panel.webview.html = generateHtml(jsonData);
    }

    if (vscode.window.activeTextEditor) {
      updatePreview(vscode.window.activeTextEditor.document);
    }

    vscode.workspace.onDidChangeTextDocument(event => {
      updatePreview(event.document);
    }, null, context.subscriptions);
  });

  context.subscriptions.push(disposable);
}

function generateHtml(jsonData: any): string {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Paai Preview</title>
          <style>
            body { font-family: var(--vscode-font-family, Arial); color: var(--vscode-editor-foreground); background-color: var(--vscode-editor-background); padding: 20px; }
            h1, h2, h3, h4, h5, h6 { font-weight: bold; }
            h1 { font-size: 2em; }
            h2 { font-size: 1.75em; }
            h3 { font-size: 1.5em; }
            h4 { font-size: 1.25em; }
            h5 { font-size: 1.1em; }
            h6 { font-size: 1em; }
            a { color: var(--vscode-textLink-foreground); text-decoration: none; }
            a:hover { text-decoration: underline; }
            ul { list-style-type: disc; padding-left: 20px; }
            .children { list-style: none; padding-left: 0; }
            img { max-width: 100%; height: auto; border-radius: 5px; }
          </style>
        </head>
        <body>
          ${convertJsonToHtml(jsonData)}
        </body>
        </html>
      `;
}

function convertJsonToHtml(jsonData: any): string {
  if (typeof jsonData === 'string') {
    return `<p>${escapeHtml(jsonData)}</p>`;
  }

  if (Array.isArray(jsonData)) {
    return `<ul>${jsonData.map(item => `<li>${convertJsonToHtml(item)}</li>`).join('')}</ul>`;
  }

  if (jsonData && typeof jsonData === 'object') {
    return Object.entries(jsonData).map(([key, value]) => {
      if (/^heading[1-6]$/.test(key)) {
        return `<${key.replace('heading', 'h')}>${escapeHtml(String(value ?? ''))}</${key.replace('heading', 'h')}>`;
      }
      if (key === 'paragraph') { return `<p>${escapeHtml(String(value ?? ''))}</p>`; }
      if (key === 'link' && typeof value === 'object' && value !== null && 'href' in value && 'text' in value) {
        return `<a href="${escapeHtml(String(value.href))}" target="_blank">${escapeHtml(String(value.text))}</a>`;
      }
      if (key === 'image' && typeof value === 'object' && value !== null && 'src' in value) {
        const width = 'width' in value ? String(value.width) : 'auto';
        const height = 'height' in value ? String(value.height) : 'auto';
        const alt = 'alt' in value ? String(value.alt) : '';
        return `<img src="${escapeHtml(String(value.src))}" style="width: ${escapeHtml(width)}; height: ${escapeHtml(height)};" alt="${escapeHtml(alt)}" />`;
      }
      if (key === 'children' && Array.isArray(value)) {
        return `<div class="children">${convertJsonToHtml(value)}</div>`;
      }
      return `<div>${escapeHtml(key)}: ${convertJsonToHtml(value)}</div>`;
    }).join('');
  }
  return `<p>${escapeHtml(String(jsonData ?? ''))}</p>`;
}

export function deactivate() { }