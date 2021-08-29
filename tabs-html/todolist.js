



const items = [{"item":"Do math homework","status":0},
{"item":"Do math homework","status":1}];

const itemsStr = JSON.stringify(items);

console.log(items);
console.log(itemsStr);

function fetchItems(){
  var items = localStorage.getItem('todo-items');

}

function saveItems(){
  
}