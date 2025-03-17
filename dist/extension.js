"use strict";var l=Object.create;var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var v=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},d=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of f(t))!g.call(e,n)&&n!==r&&s(e,n,{get:()=>t[n],enumerable:!(o=p(t,n))||o.enumerable});return e};var u=(e,t,r)=>(r=e!=null?l(h(e)):{},d(t||!e||!e.__esModule?s(r,"default",{value:e,enumerable:!0}):r,e)),m=e=>d(s({},"__esModule",{value:!0}),e);var $={};v($,{activate:()=>w,deactivate:()=>b});module.exports=m($);var i=u(require("vscode"));function w(e){let t=i.commands.registerCommand("paai-doc-previewer.previewer",async()=>{let r=i.window.activeTextEditor;if(!r){i.window.showErrorMessage("Open a JSON file first!");return}let o=r.document.getText(),n;try{n=JSON.parse(o)}catch{i.window.showErrorMessage("Invalid JSON format.");return}let c=i.window.createWebviewPanel("paaiPreview","Paai Preview",i.ViewColumn.Beside,{enableScripts:!0});c.webview.html=x(n)});e.subscriptions.push(t)}function x(e){return`
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
          ${a(e)}
        </body>
        </html>
      `}function a(e){return typeof e=="string"?`<p>${e}</p>`:Array.isArray(e)?`<ul>${e.map(t=>`<li>${a(t)}</li>`).join("")}</ul>`:typeof e=="object"?Object.entries(e).map(([t,r])=>t.startsWith("heading")?`<${t}>${r}</${t}>`:t==="paragraph"?`<p>${r}</p>`:t==="link"&&typeof r=="object"&&r!==null&&"href"in r&&"text"in r?`<a href="${r.href}" target="_blank">${r.text}</a>`:t==="children"?a(r):`<div>${t}: ${a(r)}</div>`).join(""):`<p>${e}</p>`}function b(){}0&&(module.exports={activate,deactivate});
