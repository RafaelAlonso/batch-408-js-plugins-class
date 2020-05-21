// GET request
const handleData = (data) => {                              // fazendo algo com os dados que recebemos
  // pega a lista dos filmes
  const ul = document.getElementById('movies');

  // limpa o que tem dentro dela
  ul.innerHTML = "";

  // pra cada um dos resultados obtidos
  data.Search.forEach((movie_info) => {
    // cria um novo item de lista, com as infos do filme
    const new_html = `<li>
                        <img src="${movie_info.Poster}" width="100">
                      </li>`;

    // insere o item criado no fim da lista
    ul.insertAdjacentHTML('beforeend', new_html)
  })
};

const findMovies = (movie_title) => {
  // ============== estrutura de uma requisição AJAX GET =================
  // fetch(url_da_api)
  // .then(response => response.json())
  // .then((data) => { código pra fazer com dados recebidos da API })
  // =====================================================================

  // montando a url do OMDB, passando o nome do filme e a chave de API
  const url = `http://www.omdbapi.com/?s=${movie_title}&apikey=adf1f2d7`;

  fetch(url)                                     // fazendo a requisição para a url
  .then(response => response.json() )            // transformando a resposta recebida em json
  .then(handleData);
}

const search = (event) => {
  // previnimos que ele recarregue a página
  event.preventDefault();

  // pegamos o que o usuário escreveu no input
  const user_input = document.getElementById('search').value;

  // executamos a função para encontrar os filmes via API
  findMovies(user_input);
};

export { findMovies, search };
