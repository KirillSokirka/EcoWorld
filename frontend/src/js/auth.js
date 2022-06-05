const signInbutton = document.querySelector("#signIn-btn"),
    signUpbutton = document.querySelector("#signUp-btn"),
    signInModal = document.querySelector("#signIn-modal"),
    signUpModal = document.querySelector("#signUp-modal");

signUpModal.querySelector(".close").onclick = () => {
    signUpModal.style.display = "none";
};

signInbutton.onclick = () => {
    signInModal.style.display = 'flex';
};

signInModal.querySelector(".close").onclick = () => {
    signInModal.style.display = "none";
};

signUpbutton.onclick = () => {
    signUpModal.style.display = 'flex';
};
