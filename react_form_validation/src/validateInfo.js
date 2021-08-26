export default function validateInfo(values) {
let errors = {};

if (!values.username) {
    errors.username = "Username Required";
}

if (!values.email) {
    errors.email = "Email Required";
}

if (!values.password) {
    errors.password = "Password Required";
} else if (values.password.length < 6){
    errors.password = "Password should have 6 characters or more";
}

if (!values.password2) {
    errors.password2 = "Password Required";
} else if (values.password2 !== values.password){
    errors.password2 = "Passwords does not match";
}

return errors;
}