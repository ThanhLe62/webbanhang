const btnLogin = document.querySelector(".form-submit");
const inputUserLogin = document.querySelector(".form-input");
const inputPasswordLogin = document.querySelector(".form-input-password");
btnLogin.addEventListener("click", function(e){
    e.preventDefault();
    if (inputUserLogin.value === "" || inputPasswordLogin.value === ""){
        alert("Vui lòng không để trống");
    } else {
        const userLocal = JSON.parse(localStorage.getItem("users"));

        let flag = false;
        
        for (let i = 0; i < userLocal.length; i++){
            if(
                userLocal[i].email == inputUserLogin.value &&
                userLocal[i].password == inputPasswordLogin.value
                ){
                    flag = true;
                    break;
                }else{
                    flag = false;
                }}
                if (flag){
                    alert("Đăng nhập thành công");
                    window.location.href = "index.html";
                }
                
            }
    });