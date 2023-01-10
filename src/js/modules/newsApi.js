const BASE_URL = 'https://free-news.p.rapidapi.com/v1';
const HEADERS = {
  'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
  'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
};

export class NewsAPI {
  query = null;
  currentPage = 1;

  getNews(query) {
    if (query) {
      this.query = query;
    }

    const params = new URLSearchParams({
      q: this.query,
      page: this.currentPage,
      page_size: 25,
    });

    const options = {
      headers: HEADERS,
    };

    return fetch(`${BASE_URL}/search?${params}`, options).then(response => {
      return response.json();
    });
  }
}
