//function OBJECT
let B7validator = {
    
    //FUNCTION
    handleSubmit: (event) => {
        //The 'preventDefault()' function stops the default behavior.
        event.preventDefault();
    }

};

let form = document.querySelector('.validator');

/* 
 - It keeps monitoring the form until a 'submit' is executed.
 - When 'submit' occurs, the 'handleSubmit()' function is executed.
 */
form.addEventListener('submit', B7validator.handleSubmit);