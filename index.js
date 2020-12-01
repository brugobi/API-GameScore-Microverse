// to get the KEY
// let newGame = {
//   name: "DinosGame"
// }

// fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games`, {
//   method: 'post',
//   headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(newGame)
//   })
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log('post request response data', data)
//   })



const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch()
});