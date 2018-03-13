
document.getElementById("btn").addEventListener('click', getInfo);

function getInfo(){

  var requestURL = 'https://api.github.com/orgs/HackYourFuture/repos';
  var results = [];
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL, true);
  xhr.send();
  xhr.onreadystatechange = processRequest;

  function processRequest() {
    if (xhr.readyState == XMLHttpRequest.DONE){
      var result = JSON.parse(xhr.response);
      results = result.Search;
      renderDOM(results); 

      function renderDOM(){
        //Creating Table
        var table=document.createElement('Table');
        document.body.appendChild(table);
      
        //Table Style 
        table.style.textAlign= 'center';
        table.style.padding= '20px';
        table.style.marginTop='20px';


        var headRow=document.createElement('tr');
        table.appendChild(headRow);
      

        let h1=document.createElement('th');
        headRow.appendChild(h1);
        h1.innerHTML="PHOTOS:";

        let h2=document.createElement('th');
        headRow.appendChild(h2);
        h2.innerHTML="ID:";

        let h3=document.createElement('th');
        headRow.appendChild(h3);
        h3.innerHTML="NAME:";

        let h4=document.createElement('th');
        headRow.appendChild(h4);
        h4.innerHTML="LOGIN:";
 

        for(var i in result){
          let rows = document.createElement("tr")
          table.appendChild(rows);
          let img1= document.createElement('img');
          rows.appendChild(img1);
          img1.src="https://avatars2.githubusercontent.com/u/20858568?v=4";
          img1.height=70;
          img1.width= 70;
          let col1 = document.createElement("td");
          rows.appendChild(col1);
          col1.innerHTML = result[i].id;

          let col2 = document.createElement("td");
          rows.appendChild(col2);
          col2.innerHTML = result[i].name;

          let col3 = document.createElement("td");
          rows.appendChild(col3);
          col3.innerHTML = result[i].owner['login'];
        }
      }   
  }
}
}



    
    