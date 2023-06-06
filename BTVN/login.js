function dangNhap(){
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;
let a = (user.length);
let b = (pass.length);
console.log(a, b);  
if(a<=3 || b <=5)
    {
        result = "Dữ liệu nhập vào không hợp lệ";
    } else{
        if(user == "admin" && pass == "000000" )
            {
                result = "Đăng nhập thành công"
            } else{
                result = "Tài khoản hoặc mật khẩu không đúng";
            }
            alert(result);
    }
}
