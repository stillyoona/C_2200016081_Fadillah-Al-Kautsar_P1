// math.js
function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

function kurang(a, b) {
  return a - b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error('Tidak bisa membagi dengan nol');
  }
  return a / b;
}

export { tambah, kali, kurang, bagi };
