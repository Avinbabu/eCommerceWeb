var json_data =''
var output =''
//let k =[]
let http = new XMLHttpRequest();
http.open('get', "https://reqres.in/api/users?page=2", true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let user = JSON.parse(this.responseText);
      // console.log(user.data)
      json_data = user.data;
      json_data.forEach(value=>{
        value.full_name = (value.first_name +' '+ value.last_name);
      });

      for(let item of json_data){
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
        // k.push(item.first_name+" "+item.last_name)
        // k.push(item.first_name)
        // k.push(item.last_name)
        // k.push(item.email)
        
      }
      document.querySelector(".cardgroup").innerHTML = output;
      
   }
}
function showuser(id){
  document.getElementById('popup').style.display='block'
  for (let items of json_data){
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
    for (let items of json_data){
      if (input == items.id || input == items.first_name ||input == items.last_name ||input == items.email||input==items.first_name+" "+items.last_name){
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


  // let sortedUsers = k.sort();
  // let input = document.getElementById('searchbar');
  // input.addEventListener("keyup", (e) => {
  //   removeElements();
  //   for (let i of sortedUsers) {
  //     if (
  //       i.toLowerCase().startsWith(input.value.toLowerCase()) &&
  //       input.value != ""
  //       ) {
  //       //create li element
  //       let listItem = document.createElement("li");
  //       //One common class name
  //       listItem.classList.add("list-items");
  //       listItem.style.cursor = "pointer";
  //       listItem.setAttribute("onclick", "displayNames('" + i + "')");
  //       //Display matched part in bold
  //       let word = "<b>" + i.substr(0, input.value.length) + "</b>";
  //       word += i.substr(input.value.length);
  //       //display the value in array
  //       listItem.innerHTML = word;
  //       document.querySelector(".list").appendChild(listItem);
  //       }
  //     }
  // });

  // function displayNames(value) {
  //   input.value = value;
  //   removeElements();
  // }
  // function removeElements() {
  //   //clear all the item
  //   let items = document.querySelectorAll(".list-items");
  //   items.forEach((item) => {
  //     item.remove();
  //   });
  // }

  

const search = document.getElementById("searchbar");
const results = document.getElementById("user_list");
let search_term ="";

const showList = () => {
  results.innerHTML = "";
  json_data.filter((item)=>{
    return(
      item.first_name.toLowerCase().includes(search_term)||
      item.last_name.toLowerCase().includes(search_term)||
      item.full_name.toLowerCase().includes(search_term)||
      item.email.toLowerCase().includes(search_term)
    );
  })
  .forEach((e)=>{
    output += `<div class="card">
    <img src="${e.avatar}" alt="${e.id}">
    <h4 class="card-title"><b>${e.first_name} ${e.last_name}</b></h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">User id : ${e.id}</li>
      <li class="list-group-item">Email :<a> ${e.email} </a></li>
    </ul>
    <button onclick="showuser(${e.id})"  class="btn btn-dark" >
    READ MORE</button>
  </div>
`;
  });

  document.querySelector(".cardgroup").innerHTML = output;
  output = "";
};

search.addEventListener("input",(event)=>{
  search_term = event.target.value.toLowerCase();

  showList();
});







    








  