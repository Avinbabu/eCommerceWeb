fetch('https://reqres.in/api/users?page=2')
  .then(response => response.text())
  .then(data => console.log(data));