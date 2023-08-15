// step-1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // get the email address inside the email input field
    // always remember to use .value to get text from an input
    const emailField=document.getElementById('user-email').value
    // step-3 get password
    const passwordField=document.getElementById('user-password').value
    console.log(emailField,passwordField)
    // DANGER: do not verify the email in client side
    // step-4: verify email and password
    if(emailField=='valo_chele/meye@bank.com'  && passwordField == 123456789){
        window.location.href='bank.html'
    }else{
        alert('তুই password ভুলে গেসিশ!!!!! ত্যাজ্য সন্তান ঘোষণা করলাম। ')
    }


})