function hienThi(id, Cost) {
  let danhSach = document.querySelectorAll(".info");
  danhSach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
  document.getElementById("cost").value = Cost;
}
function tinhTien() {
  let a = document.getElementById("cost").value;
  let b = document.getElementById("cash").value;

  let thongBao = "";

  if (b < a) {
    let tienThieu = a - b;
    thongBao =
      "Khách đưa chưa đủ! Cần thêm: " + tienThieu.toLocaleString() + "VNĐ\n";
  } else if (b === a) {
    thongBao = "Khách đưa đủ tiền. Khồn cần thối lại!\n";
  } else {
    let tienThua = b - a;
    thongBao = "Tiền cần thối lại là: " + tienThua.toLocaleString() + "VNĐ\n";
  }
  document.getElementById("ketqua").value = thongBao;
}
