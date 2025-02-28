# POC for a syntax highlighter that supports the CQL language

I couldn't find a syntax highlighter with support for CQL so I opted to use [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter), a popular lightweight package with support for [hljs](https://www.npmjs.com/package/react-syntax-highlighter) and [prism](https://www.npmjs.com/package/prismjs).

This package also lets you register your own language configurations. I took advantage of that to create my own config file for CQL using IA. In addition, there is an open request in PrismJs to add support for the language https://github.com/PrismJS/prism/issues/3862

The editor consists of two main parts: the file explorer and the editor. For this example I'm reading the files from a subfolder in the project, but they could come from an API or a UI input.

Here is a preview of the UI:
<img width="935" alt="image" src="https://github.com/user-attachments/assets/5e5b11c4-3b4b-4b2c-b404-366abdf0ad17" />

The Style selector is just for testing purposes
