let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
  { label: 'Vanil' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');

function createMarkup(list) {
  return list
    .map(value => {
      return `<li>${value.label}</li>`;
    })
    .join('');
}

function showList(list) {
  listElem.innerHTML = createMarkup(list);
}

showList(list);
// ==========

filterElem.addEventListener('input', _.debounce(onFilterInput, 300));

function onFilterInput(e) {
  const value = e.target.value;
  const filteredList = list.filter(obj => obj.label.includes(value));
  showList(filteredList);
}
