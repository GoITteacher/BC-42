const URL = `https://superhero-search.p.rapidapi.com/api/`;

const options = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  },
};

export function getHeroByName(name) {
  return fetch(`${URL}?hero=${name}`, options).then(response =>
    response.json(),
  );
}

export function heroMarkup(hero) {
  return `
  <div class="card">
  <div class="card-img-top">
    <img src="${hero.images.sm}" alt="${hero.name}" style="width:160px;height:240px">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${hero.biography.fullName}</h2>
    <p class="card-text"><b>Умения</b></p>
    <ul class="list-group">
    </ul>
  </div>
</div>
  `;
}
