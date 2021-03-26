var addBtn = document.querySelector('#add-todo');
var newTodo = document.querySelector('.input');
var plus = document.querySelector('#plus');
var isOpen = false;
var addTick = document.querySelector('#add-tick');
var todoInput = document.querySelector('#todo-input');
var list = document.querySelector('.list');
var listTick = document.querySelector('.done');
var listTrash = document.querySelector('.delete');


addBtn.addEventListener('click', ()=>{
    if(isOpen){
        isOpen = false;
        newTodo.className = 'input';
        addTick.className = 'add-tick';
        plus.style = 'transform: rotate(0deg);';
    }else{
        isOpen = true;
        newTodo.className = 'input-open';
        addTick.className = 'add-tick-open';
        plus.style = 'transform: rotate(45deg);';
    }
});

addTick.addEventListener('click', () =>{
    if(todoInput.value != ''){
        let newLi = document.createElement('li');

        let tick = document.createElement('i');
        tick.setAttribute('class', 'done bi bi-check2');
        tick.setAttribute('id', 'done');
        newLi.appendChild(tick);

        let content = document.createElement('p');
        content.setAttribute('id', 'list-content');
        content.textContent = todoInput.value;
        newLi.appendChild(content);

        let trash = document.createElement('i');
        trash.setAttribute('class', 'delete bi bi-x');
        trash.setAttribute('id', 'delete');
        newLi.appendChild(trash);

        list.appendChild(newLi);

        todoInput.value = '';
    }
});

var isCompleted = false;
list.addEventListener('click', (e) => {
    if(e.target.className.includes('done')){
        if(isCompleted){
            isCompleted = false;
            e.target.nextElementSibling.style = 'text-decoration: none; color: #000'
        }
        else{
            isCompleted = true;
            e.target.nextElementSibling.style = 'text-decoration: line-through; color: #949494'
        }
    }
});

list.addEventListener('click', (e) => {
    if(e.target.className.includes('delete')){
        console.log('here');
        e.target.parentNode.remove();
    };
});