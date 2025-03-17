# VSX Quickstart Guide

## Using Paai Doc Previewer

### Opening the Preview
1. Open a JSON file in VS Code.
2. Click on the **Paai Doc Previewer** icon in the editor.
3. Alternatively, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
4. Search for **Paai Doc Previewer: Preview JSON** and select it.
5. A new panel will open, displaying the formatted HTML preview of your JSON.

### JSON Formatting Guide
Ensure your JSON document follows this structure for correct rendering:

```json
{
  "heading1": "Main Title",
  "paragraph": "This is a sample paragraph.",
  "link": { "text": "Visit Site", "href": "https://example.com" },
  "children": [
    { "heading2": "Subheading" },
    { "paragraph": "Additional description." },
    { "ul": [
        { "li": "Item 1" },
        { "li": "Item 2" },
        { "li": { "link": { "text": "Google", "href": "https://google.com" } } }
    ]}
  ]
}
```

### Expected Output
This JSON will be converted to:

```html
<h1>Main Title</h1>
<p>This is a sample paragraph.</p>
<a href="https://example.com">Visit Site</a>
<h2>Subheading</h2>
<p>Additional description.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li><a href="https://google.com">Google</a></li>
</ul>
```

### Troubleshooting
- If the preview does not open, ensure your JSON file is properly formatted.
- If an error message appears, check for missing or incorrect JSON keys.
- Restart VS Code if the preview command is not available.

Enjoy using **Paai Doc Previewer**! 🚀