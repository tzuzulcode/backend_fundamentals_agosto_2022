const formatDateTime = (string)=>{
    const date = new Date(string)
    const offset = date.getTimezoneOffset()*60000
    console.log(offset)
    return new Date(date.getTime()-offset).toISOString().slice(0,19).replace('T',' ')
}

module.exports = formatDateTime