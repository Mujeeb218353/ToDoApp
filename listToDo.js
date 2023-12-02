let i=0;
function addTodo(value){
    const todoItem = document.createElement('div');
    todoItem.className = 'box';
    const inputElement = document.createElement('input');
    inputElement.id = 'inputElement'+i;
    inputElement.type = 'text';
    inputElement.disabled = true;
    inputElement.value = value;
    inputElement.style.cssText = 'background: white; border: none; width: 85%';
    const buttonContainer = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.className = 'btn btn-success';
    editButton.innerHTML = 'Edit';
    editButton.style.margin = '0 3px 0 3px';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.id = 'deleteButton'+i;
    i++;
    deleteButton.innerHTML = 'Delete';
    editButton.addEventListener('click', () => {
        if (inputElement.disabled) {
            inputElement.disabled = false;
            inputElement.style.border = '2px solid black';
            inputElement.style.borderRadius = '5px';
            editButton.innerHTML = 'Save';
        } else {
            inputElement.disabled = true;
            inputElement.style.border = 'none';
            editButton.innerHTML = 'Edit';
        }
    });
    deleteButton.addEventListener('click', () => document.getElementById(deleteButton.id).parentNode.parentElement.remove());
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    todoItem.appendChild(inputElement);
    todoItem.appendChild(buttonContainer);
    const todoList = document.getElementById('todoList');
    todoList.appendChild(todoItem);
}
function deleteAll(){
    document.getElementById('todoList').innerHTML = '';
}
