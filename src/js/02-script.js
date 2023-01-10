import { NewsAPI } from './modules/newsApi';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
};

const newsApi = new NewsAPI();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();

  refs.listElem.innerHTML = '';

  newsApi.currentPage = 1;

  const query = e.target.elements.query.value;
  newsApi.getNews(query).then(data => {
    renderArticles(data.articles);
  });

  document.addEventListener('scroll', onScrollDocument);
  e.target.reset();
});

const onScrollDocument = e => {
  const { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
  const currentScrollTop = scrollHeight - scrollTop - clientHeight;
  if (currentScrollTop < 500 && !isActiveQuery) {
    isActiveQuery = true;
    loadNextPage();
  }
};

let isActiveQuery = false;

function loadNextPage() {
  newsApi.currentPage += 1;
  newsApi.getNews().then(data => {
    renderArticles(data.articles);
    isActiveQuery = false;
    if (data.page === data.total_pages) {
      document.removeEventListener('scroll', onScrollDocument);
    }
  });
}

function renderArticles(articles) {
  const markup = articles
    .map(elem => {
      return `
    <li class="card news-card">
        <img src="${elem.media}" alt="" class="news-image">
        <h3 class="card-title">${elem.title}</h3>
        <p class="card-desc">${elem.summary}</p>
        <div class="card-footer">
          <span>${elem.author}</span>
          <span>${elem.published_date}</span>
        </div>
      </li>
        `;
    })
    .join('');

  refs.listElem.insertAdjacentHTML('beforeend', markup);
}
