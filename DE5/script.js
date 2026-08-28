function hienThi(id) {
  let danhSach = document.querySelectorAll(".info");
  danhSach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function tinhToan() {
  let day = document.getElementById("ngaydangki").value;
  let ngayHuy = document.getElementById("ngayhuy").value;

  if (!day) {
    document.getElementById("ketqua").value = "Vui lòng nhập ngày!";
    return;
  }
  let ngay = new Date(day);

  ngay.setDate(ngay.getDate() + Number(ngayHuy));

  let d = String(ngay.getDate()).padStart(2, "0");

  let m = String(ngay.getMonth() + 1).padStart(2, "0");

  let y = ngay.getFullYear();

  document.getElementById("ketqua").value =
    "Hủy trước ngày: " + d + "/" + m + "/" + y;
}
