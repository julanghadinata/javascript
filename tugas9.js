function tugasObject() {
  var dataDiri = {
    nama: "Julang Hadinata",
    umur: 24,
    jeniskelamin: "Laki-laki",
    alamat: "Puri Kampial B.05, Kuta Selatan, Bali",
  };

  for (var x in dataDiri) {
    console.log(dataDiri[x]);
  }
}

tugasObject();
