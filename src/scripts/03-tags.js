let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  let prevElem = refs.firstTagsList.querySelector('.active');

  prevElem?.classList.remove('active');

  let elem = e.target.closest('li.tag-item');
  elem.classList.add('active');

  prev = elem.previousElementSibling;
  next = elem.nextElementSibling;

  let prevBlue = refs.firstTagsList.querySelectorAll('.blue');
  let prevTomato = refs.firstTagsList.querySelector('.tomato');

  prevBlue?.classList.remove('blue');
  prevTomato?.classList.remove('tomato');

  prev?.classList.add('blue');
  next?.classList.add('tomato');
});

let results = new Set();

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  let elem = e.target.closest('li.tag-item');
  elem.classList.toggle('active');

  let hashTag = elem.textContent.trim();

  if (!results.has(hashTag)) {
    results.add(hashTag);
  } else {
    results.delete(hashTag);
  }
});

// function sendData() {
//   let tagsList = refs.secondTagsList.querySelectorAll('.active');
//   tagsList = [...tagsList].map(elem => {
//     return elem.textContent.trim();
//   });
//   console.log(tagsList);
// }

function sendData() {
  console.log([...results]);
}
