const loginLink = document.querySelector('.login');
const signUpLink = document.querySelector('.signup');
const signupForm = document.querySelector('.signUp');
const loginForm = document.querySelector('.Login');


// Show SignUp Modal
const showSignUp = () => {
    signupForm.style.display = "block";
}

// Hide SignUp Modal
const hideSignUp = () => {
    signupForm.style.display = "none";
}

// Show LogIn Modal
const showLogIn = () => {
    loginForm.style.display = "block";
}

// Hide LogIn Modal
const hideLogIn = () => {
    loginForm.style.display = "none";
}






window.addEventListener('load', () => {
    setTimeout(() => {
        showSignUp();
    }, 3000);

    loginLink.addEventListener('click', () => {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    signUpLink.addEventListener('click', () => {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
});