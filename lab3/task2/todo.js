const form = document.querySelector('#searchcontent');
const input = document.querySelector('input');

function addTask() {
    if (!input.value) {
        alert("Please fill out the task");
        return;
    }else{
        alert("Success")
        
    }
}

