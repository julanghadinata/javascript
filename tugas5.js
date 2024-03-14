// Cara 1
for (i = 1; i <= 20; i++) {
  if (i % 3) {
    continue;
  }
  console.log(i);
}

// Cara 2
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
