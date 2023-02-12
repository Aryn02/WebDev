const form = document.querySelector('#searchcontent');
const input = document.querySelector('input');
const list_el = document.querySelector('#tasklist')

function addTask() {

    const task = input.value;

    if (!input.value) {
        alert("Please fill out the task");
        return;
    }else{
        

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_checkdiv_el = document.createElement("div");
        task_checkdiv_el.classList.add("check");

        const task_checkbox_el = document.createElement("input");
        task_checkbox_el.classList.add("chkbox");
        task_checkbox_el.setAttribute('type','checkbox');

        task_checkdiv_el.appendChild(task_checkbox_el);
        task_el.appendChild(task_checkdiv_el)

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);
    }
}

