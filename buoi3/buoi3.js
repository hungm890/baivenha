function xepLop() {
    let diemToan = +prompt("Nhập điểm Toán");
    let diemVan = +prompt("Nhập điểm Văn");;
    let diemAnh = +prompt("Nhập điểm Anh");;

    let Total = 2 * (diemToan + diemVan) + diemAnh;
    let result = "";

    if(Total >= 30 || diemToan >8 || diemVan >8) {
        alert("Đỗ nha bé <3");
        if(Total >=40 && diemToan > 8){
            alert("Cút vào lớp Toán");
        } else if(Total >= 40 && diemVan >=8){
            alert("Cút vào lớp Văn");
        }else{
            alert("Lớp Thường nha bé")
        }
    }else{
        alert("Trượt rồi");
    }
}  

xepLop();