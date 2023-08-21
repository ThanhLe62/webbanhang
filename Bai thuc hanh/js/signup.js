const btnRegister = document.querySelector(".form-submit-Signup");
const inputUserRegister = document.querySelector(".form-input-Signup");
const inputPasswordRegister = document.querySelector(".form-input-password-Signup");
const userLocal = JSON.parse(localStorage.getItem("users"))||[];
btnRegister.addEventListener("click",function(e){
    e.preventDefault();
    if (inputUserRegister.value ===""||inputPasswordRegister.value ===""){
        alert("Vui lòng không để trống");
    }else{
        
        const user = {
            email:inputUserRegister.value,
            password:inputPasswordRegister.value,
        };
        const updateUser = [...userLocal, user];
        
        localStorage.setItem("users", JSON.stringify(updateUser));
        alert("Đăng ký thành công");
        window.location.href = "Login.html";
    }
}
);
