function hienThi(id) {
  let danhSach = document.querySelectorAll(".info");
  danhSach.forEach(function (item) {
    item.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
function count() {
  let text = document.getElementById("input-text").value;

  text = text.trim();
  let wordcnt = 0;

  if (text !== "") {
    let wordarr = text.split(/\s+/);
    wordcnt = wordarr.length;
  }
  document.getElementById("ketqua").value =
    "Số từ trong văn bản là: " + wordcnt;
}
function caps() {
  let text = document.getElementById("input-text").value;

  let uppertext = text.toUpperCase();

  document.getElementById("input-text").value = uppertext;
}
