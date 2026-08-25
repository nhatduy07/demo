function hienThi(id, Cost) {
  let danhSach = document.querySelectorAll(".info");
  danhSach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
  document.getElementById("cost").value = Cost;
}
function tinhTien() {
  let cost = document.getElementById("cost").value;
  let quantity = document.getElementById("quantity").value;
  let choice = document.getElementById("choice").value;

  let tongTien = cost * quantity;
  let discout = 0;
  if (choice === "momo") {
    discout = tongTien * 0.1;
  }
  let thanhTien = tongTien - discout;

  let thongBao =
    "Tổng tiền bạn phải trả là: " + tongTien.toLocaleString() + "VNĐ\n";
  if (discout > 0) {
    thongBao += "giảm giá (ví momo): " + discout.toLocaleString() + "VNĐ\n";
  }
  thongBao += "Cần thanh toán: " + thanhTien.toLocaleString() + "VNĐ\n";
  document.getElementById("ketqua").value = thongBao;
}
