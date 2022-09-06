const create_form = document.getElementById("create_form")

create_form.onsubmit = (event)=>{
    event.preventDefault()

    const {
        origen,
        destino,
        hora_salida,
        hora_llegada,
        precio
    } = create_form

    const data = {
        origen:origen.value,
        destino:destino.value,
        hora_salida:hora_salida.value,
        hora_llegada:hora_llegada.value,
        precio:precio.value
    }

    console.log(data)

    fetch("/api/flights",{
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