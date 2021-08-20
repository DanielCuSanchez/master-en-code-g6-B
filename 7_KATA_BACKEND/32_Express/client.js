const axios = require('axios');

// axios.get('http://localhost:3001/')
//   .then(resp=>{
//     console.log(resp.data);
//   })

// axios.post('http://localhost:3001/',{name: 'Dany'})
//   .then(resp=>{
//     console.log(resp.data);
//   }).catch(err=>{ console.error(err) })

// axios.get('http://localhost:3001/search?name=Diego')
//   .then(resp => {
//     console.log(resp.data);
//   }).catch(error=>{
//     console.error(error);
//   })

// axios.get('http://localhost:3001/pokemon/pikachu/ataque/3')
//   .then(resp => {
//     console.log(resp.data);
//   }).catch(error=>{
//     console.error(error);
//   })

axios.delete('http://localhost:3001/pokemon/150')
  .then(resp=>{
    console.log(resp.data);
  }).catch(error => {
    console.error(error);
  })