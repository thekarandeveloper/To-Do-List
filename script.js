// Variables
var root = document.querySelector(":root");
var container = document.querySelector(".container");
var newTaskInput = document.getElementById("new_task_input");
var taskform = document.getElementById("new_task_form");
var tasksList = document.getElementById("tasksList");
var taskBtns = document.querySelectorAll(".task_check_btn");
var themeBtn = document.querySelector(".theme_toogle_btn");
// Do this when we submit the form
taskform.addEventListener("submit", function (e) {
    e.preventDefault();
    var newtaskInputValue = taskform.elements.new_task_input;

    addTask(newtaskInputValue.value);

    // Reset input value to empty
    newtaskInputValue.value = "";
    container.classList.remove("task_list_empty");
});

// To  add task in List
function addTask(newTask) {
    // Create li element and set its class
    const newTaskItem = document.createElement("li");
    newTaskItem.setAttribute("class", "task_item");

    // Create checkbox  element and set its type and  class

    const newCheckBtn = document.createElement("div");
    newCheckBtn.setAttribute("class", "task_check_btn");

    // Create span  element and set its class and add new task input
    const newTaskBio = document.createElement("span");
    newTaskBio.setAttribute("class", "task_bio");
    // Put value of input in it
    newTaskBio.innerText = newTask; // putting value of input in the li

    // append (insert) li tag in Ul
    tasksList.appendChild(newTaskItem);
    // append (insert) checkbox in li
    newTaskItem.appendChild(newCheckBtn);

    // append (insert) newtask in li
    newTaskItem.appendChild(newTaskBio);

    // Run this function when task is completed or checknox is checked
    onTaskComplete(newCheckBtn);
}

// To remove the completed task
function onTaskComplete(btns) {
    btns.addEventListener("click", function (element) {
        var parents = element.target.parentElement;
        parents.classList.add("task-completed"); // To slide out the task to the right
        // Now we delete that tast which we have slided out
        setTimeout(() => {
            // Removing Parent Element of checkobx which is Li in 0.5 s
            parents.remove();
        }, 400);

        if (tasksList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add("task_list_empty");
            }, 200);
        }
    });
}

// Dark mode

themeBtn.addEventListener("click", function () {
    var darkTheme = themeBtn.classList.toggle("dark");

    if (darkTheme) {
        root.style.setProperty("--theme-transition", "1s");
        root.style.setProperty("--primary-color", "#1E1E1E");
        root.style.setProperty("--secondary-color", "#3B3B3B");
        root.style.setProperty("--text-color", "#EAEAEA");
        root.style.setProperty("--task-color", "#3B3B3B");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Light-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Dark-empty.svg')`
        );
        root.style.setProperty("--filter", "invert()");
    } else {
        root.style.setProperty("transition", "1s");
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#1E1E1E");
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("--task-color", "white");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Dark-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Light-empty.svg')`
        );
    }
});
