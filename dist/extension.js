"use strict";var g=Object.create;var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var m=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var u=(e,i)=>{for(var t in i)s(e,t,{get:i[t],enumerable:!0})},p=(e,i,t,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of l(i))!w.call(e,r)&&r!==t&&s(e,r,{get:()=>i[r],enumerable:!(d=f(i,r))||d.enumerable});return e};var b=(e,i,t)=>(t=e!=null?g(m(e)):{},p(i||!e||!e.__esModule?s(t,"default",{value:e,enumerable:!0}):t,e)),v=e=>p(s({},"__esModule",{value:!0}),e);var S={};u(S,{activate:()=>y,deactivate:()=>$});module.exports=v(S);var o=b(require("vscode"));function n(e){return e.replace(/[&<>"]/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[i]||i)}function y(e){let i=o.commands.registerCommand("paai-doc-previewer.previewer",async()=>{let t=o.window.createWebviewPanel("paaiPreview","Paai Preview",o.ViewColumn.Beside,{enableScripts:!0});function d(r){let a=r.getText(),h;try{h=JSON.parse(a)}catch{t.webview.html="<p style='color:red;'>Invalid JSON format.</p>";return}t.webview.html=x(h)}o.window.activeTextEditor&&d(o.window.activeTextEditor.document),o.workspace.onDidChangeTextDocument(r=>{d(r.document)},null,e.subscriptions)});e.subscriptions.push(i)}function x(e){return`
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
          ${c(e)}
        </body>
        </html>
      `}function c(e){return typeof e=="string"?`<p>${n(e)}</p>`:Array.isArray(e)?e.map(i=>c(i)).join(""):e&&typeof e=="object"?Object.entries(e).map(([i,t])=>{if(/^heading[1-6]$/.test(i))return`<${i.replace("heading","h")}>${n(String(t??""))}</${i.replace("heading","h")}>`;if(i==="paragraph")return`<p>${n(String(t??""))}</p>`;if(i==="link"&&typeof t=="object"&&t!==null&&"href"in t&&"text"in t)return`<a href="${n(String(t.href))}" target="_blank">${n(String(t.text))}</a>`;if(i==="image"&&typeof t=="object"&&t!==null&&"src"in t){let d="width"in t?String(t.width):"auto",r="height"in t?String(t.height):"auto",a="alt"in t?String(t.alt):"";return`<img src="${n(String(t.src))}" style="width: ${n(d)}; height: ${n(r)};" alt="${n(a)}" />`}return i==="children"&&Array.isArray(t)?`<div class="children">${c(t)}</div>`:Array.isArray(t)?t.map(d=>`<div>${c(d)}</div>`).join(""):`<div>${n(i)}: ${c(t)}</div>`}).join(""):`<p>${n(String(e??""))}</p>`}function $(){}0&&(module.exports={activate,deactivate});
