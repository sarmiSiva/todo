const addTodo = () => {
  //create new todo item
  const newTodoInput = document.getElementById("newTodo");
  let currentTodoList = document.getElementById("todoList").innerHTML;
  currentTodoList += `<li class="todo">${newTodoInput.value}</li>`;
  document.getElementById("todoList").innerHTML = currentTodoList;
  newTodoInput.value = "";
  // update the displayed item count
  updateItemCount()
};

const updateItemCount = () => {
  let count = getItemCount();
  document.getElementById("itemCount").innerHTML = count;
}

const getItemCount = () => {
  let currentTodoList = document.getElementById("todoList");
  let count = currentTodoList.childNodes.length ;
  return count;
}

document.getElementById("addTodo").addEventListener("click", addTodo);

const myFunction = () => {
  var newTodoValue = document.getElementById("newTodo").value;
    if (newTodoValue != "" || newTodoValue == empty) {
      alert("Please Enter your todo item ");
    }
}

/**function deleteAllfun() {
  const element = document.getElementById("deleteAllLink");
  element.remove();
}
**/

document.getElementById('deleteAllLink').addEventListener('click', handleClearAll);
function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

const sortLinkfun = ()=>{
  document.getElementById("sortLink").sort();
}



