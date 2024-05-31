

async function Data() {

    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        method: 'GET',
        headers: {
            "x-rapidapi-key": "fc213f863fmsh4c41ea8549a2c05p1ecf9bjsna7d5327c833c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"

        },
        body: JSON.stringify()
    }).then(value=>{return value})
    

}


const value = Data()

console.log(value)