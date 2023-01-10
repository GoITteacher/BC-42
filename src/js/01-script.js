import { NewsAPI } from './modules/newsApi';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};

const newsApi = new NewsAPI();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();

  refs.listElem.innerHTML = '';

  newsApi.currentPage = 1;

  const query = e.target.elements.query.value;
  newsApi.getNews(query).then(data => {
    renderArticles(data.articles);
    refs.loadMoreBtn.disabled = false;
  });

  e.target.reset();
});

refs.loadMoreBtn.addEventListener('click', () => {
  newsApi.currentPage += 1;
  newsApi.getNews().then(data => {
    renderArticles(data.articles);
    refs.loadMoreBtn.disabled = false;

    if (data.page === data.total_pages) {
      refs.loadMoreBtn.disabled = true;
    }
  });
});

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
