const buttons = document.querySelectorAll('.rates');
const submit = document.getElementById('submit');
const selectionMsg = document.getElementById('salutation');
const state1 = document.getElementById('state-1'); 
const state2 = document.getElementById('state-2');
let selected = "";

buttons.forEach(button =>{
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selected = this.textContent;
    });
    });


    submit.addEventListener("click", (e) => {
        if (selected === "") {
            addButtonErrors();
            setTimeout(() => {
                removeButtonErrors();
            }, 3000);
            return;
        }
    
        selectionMsg.textContent = `You selected ${selected} out of 5`;
        state1.style.display = "none"; // Hide state-1
        state2.style.display = "block"; // Show state-2
    });
    
    function addButtonErrors()
{
    error.classList.remove("d-none")
    buttons.forEach(btn => {
        btn.classList.add("error")
    })
}

function removeButtonErrors()
{
    error.classList.add("d-none")
    buttons.forEach(btn => {
        btn.classList.remove("error")
    })
}

function removeSelectedClasses()
{
    buttons.forEach(btn => {
        btn.classList.remove("selected")
    })
}
    
    
    
    