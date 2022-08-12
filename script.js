let http = new XMLHttpRequest();
http.open('get', 'user.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let user = JSON.parse(this.responseText);
      let output = "";
      for(let item of user){
        output += `
          <div class="card">
            <img src="${item.avatar}" alt="${item.id}">
            <h5 class="card-title"><b>${item.first_name} ${item.last_name}</b></h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">User id :${item.id}</li>
              <li class="list-group-item">Email :${item.email}</li>
            </ul>
            <a href="#" class="btn btn-dark">READ MORE</a>
          </div>
         `;
      }
      document.querySelector(".cardgroup").innerHTML = output;
   }
}







    








  