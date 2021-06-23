// Variables
var taskform = document.getElementById('new_task_form');
var taskList = document.getElementsByClassName('.taskList')

const tasksItemList = [];

taskform.addEventListener('submit', function (e) {
    e.preventDefault()
    let newTask = taskform.elements.new_task_input.value;
    tasksItemList.push(newTask)
 console.log(tasksItemList);


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
    //     taskList.appendChild(newTaskItem)
    //     newTaskItem.appendChild(newCheckBtn)
    //     newTaskItem.appendChild(newTaskBio)
    // }

