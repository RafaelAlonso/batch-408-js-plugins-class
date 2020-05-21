import { findMovies, search } from './movie';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select';

// chamando função que foi definida em outro arquivo
findMovies("Harry Potter");
initSortable();
initMarkdown();
initSelect2();


// eventlistener para quando o formulário for enviado
document.getElementById("search-movies").addEventListener('submit', search);
