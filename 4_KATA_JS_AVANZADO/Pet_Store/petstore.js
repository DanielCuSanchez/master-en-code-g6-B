// const axios = require("axios")
const URL_BASE = 'https://petstore.swagger.io/v2/'

function createPet(pet){
  return axios.post(URL_BASE+'pet', pet)
    .then(resp => {
      console.log(resp.status, resp.data)
    }).catch(error => console.error(error))

}

const body = {
  id: 3312,
  category: {id: 9999, name: 'aves'},
  name: 'Piolin',
  photoUrls: [
    'https://deconejo.site/wp-content/uploads/2020/03/frases-de-piol%C3%ADn.jpg'
  ],
  tags: [ {id: 0, name:'bird'}, {id: 2, name:'Looney tunes'}],
  status: 'available'
}

// createPet(body)

function getPet(id){
  return axios.get(`${URL_BASE}pet/${id}`)
    .then(response=>{
      console.log(response.data)
      return response.data
    }).catch(err=> console.error(err.response.data.message))
}
// getPet(9)


function updatePet(pet){
  axios.put(`${URL_BASE}pet`, pet )
    .then(resp => console.log(resp.status, resp.data))
    .catch(err => console.error(err.response.data))
}

// updatePet({id: 3312, name: 'Tweety'})


function deletePet(id){
  return axios.delete(`${URL_BASE}pet/${id}`)
}

// deletePet(3312)
//   .then(resp => {
//     console.log(resp.data)
//     getPet(3312)
//   }).catch(err => console.error(err.response.data))
  


function getPetFetch(id){
  return fetch(`https://petstore.swagger.io/v2/pet/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=> console.error(err))
}

getPetFetch(9)

function postPetFetch(pet){
  return fetch('https://petstore.swagger.io/v2/pet/', {
    method: 'POST',
    body: JSON.stringify(pet)
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(err=> console.error(err))
}

postPetFetch(body)