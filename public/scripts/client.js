console.log('Client is running')
//client to server guide 
//https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35
  async function reply_click(clicked_id) {
    try {
        const url = 'http://localhost:8080/scenes'
        const res = await fetch(url, {
            method: 'POST',
            headers: new Headers({ 'Accept': 'application/json','content-type': 'application/json'}),        
            body: JSON.stringify({clientId: clicked_id})
        })
        console.log(res.ok)
        // console.log(res.json)
        const data = await res.json()
        return data 
    }catch(err){
        console.error(err)
    }
  }
  reply_click().then((data) => console.log(data.info))