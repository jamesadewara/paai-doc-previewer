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
  "elements": [
    { "heading1": "Welcome" },
    { "paragraph": "This is a paragraph." },
    { "heading2": "Another Section" },
    { "paragraph": "Another paragraph." },
    { "image": { "src": "https://example.com/image.jpg", "alt": "Sample Image" } }
  ],
  "heading1": "Welcome to JSON Preview",
  "paragraph": "This is a simple JSON-based HTML previewer.",
  "link": {
    "href": "https://example.com",
    "text": "Click Here"
  },
  "image": {
    "src": "https://imgs.search.brave.com/PXpxOBAqfj0C5M22XXwFR5rbBpz_YzHt1C7E2ym0bnM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA3/NjA1MTAyL3Bob3Rv/L2hhbmRzb21lLW1h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eXVTcnJZMi1T/ZkRGVDNUNFlrRG16/cUE3WThJeTFfSHhT/emFnWnFtc2JwMD0",
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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paai Preview</title>
  <style>
    body { font-family: Arial, sans-serif; color: black; background-color: white; padding: 20px; }
    h1, h2, h3, h4, h5, h6 { font-weight: bold; }
    h1 { font-size: 2em; }
    h2 { font-size: 1.75em; }
    a { color: blue; text-decoration: none; }
    a:hover { text-decoration: underline; }
    ul { list-style-type: disc; padding-left: 20px; }
    img { max-width: 100%; height: auto; border-radius: 5px; }
  </style>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
  <h2>Another Section</h2>
  <p>Another paragraph.</p>
  <img src="https://example.com/image.jpg" alt="Sample Image" />
  
  <h1>Welcome to JSON Preview</h1>
  <p>This is a simple JSON-based HTML previewer.</p>
  <a href="https://example.com" target="_blank">Click Here</a>
  
  <img src="https://imgs.search.brave.com/PXpxOBAqfj0C5M22XXwFR5rbBpz_YzHt1C7E2ym0bnM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA3/NjA1MTAyL3Bob3Rv/L2hhbmRzb21lLW1h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eXVTcnJZMi1T/ZkRGVDNUNFlrRG16/cUE3WThJeTFfSHhT/emFnWnFtc2JwMD0" 
       style="width: 300px; height: auto;" alt="Sample Image" />

  <h2>Features</h2>
  <p>Supports various HTML elements based on JSON keys.</p>
  <ul>
    <li>Headings (h1-h6)</li>
    <li>Paragraphs</li>
    <li>Links</li>
    <li>Lists</li>
    <li>Images</li>
  </ul>
</body>
</html>
```

### Troubleshooting
- If the preview does not open, ensure your JSON file is properly formatted.
- If an error message appears, check for missing or incorrect JSON keys.
- Restart VS Code if the preview command is not available.

Enjoy using **Paai Doc Previewer**! 🚀