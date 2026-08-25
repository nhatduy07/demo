function UCLN() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  while (a <= 0 || b <= 0) {
    document.getElementById("ketqua").value = "vui lòng nhập số nguyên!";
    return;
  }
  while (b != 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  document.getElementById("ketqua").value = "Kết Quả: " + a;
}
function hienThi(id) {
  let danhsach = document.querySelectorAll(".noidung");
  danhsach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
