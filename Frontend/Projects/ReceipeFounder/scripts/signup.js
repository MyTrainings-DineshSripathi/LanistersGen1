const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|zoho|outlook)\.com$/

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/


const signupForm = document.getElementById('signupForm')

const emailMessage = document.getElementById('emailMessage')

const passwordMessage = document.getElementById('passwordMessage')

const repasswordMessage = document.getElementById('repasswordMessage')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault() //stops the page reload
    const fullname = document.getElementById('fullname').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value
    const repassword = document.getElementById('repassword').value

    const FormData = {
        fullname, email, phone, password, repassword
    }

    if(validData(FormData))
        console.log(FormData)
    else{
        console.log("invalid data")
    }
})

function validData(formData){
    if(EMAIL_REGEX.test(formData.email)){
        emailMessage.innerHTML = "<span class='success'>invalid email address</span>"
    }else{
       emailMessage.innerHTML = "<span class='error'>invalid email address</span>"
    }

    if(PASSWORD_REGEX.test(formData.password)){
        passwordMessage.innerHTML = "<span class='success'>Valid Password</span>"
    }else{
        passwordMessage.innerHTML = 
        "<span class='error'>invalid Password<ul> <li>min-length : 8</li> <li>max-length : 16</li> <li>1 uppercase, 1 lowercase, 1 special character</li> </ul></span>"
    }

    if(formData.password == formData.repassword){
        repasswordMessage.innerHTML = "<span class='success'>password match</span>"
    }else{
        repasswordMessage.innerHTML = "<span class='error'>repassword doesn't match with actual password</span>"
    }
}