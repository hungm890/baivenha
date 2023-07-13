// a++: trả về a => post inscrement 
// ++a: trả về a + 1 => pre inscrement
function tamGiac(){
let a = +document.getElementById("a").value;
let b = +document.getElementById("b").value;
let c = +document.getElementById("c").value;

if (a > 0 && b > 0 && c > 0) {
    if(a < b + c && b < a + c && c < a + b){
        if(a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b ){
            result = "tam giác vuông đấy"
        }else if(a == b && a == c){
            result = "tam giác đều"
        }else if(a = b && a != c && b != c) {
            result = "tam giác cân"
        }
        

    }else{
        result = "Hình gì đây bé?";

    }

}else{   
    result = "hình nào có cạnh nhỏ hơn 0 ";
}   
document.getElementById("result").innerText = result;

}

