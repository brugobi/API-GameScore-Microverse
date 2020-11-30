// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log('the data', data)
//   })

// To create the API key 
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qzwGXOSsvjtPlYTJApXC/scores/', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(gameName)
  //   })
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

let newGame = {
  name: "DinosGame"
}

fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DinosGame`, {
  method: 'post',
  headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newGame)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('post request response data', data)
  })