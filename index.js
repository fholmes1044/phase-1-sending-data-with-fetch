function submitData(user_name, user_email){
     return fetch("http://localhost:3000/users",{
      method: "POST",
      headers:{

        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: user_name,
        email: user_email,
      })
    })
   
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object) 
        document.body.innerHTML = object.id
    })
.catch(function(error){
   
    document.body.innerHTML = error.message
})
}