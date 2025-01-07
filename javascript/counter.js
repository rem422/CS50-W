let counter = 0

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the button to call the count function when clicked
    document.querySelector('button').onclick = count;

    setInterval(count, 1000); // Call count every second
});