import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const textarea = document.getElementById('editor'); // área onde escrevo
  const preview = document.getElementById('preview'); // área onde markdown aparece
  const markdown = new MarkdownIt();                  // inicia o plugin

  textarea.addEventListener('keyup', (event) => {
    const html = markdown.render(textarea.value);     // gera html com o plugin
    preview.innerHTML = html;                         // coloca o html gerado no preview
  });

};

export { initMarkdown };
