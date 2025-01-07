document.addEventListener("DOMContentLoaded", function() {
     // By default the submit button is disabled until a task is entered
    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0) {
            // Enable the submit button when a task is entered
            document.querySelector('#submit').disabled = false;
        } else {
            // Disable the submit button when no task is entered
            document.querySelector('#submit').disabled = true;
        };
    };

    document.querySelector('form').onsubmit = () => {
        const task = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);

        // Clear the input field after adding the task
        document.querySelector('#task').value = ''; 
        document.querySelector('#submit').disable = true;
        // Stop form from submitting
        return false;
    };
});