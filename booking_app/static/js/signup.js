const signUpForm = document.getElementById("signUpForm")

signUpForm.onsubmit = (event)=>{
    event.preventDefault()

    const {
        name,
        email,
        password,
        password_confirmation
    } = signUpForm

    const data = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value
    }

    console.log(data)

    fetch("/api/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(console.log)
    .catch(console.log)
}