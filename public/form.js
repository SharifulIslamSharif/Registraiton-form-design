$(document).ready(() => {
    $("#send").click(() => {
        if (validateFormData() == true) {
            $.ajax({
                url: "/reg_form",
                type: "get",
                dataType: "json",
                data: {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    password: $("#password").val(),
                    address: $("#address").val(),
                    phone: $("#phone").val()
                },
                success: (result) => {
                    $("#output").html(`
                        Server Message: ${result.message}<br />
                        Name: ${result.name} <br />
                        Email: ${result.email} <br />
                        Password: ${result.password} <br />
                        Address: ${result.address} <br />
                        Phone: ${result.phone}`);
                    $("#output").show();
                }
            });
        }
    });
});
function validateFormData() {
    var isValid = true;
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    if (name == null || name == "") {
        isValid = false;
        alert("Please Enter Your Name");
    }
    else if (email == null || email == "") {
        isValid = false;
        alert("Please Enter Your Email");
    }
    else if (password == null || password == "") {
        isValid = false;
        alert("Please Enter Valid Password");
    }
    else if (address == null || address == "") {
        isValid = false;
        alert("Please Enter Address");
    }
    else if (phone == null || phone == "") {
        isValid = false;
        alert("Please Enter Phone Number");
    }
    return isValid;
}