/* javascript scripts */

/* contact form validation */
function validate(){
    var txtDob = $("#bday").val();
    var dob = new Date(txtDob);
    if(dob >= new Date()){
        alert("Date of birth is not valid");
        return false;
    }
    var phone = $("#phone").val();
    if(phone.length != 10 || isNaN(phone)){
        alert("Phone number is not valid or not in a valid format");
        return false;
    }
}