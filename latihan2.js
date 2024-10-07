import { expect } from 'chai';
import { tambah, kali } from './math.js';

describe('Pengujian Fungsi Matematika dengan Kasus Negatif', function() {

  // Kasus Negatif untuk fungsi `tambah`

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

  // Kasus Negatif untuk fungsi `kali`

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
