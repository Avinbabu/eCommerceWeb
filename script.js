let users1
let k =[]
let http = new XMLHttpRequest();
http.open('get', "https://reqres.in/api/users?page=2", true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let user = JSON.parse(this.responseText);
      // console.log(user.data)
      users1 = user.data
      let output = "";
      for(let item of users1){
        output += `
          <div class="card">
            <img src="${item.avatar}" alt="${item.id}">
            <h4 class="card-title"><b>${item.first_name} ${item.last_name}</b></h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">User id : ${item.id}</li>
              <li class="list-group-item">Email :<a> ${item.email} </a></li>
            </ul>
            <button onclick="showuser(${item.id})"  class="btn btn-dark" >
            READ MORE</button>
          </div>
        `;
        k.push(item.first_name)
        k.push(item.last_name)
        k.push(item.email)
      }
      document.querySelector(".cardgroup").innerHTML = output;
      
   }
}
function showuser(id){
  document.getElementById('popup').style.display='block'
  for (let items of users1){
    if (items.id == id){
      document.getElementById('avatar_').src = items.avatar
      document.getElementById('userName').innerHTML = items.first_name + " " + items.last_name
      document.getElementById('email_id').innerHTML = "Email : " + items.email
      document.getElementById('user_id').innerHTML = "User Id : " + items.id
      
      // console.log(items)

      

    }
    
    

  }

}

// When the user clicks on <span> (x), close the modal
 function closePopup() {
  document.getElementById('popup').style.display = 'none'
}


  function search_user() {
    document.getElementById('popup2').style.display = 'block'
    let input = document.getElementById('searchbar').value
    if(input ==""){
      document.getElementById('popup2').style.display = 'none'
    }
    for (let items of users1){
      if (input == items.id || input == items.first_name ||input == items.last_name ||input == items.email){
        console.log(items.first_name)
        document.getElementById('avatar_2').src = items.avatar
        document.getElementById('userName2').innerHTML = items.first_name + " " + items.last_name
        document.getElementById('email_id2').innerHTML = "Email : " + items.email
        document.getElementById('user_id2').innerHTML = "User Id : " + items.id

      }
    }
  }

  function closePopup2(){
    document.getElementById('popup2').style.display = 'none'
    document.getElementById('searchbar').value = ''
  }


  let sortedUsers = k.sort();
  let input = document.getElementById('searchbar');
  input.addEventListener("keyup", (e) => {
    removeElements();
    for (let i of sortedUsers) {
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
        ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
        }
      }
  });

  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  
      
 
  







    








  