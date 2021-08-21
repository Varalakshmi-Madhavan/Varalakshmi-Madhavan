document.getElementById('form-submit').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('password-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    
    if(email == '') {
       document.getElementById('email-error').innerText = 'E-mail is required';
    } else if(password == '') {
        document.getElementById('password-error').innerText = 'password is required';
    } else {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
});