

async function Data(query:String, index:number=0) {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}&index=${index}`
    // const url = `https:\/\/api.deezer.com\/search?q=${query}&redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&index=25`
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-key": "fc213f863fmsh4c41ea8549a2c05p1ecf9bjsna7d5327c833c",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"

            }
        });
        const data = await response.json()

        return await data
    } catch (error:any) {
        console.log(error)
        return error
    }
}


export { Data }

