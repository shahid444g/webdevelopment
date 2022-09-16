console.log("my javascript is working successfully")
// constructor
function Admissions(studentname,phonenumber,address,group){
this.studentname = studentname;
this.phonenumber = phonenumber;
this.address = address;
this.group = group;
}

// display constructor 
function Display(){

}
// add methods to display prototypes 
Display.prototype.add = function(admissions){
    console.log("lets check this");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
    <td>${admissions.studentname}</td>
    <td>${admissions.phonenumber}</td>
    <td>${admissions.address}</td>
    <td>${admissions.group}</td>
</tr>`;
tableBody.innerHtml += uiString;

}

// to clear the screen 
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// to validate 
Display.prototype.show = function(group, displayMessage){
    let message = document.getElementById('message');
    message.innerHTML =`<div class="alert alert-${group} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
    </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
    
    
    
}
Display.prototype.validate = function (admissions) {
    if (admissions.studentname.length < 2 || admissions.phonenumber.length < 2 || admissions.address.length < 2 ) {
        return false;

    }
    else{
        return true;
    }
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e){
    let studentname = document.getElementById('studentname');
    let phonenumber = document.getElementById('phonenumber');
    let address = document.getElementById('address');
    let BSC = document.getElementById('B-SC');
    let COMPUTERS = document.getElementById('COMPUTERS');
    let MEDICAL = document.getElementById('MEDICAL');
    let group;
    
    
    if (BSC.checked) {
        group = BSC.value;
    }
    else if (COMPUTERS.checked) {
        group = COMPUTERS.value;
    }
    else if (MEDICAL.checked) {
        group = MEDICAL.value;
    }

    let admissions = new Admissions(studentname, phonenumber, address,group);
    console.log(admissions);

    let display = new Display();

    if (display.validate(admissions)) {

        display.add(admissions);
        display.clear();
        display.show('success', 'Your admissions has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this admissions');
    }

    e.preventDefault();
}


