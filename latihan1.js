import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {

  it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });

  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });

  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });

  it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });

  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });

  // Kasus Negatif untuk Pengurangan
  it('seharusnya mengembalikan -5 saat mengurangkan 0 - 5', function() {
    expect(kurang(0, 5)).to.equal(-5);
  });

  it('seharusnya mengembalikan -7 saat mengurangkan -3 - 4', function() {
    expect(kurang(-3, 4)).to.equal(-7);
  });

  it('seharusnya mengembalikan 1 saat mengurangkan -3 - (-4)', function() {
    expect(kurang(-3, -4)).to.equal(1);
  });

  // Kasus Negatif untuk Pembagian
  it('seharusnya mengembalikan -2 saat membagi 6 / -3', function() {
    expect(bagi(6, -3)).to.equal(-2);
  });

  it('seharusnya mengembalikan 2 saat membagi -6 / -3', function() {
    expect(bagi(-6, -3)).to.equal(2);
  });

  // Kasus Negatif untuk Fungsi `tambah`
  it('seharusnya mengembalikan NaN saat menambahkan string "2" + 2', function() {
    expect(tambah("2", 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat menambahkan null + 2', function() {
    expect(tambah(null, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat menambahkan undefined + 2', function() {
    expect(tambah(undefined, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat menambahkan objek {} + 2', function() {
    expect(tambah({}, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat menambahkan array [] + 2', function() {
    expect(tambah([], 2)).to.be.NaN;
  });

  // Kasus Negatif untuk Fungsi `kali`
  it('seharusnya mengembalikan NaN saat mengalikan string "3" * 2', function() {
    expect(kali("3", 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan null * 2', function() {
    expect(kali(null, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan undefined * 2', function() {
    expect(kali(undefined, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan objek {} * 2', function() {
    expect(kali({}, 2)).to.be.NaN;
  });

  it('seharusnya mengembalikan NaN saat mengalikan array [] * 2', function() {
    expect(kali([], 2)).to.be.NaN;
  });

});
