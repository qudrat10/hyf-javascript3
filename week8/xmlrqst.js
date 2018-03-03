document.getElementById("btn").addEventListener('click', getInfo);


//getting users infor from GitHub
function getInfo(){
    xhr= new XMLHttpRequest();
    xhr.open('Get' ,'https://api.github.com/orgs/HackYourFuture/repos', true );

    xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);

          var output = '';
          for(var i in users){
            output +=

              '<div class="user">' +
              '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
              '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>name: '+users[i].name+'</li>' +
              '<li>login: '+users[i].owner['login']+'</li>' +
              '</ul>' +
              '</div>';
          }

          document.getElementById('demo').innerHTML = output;
        }
      }

      xhr.send();
    }

  

   
    