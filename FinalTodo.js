window.onload=function(){
  var addBox=document.getElementById("addBox");
  var addButton=document.getElementById("addButton");
  var todoList=document.getElementById("todoList");

  var todoArr=JSON.parse(localStorage.getItem("todoArr"))||[];
  var todoItem={};

  addButton.onclick=function(){
    todoItem.task=addBox.value;
    addBox.value="";
    todoItem.status="notDone";
    todoArr.push(todoItem);
    localStorage.setItem("todoArr",JSON.stringify(todoArr));
    display();
  }
  function display(){
    var finalList="";
    for(let i=0;i<todoArr.length;i++)
    {

      if(todoArr[i].status=="Done")
      {
        finalList+=`<div class="lad">
        <input type="text" value="${todoArr[i].task}" id=${i} class="doneItem">
        <button onclick="changeStatus(${i})" id="btn"><i class="fa fa-check-square-o fa-2x"></i> </button>
        <button onclick="editItem(${i})" id="btn"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></button>
        <button onclick="deleteItem(${i})" id="btn"><i class="fa fa-trash-o fa-2x"></i></button>
        </div>`;
      }
      else //not notDone
      {
        finalList+=`<div class="land">
        <input type="text" value="${todoArr[i].task}" id=${i}  class="NotdoneItem">
        <button onclick="changeStatus(${i})" id="btn"><i class="fa fa-check-square-o fa-2x"></i> </button>
        <button onclick="editItem(${i})" id="btn"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></button>
        <button onclick="deleteItem(${i})" id="btn"><i class="fa fa-trash-o fa-2x"></i></button>
        </div>`;

      }
    }
    todoList.innerHTML="";
    todoList.innerHTML=finalList;
  }
  function changeStatus(i)
  {
    if(todoArr[i].status=="Done"){
    todoArr[i].status="notDone";
  }
    else {
      todoArr[i].status="Done";
    }
    localStorage.setItem("todoArr",JSON.stringify(todoArr));
    display();
  }
  function editItem(i){

    let temp=document.getElementById(i);
    // temp.focus();
    todoArr[i].task=temp.value;
    localStorage.setItem("todoArr",JSON.stringify(todoArr));
    display();
  }
  function deleteItem(i){
    todoArr.splice(i,1);
    localStorage.setItem("todoArr",JSON.stringify(todoArr));
    display();
  }
  window.editItem=editItem;
  window.deleteItem=deleteItem;
  window.changeStatus=changeStatus;
display();
}
