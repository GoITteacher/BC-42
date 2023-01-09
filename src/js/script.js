fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    return response.json();
  })
  .then(users => {
    renderUsers(users);
  });

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `
      <li>${user.name}</li>
    `;
    })
    .join('');
  document.body.innerHTML = markup;
}
