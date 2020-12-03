
 function submitData(name, email){
   let p= {
      name,
      email
    }
  

let dataObject = {
  method: "post",
  credentials: 'same-origin',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }, 
  body: JSON.stringify(p)
  
};
    let message = 'Unauthorized Access'

fetch("http://localhost:3000/users", dataObject)
  .then(response => response.json)
  .then(object => {
    for(const element of object ){
    document.body.innerHTML = `<p>${rando }</p>`
    }
    })
  .catch(error => {
    
    document.body.innerHTML=`${message}`
    
  })
}