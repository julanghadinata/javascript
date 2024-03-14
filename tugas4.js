yanto = 165;
asep = 182;
udin = 175;

function tinggiBadan(a, b, c) {
  if (a > b && a > c && b > c) {
    console.log(
      `Urutan tinggi badan : Yanto ${a} cm, Asep ${b} cm, Udin ${c} cm`
    );
  } else if (a > b && a > c && c > b) {
    console.log(
      `Urutan tinggi badan : Yanto ${a} cm, Udin ${c} cm, Asep ${b} cm `
    );
  } else if (b > a && b > c && a > c) {
    console.log(
      `Urutan tinggi badan : Asep ${b} cm, Yanto ${a} cm, Udin ${c} cm `
    );
  } else if (b > a && b > c && c > a) {
    console.log(
      `Urutan tinggi badan : Asep ${b} cm, Udin ${c} cm, Yanto ${a} cm `
    );
  } else if (c > a && c > b && a > b) {
    console.log(
      `Urutan tinggi badan : Udin ${c} cm, Yanto ${a} cm, Asep ${b} cm `
    );
  } else if (c > a && c > b && b > a) {
    console.log(
      `Urutan tinggi badanz : Udin ${c} cm, Asep ${b} cm , Yanto ${a} cm `
    );
  } else {
    console.log(`Semua tinggi badan siswa sama`);
  }
}

tinggiBadan(yanto, asep, udin);
