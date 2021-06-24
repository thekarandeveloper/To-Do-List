// Variables
var taskform = document.getElementById('new_task_form');
var tasksList = document.getElementById('tasksList');
var taskBtn=document.querySelectorAll('.task_check_btn');

taskform.addEventListener('submit', function (e) {
    e.preventDefault()
    
    var newTaskInput = taskform.elements.new_task_input; // value of Input
    


    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item')
    const newCheckBtn = document.createElement('input');
    newCheckBtn.setAttribute('type', 'checkbox')
    newCheckBtn.setAttribute('class', 'task_check_btn')
    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'task_bio')
    newTaskBio.innerText = newTaskInput.value; // putting value of input in the li
    tasksList.appendChild(newTaskItem)
    newTaskItem.appendChild(newCheckBtn)
    newTaskItem.appendChild(newTaskBio)
    
    newTaskInput.value="";

})



// for (const taskItem of tasksItemList) {

//     const newTaskItem = document.createElement('li');
//     newTaskItem.setAttribute('class', 'task_item')
//     const newCheckBtn = document.createElement('input');
//     newCheckBtn.setAttribute('type', 'checkbox')
//     newCheckBtn.setAttribute('class', 'task_check_btn')
//     const newTaskBio = document.createElement('span');
//     newTaskBio.setAttribute('class', 'task_bio')
//     newTaskBio.innerText = taskItem;
//     tasksList.appendChild(newTaskItem)
//     newTaskItem.appendChild(newCheckBtn)
//     newTaskItem.appendChild(newTaskBio)
// }