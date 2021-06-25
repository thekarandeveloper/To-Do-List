// Variables
var newTaskInput = document.getElementById('new_task_input')
var taskform = document.getElementById('new_task_form');
var tasksList = document.getElementById('tasksList');
var taskBtns = document.querySelectorAll('.task_check_btn');
var container = document.querySelector('.container');
// Do this when we submit the form
taskform.addEventListener('submit', function (e) {

    e.preventDefault();
    var newtaskInputValue = taskform.elements.new_task_input;


    addTask(newtaskInputValue.value)

    // Reset input value to empty
    newtaskInputValue.value = '';
    container.classList.remove('task_list_empty')


})

// To  add task in List
function addTask(newTask) {

    // Create li element and set its class
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item');

    // Create checkbox  element and set its type and  class

    const newCheckBtn = document.createElement('input');
    newCheckBtn.setAttribute('type', 'checkbox')
    newCheckBtn.setAttribute('class', 'task_check_btn')

    // Create span  element and set its class and add new task input
    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'task_bio')
    // Put value of input in it
    newTaskBio.innerText = newTask; // putting value of input in the li

    // append (insert) li tag in Ul
    tasksList.appendChild(newTaskItem)
    // append (insert) checkbox in li
    newTaskItem.appendChild(newCheckBtn)

    // append (insert) newtask in li
    newTaskItem.appendChild(newTaskBio)

    // Run this function when task is completed or checknox is checked
    onTaskComplete(newCheckBtn)

}

// To remove the completed task
function onTaskComplete(btns) {

    btns.addEventListener('click', function (e) {
        setTimeout(() => {

            var parent = e.toElement.parentElement;

            // Removing Parent Element of checkobx which is Li in 0.5 s
            parent.remove();
        }, 500);


        if (tasksList.childNodes.length == 2) {


            setTimeout(() => {
                container.classList.add('task_list_empty')

            }, 500);
        }

    })


}
