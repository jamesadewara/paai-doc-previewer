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
  "heading1": "Welcome to JSON Preview",
  "paragraph": "This is a simple JSON-based HTML previewer.",
  "link": {
    "href": "https://example.com",
    "text": "Click Here"
  },
  "image": {
    "src": "https://imgs.search.brave.com/PXpxOBAqfj0C5M22XXwFR5rbBpz_YzHt1C7E2ym0bnM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA3/NjA1MTAyL3Bob3Rv/L2hhbmRzb21lLW1h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eXVTcnJZMi1T/ZkRGVDNUNFlrRG16/cUE3WThJeTFfSHhT/emFnWnFtc2JwMD0",
    "alt": "Sample Image",
    "width": "300px",
    "height": "auto"
  },
  "children": [
    {
      "heading2": "Features"
    },
    {
      "paragraph": "Supports various HTML elements based on JSON keys."
    },
    {
      "ul": [
        "Headings (h1-h6)",
        "Paragraphs",
        "Links",
        "Lists",
        "Images"
      ]
    }
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