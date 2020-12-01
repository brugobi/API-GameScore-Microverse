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

const myKey = config.MY_KEY;

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const searchParams = new URLSearchParams();
  const userName = document.getElementById('username');
  const score = document.getElementById('score');
  searchParams.append(userName);
  searchParams.append(score);
  

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + mykey + 'scores/', {
    method: 'post',
    // headers: {
    //   'content-type': 'application/json',
    // },
    body: searchParams
  }).then(function (response) {
    return response.text();
  }).then(function (text) {
    console.log(text);
  }).catch(function (error) {
    console.log(error);
  })
});