window.onload = function() {
    cats();
    
    async function cats(){
      await fetch("https://api.thecatapi.com/v1/images/search", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }).then(function(response) {
          const data = response.json();
          
          data.then(function(res) {
            console.log(res);
            
            let html = "";
            res.forEach(function(item, index){
                html +='<div class="item"><img src="'+item.url+'" alt=""/></div>';
            });
          
            document.getElementById("apiCats").innerHTML = html;
          })
        })
        .catch(function(res) {
          console.log(res);
        });
    }
  
    posts();
  
    async function posts(){
      const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
      const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";
      
        try {
          await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then(function(response) {
            const data = response.json();

            data.then(function(res) {
                let html = "";

                res.data.forEach(function(item, index){
                  if(index < 5){
                      html +='<div class="item"><a href="'+item.permalink+'""><div class="imagem" style="background-image: url('+item.media_url+');"></div></a></div>';
                  }
                });
              
                document.getElementById("instagramPosts").innerHTML = html;
            })
          })
        } catch (error) {
          console.log(error)
        }
    }
};