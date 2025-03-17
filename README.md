# Paai Doc Previewer

## Overview
Paai Doc Previewer is a VS Code extension that allows you to preview JSON documents as HTML while maintaining the VS Code theme structure. It converts JSON keys into basic HTML elements and provides a preview directly within VS Code.

## Features
- Converts JSON structure into a well-formatted HTML preview.
- Supports common HTML elements like headings, paragraphs, lists, and links.
- Automatically maintains the VS Code theme.
- Provides a preview icon for quick access.

## JSON Structure
To use this extension, structure your JSON document with the following keys:

```json
{
  "heading1": "Main Title",
  "paragraph": "This is a sample paragraph explaining something.",
  "link": { "text": "Click Here", "href": "https://example.com" },
  "children": [
    { "heading2": "Subheading" },
    { "paragraph": "Another descriptive text." },
    { "ul": [
        { "li": "Item 1" },
        { "li": "Item 2" },
        { "li": { "link": { "text": "Google", "href": "https://google.com" } } }
    ]}
  ]
}
```

## JSON Preview Output
This JSON will be rendered as:

```html
<h1>Main Title</h1>
<p>This is a sample paragraph explaining something.</p>
<a href="https://example.com">Click Here</a>
<h2>Subheading</h2>
<p>Another descriptive text.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li><a href="https://google.com">Google</a></li>
</ul>
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/paai-doc-previewer.git
   cd paai-doc-previewer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile the extension:
   ```sh
   npm run compile
   ```
4. Run it in VS Code for testing:
   ```sh
   code --extensionDevelopmentPath=.
   ```

## Packaging & Running Locally
To package and install the extension without manually moving files:
1. Install VSCE (VS Code Extension Manager) if not installed:
   ```sh
   npm install -g @vscode/vsce
   ```
2. Package the extension:
   ```sh
   vsce package
   ```
3. Install the generated `.vsix` file in VS Code:
   - Open VS Code.
   - Go to Extensions (`Ctrl+Shift+X`).
   - Click on the `...` menu (top-right corner).
   - Select `Install from VSIX...` and choose the `.vsix` file.

## Usage
- Open a `.json` file in VS Code.
- Click on the preview icon or run the command `Paai Doc Previewer: Preview JSON`.
- A new panel will open with the formatted HTML preview.

## License
MIT License

## Contributing
Feel free to submit issues and pull requests for improvements!