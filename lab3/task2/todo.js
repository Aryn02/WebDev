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

        //checkbox
        const task_checkdiv_el = document.createElement("div");
        task_checkdiv_el.classList.add("check");

        const task_checkbox_el = document.createElement("input");
        task_checkbox_el.classList.add("chkbox");
        task_checkbox_el.setAttribute('type','checkbox');

        task_checkdiv_el.appendChild(task_checkbox_el);
        task_el.appendChild(task_checkdiv_el)

        //content
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;
        task_el.appendChild(task_content_el);

        //delete button
        const delete_div = document.createElement("div");
        delete_div.classList.add("delete");

        const delete_button = document.createElement("button");
        delete_button.classList.add("delete-button")
        delete_button.innerHTML = "Delete";

        delete_div.appendChild(delete_button);
        task_el.appendChild(delete_div);

        list_el.appendChild(task_el);

        input.value = "";
    }
}

