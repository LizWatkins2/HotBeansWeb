<<<<<<< HEAD
function checkname() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phonenum = document.getElementById("phonenum").value;
    let qualifications= document.getElementById("qualifications").value;
    let personalwebsite = document.getElementById("personalwebsite").value;
    let languages = document.getElementById("languages").value;


    if (fname == "" || lname == "" || email == "" || phonenum == "" || qualifications == "" || personalwebsite == "" || languages == "") {
        alert("Please ensure all fields are filled out correctly.")
    }
    else {
        alert("Thank you" + " " + fname + " " + lname + " " + "your application was successful, we'll get back to you soon!");
    }

}

function resetForm() {
    document.getElementById("Apply").reset();
=======
function checkname() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phonenum = document.getElementById("phonenum").value;
    let qualifications= document.getElementById("qualifications").value;
    let personalwebsite = document.getElementById("personalwebsite").value;
    let languages = document.getElementById("languages").value;


    if (fname == "" || lname == "" || email == "" || phonenum == "" || qualifications == "" || personalwebsite == "" || languages == "") {
        alert("Please ensure all fields are filled out correctly.")
    }
    else {
        alert("Thank you" + " " + fname + " " + lname + " " + "your application was successful, we'll get back to you soon!");
    }

}

function resetForm() {
    document.getElementById("Apply").reset();
>>>>>>> 922d5ca (first commit)
}