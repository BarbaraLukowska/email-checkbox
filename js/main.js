document.addEventListener("DOMContentLoaded", function() {

    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;
    function handleCheck(e) {
        if (e.shiftKey) {
            console.log(e)
        }
    }

    checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck));
});
