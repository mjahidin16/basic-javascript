class Pendaftar {
  constructor(nama, umur, uangSangu) {
    this.nama = nama;
    this.umur = umur;
    this.uangSangu = uangSangu;
  }
}

const pendaftarList = [];
const registrationForm = document.getElementById("registration-form");
const listBody = document.getElementById("list-body");
const averageInfo = document.getElementById("average-info");

registrationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const uangSangu = parseInt(document.getElementById("uang-sangu").value);

  if (
    nama.length < 10 ||
    umur < 25 ||
    uangSangu < 100000 ||
    uangSangu > 1000000
  ) {
    alert("Data tidak valid. Periksa kembali kriteria.");
  } else {
    const pendaftar = new Pendaftar(nama, umur, uangSangu);
    pendaftarList.push(pendaftar);
    updateList();
  }
});

function updateList() {
  listBody.innerHTML = "";
  let totalUangSangu = 0;
  let totalUmur = 0;

  for (const pendaftar of pendaftarList) {
    totalUangSangu += pendaftar.uangSangu;
    totalUmur += pendaftar.umur;

    const row = document.createElement("tr");
    row.innerHTML = `<td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>${pendaftar.uangSangu}</td>`;
    listBody.appendChild(row);
  }

  const averageUangSangu = totalUangSangu / pendaftarList.length;
  const averageUmur = totalUmur / pendaftarList.length;

  averageInfo.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${averageUangSangu} dengan rata-rata umur ${averageUmur}`;
}
