document.addEventListener("DOMContentLoaded", function() {

    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;

    function handleCheck(e) {
        let betweenChecked = false;
        if (e.shiftKey && this.checked) {
            console.log(e);

            checkboxes.forEach( checkbox => {
                console.log(checkbox);

                if (checkbox === this || checkbox === lastChecked) {
                    betweenChecked = !betweenChecked;
                    console.log('checking');
                }

                if (betweenChecked) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }

    checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck));
});
