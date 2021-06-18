console.log('Client is running')
//client to server guide 
//https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35

  async function reply_click(clicked_id){
    fetch('http://localhost:8080/scenes', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),        
        body: JSON.stringify({clientId: clicked_id})
    })
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  }