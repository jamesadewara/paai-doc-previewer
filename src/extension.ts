import * as vscode from 'vscode';

// HTML escaping utility
function escapeHtml(unsafe: string): string {
  return unsafe.replace(/[&<>"']/g, (match) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[match] || match));
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('paai-doc-previewer.previewer', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('Open a JSON file first!');
      return;
    }

    const jsonText = editor.document.getText();
    let jsonData;

    try {
      jsonData = JSON.parse(jsonText);
    } catch (error) {
      vscode.window.showErrorMessage('Invalid JSON format.');
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'paaiPreview',
      'Paai Preview',
      vscode.ViewColumn.Beside,
      { enableScripts: true }
    );

    panel.webview.html = generateHtml(jsonData);
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
            h1, h2, h3, h4, h5, h6 { color: var(--vscode-editor-foreground); }
            a { color: var(--vscode-textLink-foreground); text-decoration: none; }
            a:hover { text-decoration: underline; }
            ul { list-style-type: disc; padding-left: 20px; }
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
    return `<p>${jsonData}</p>`;
  }

  if (Array.isArray(jsonData)) {
    return `<ul>${jsonData.map(item => `<li>${convertJsonToHtml(item)}</li>`).join('')}</ul>`;
  }

  if (typeof jsonData === 'object') {
    return Object.entries(jsonData).map(([key, value]) => {
      if (key.startsWith('heading')) {return `<${key}>${value}</${key}>`;}
      if (key === 'paragraph') {return `<p>${value}</p>`;}
      if (key === 'link' && typeof value === 'object' && value !== null && 'href' in value && 'text' in value) {
        return `<a href="${(value as { href: string, text: string }).href}" target="_blank">${(value as { href: string, text: string }).text}</a>`;
      }
      if (key === 'children') {return convertJsonToHtml(value);}
      return `<div>${key}: ${convertJsonToHtml(value)}</div>`;
    }).join('');
  }

  return `<p>${jsonData}</p>`;
}

export function deactivate() { }
