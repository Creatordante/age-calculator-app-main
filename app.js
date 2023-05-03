const formContainer = document.querySelector(".form-container");
const btn = document.getElementById("btn");
const txtDisplayed = document.querySelector(".txt-container");
const userTxt = document.querySelectorAll(".input-container");

// Form inputs
const txtDay = document.getElementById("day");
const txtMonth = document.getElementById("month");
const txtYear = document.getElementById("year");


// Event Listeners

formContainer.addEventListener("click", e => {

    // Checks if its an input
    if(e.target.parentElement.className === "input-container"){
    }

    
});

// Summit btn listener
btn.addEventListener("click", e =>{
    e.preventDefault();

    if (e.target.id === "btn"){
        validateform();
    }
    
});


function validateform(){

    // Current date
    const currentDate = new Date();

    //User input data
    const day = parseInt(txtDay.value) ;
    const month = parseInt(txtMonth.value) ;
    const year = parseInt(txtYear.value);

    //Date From user
    const date = new Date( year , (month - 1) , day) ;

    // Reset styles
    cleanHtml();


    userTxt.forEach(userInput =>{

        // Check if its empty or diferent from a number
        if(isNaN(parseInt(userInput.lastElementChild.value))){
            errorMsg(userInput,"This field is required");
            return;
        }

        //Check for invalid numbers in the date
        if(userInput.lastElementChild.id === "day" ){
            if(parseInt(userInput.lastElementChild.value) > 31){
                errorMsg(userInput,"Must be a valid day");
                return;
            }
            else if (parseInt(userInput.lastElementChild.value) !== date.getDate()){
                errorMsg(userInput,"Must be a valid date");
                return;
            }
        }
        else if (userInput.lastElementChild.id === "month" && parseInt(userInput.lastElementChild.value) > 12){
            errorMsg(userInput,"Must be a valid month");
            return;
                
        }
        else if (userInput.lastElementChild.id === "year" && parseInt(userInput.lastElementChild.value) > currentDate.getFullYear()){
            errorMsg(userInput,"Must be in the past");
            return;
        }

    });
}

function errorMsg(userInput,msg){

    //Creates element
    const errorMsg = document.createElement("P");
    errorMsg.innerText = msg;

    //Element styling
    userInput.firstElementChild.classList.add("error");
    errorMsg.classList.add("error-msg");
    userInput.firstElementChild.nextElementSibling.classList.add("error-border");

    // Adds element to html
    userInput.appendChild(errorMsg);
}

function cleanHtml(){
    
}

