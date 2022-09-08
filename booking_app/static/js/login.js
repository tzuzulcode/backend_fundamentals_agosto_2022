const loginForm = document.getElementById("loginForm")
const messages = document.getElementById("messages")

loginForm.onsubmit = (event)=>{
    event.preventDefault()

    const {
        email,
        password
    } = loginForm

    const data = {
        email: email.value,
        password: password.value
    }

    console.log(data)

    fetch("/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.success){
            window.location.href = "/"
        }
        
        messages.innerHTML = `<p>${result.message}</p>`
    })
    .catch(console.log)
}