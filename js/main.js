

function yigindi() {
  let a = +prompt("Ushbu funksiya sonlar yig`indisini hisoblaydi, 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:");
  document.getElementById("demo").innerHTML = a + b;
}

function minut() {
  let minut = +prompt("Ushbu funksiya minutlarni butun son sifatida qabul qilib, uni sekundlarga o`girib beradi, sonni kiriting:");
  document.getElementById("demo").innerHTML = minut * 60 +' sekund';
}

function nextInteger() {
  let son = +prompt("Ushbu funksiya butun sonni qabul qiladi va undan keyingi sonni aniqlaydi.");
  document.getElementById("demo").innerHTML = son + 1;
}

function uchburchak() {
  let asos = +prompt("Ushbu funksiya uchburchakning asosi va balandligini qabul qiladi va uchburchakning yuzini hisoblaydi. Uchburchakning asosini kiriting:");
  let baladlik = +prompt("Uchburchakning balandligini kiriting:");
  document.getElementById("demo").innerHTML = (asos * baladlik) / 2 +' sm²';
}

function yearsOld() {
  let old = +prompt("Ushbu funksiya yoshni yil ko’rinishida qabul qiladi va yoshni kunlarda hisoblab beradi. Yoshingizni kiriting:");
  document.getElementById("demo").innerHTML = old * 365 + ' kun';
}

function daraja() {
  let number = +prompt("Ushbu funksiya har qanday sonning 3 - darajasini hisoblab beradi. Sonni kiriting:");
  document.getElementById("demo").innerHTML = number ** 3;
}

function fault(){
  alert('Bu mavzu hali o`tilmagan!');
}

function kopaytma() {
  let a = +prompt("Ushbu funksiya sonlar ko`paytmasini hisoblaydi, 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:");
  document.getElementById("demo").innerHTML = a * b;
}

function soatSekund() {
  let soat = +prompt("Ushbu funksiya soatlarni butun son sifatida qabul qilib, uni sekundlarga o`girib beradi, sonni kiriting:");
  document.getElementById("demo").innerHTML = soat * 60 * 60 +' sekund';
}

function uchburchakTomoni() {
  let tomon1 = +prompt("Ushbu funksiya uchburchakning eng uzun tomonini hisoblaydi, A tomonini kiriting:");
  let tomon2 = +prompt("B tomonini kiriting:");
  document.getElementById("demo").innerHTML = ((tomon1 + tomon2) - 1) + ' ga teng';
}

function qoldiq() {
  let son1 = +prompt("Ushbu funksiya ikkita son qabul qiladi va ularning bo`linmasidan qolgan qoldiqni chiqarib beradi, 1 - sonni kiriting:");
  let son2 = +prompt("2 - sonni kiriting:");
  document.getElementById("demo").innerHTML = son1 % son2 + ' ga teng';
}


function tortburchak() {
  let eni = +prompt(`Ushbu funksiya to'rtburchakning eni va bo'yini qabul qiladi va to'rtburchakning yuzini hisoblaydi. To'rtburchakning enini kiriting:`);
  let boyi = +prompt("To'rtburchakning bo'yini kiriting:");
  document.getElementById("demo").innerHTML = (eni * boyi) +' sm²';
}



function string() {
  let string= prompt("Ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a” stringini birlashtirib qaytaradi");
  document.getElementById("demo").innerHTML = 'Something' + ' ' + string;
}

function kvadrat() {
  let raqam = +prompt("Ushbu funksiya sonlarning kvadratini hisoblaydi:");
  document.getElementById("demo").innerHTML = raqam * raqam;
}

function taqqoslash() {
  let raqam = +prompt("Ushbu funksiya raqam qabul qiladi, agar raqam 0 dan kichik yoki teng bo'lsa ROST, aks holda YOLG`ON qaytaradi:");
  if (raqam <= 0) {
    document.getElementById("demo").innerHTML = 'ROST';
  }
  else {
    document.getElementById("demo").innerHTML = `YOLG'ON`;
  }
}

// ========================
function matematikAmallar() {
  function amalniBajar(matematikAmallar) {
    try {
      const natija = eval(matematikAmallar);

      return natija;
    } catch (error) {
      return "Xato";
    }
  }
  const matematikAmallar = prompt(`31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin

  Matematik amallarni kiriting:`);
  const natija = amalniBajar(matematikAmallar);

  document.getElementById("demo").innerHTML = `Natija: ${natija}`;
}



function ikkiSondanBiri() {
  function ikkiSon() {
    const son1 = parseInt(prompt(`32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on

    Birinchi butun sonni kiriting:`));
    const son2 = parseInt(prompt("Ikkinchi butun sonni kiriting:"));

    const yigindi = son1 + son2;

    if (son1 === 10 || son2 === 10 || yigindi === 10) {
      return "Rost qiymat";
    } else {
      return "Yolg'on";
    }
  }
  const natija = ikkiSon();
  document.getElementById("demo").innerHTML = natija;
}

function kerakliBenzin() {
  const masofa = +prompt(`Mashina kilometriga 10litr benzin ichadi. Mashina doim yo'lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.

  Yo'l uzunligini km-da kiriting:`);
  const sarflanganBenzin = masofa / 0.1;
  const minimalBenzin = 100;
  const toplamBenzin = Math.max(sarflanganBenzin, minimalBenzin);
  const natija = toplamBenzin;

  document.getElementById("demo").innerHTML = `Kerakli benzin: ${natija} litr`
}

function kattaSonniTop() {
  let son1 = +prompt(`Ushbu funksiya 2 ta son qabul qiladi va shu sonlardan kattasini qaytaradi.


  Birinchi sonni kiriting:`);
  let son2 = +prompt("Ikkinchi sonni kiriting:");
  const kattaSon = Math.max(son1, son2);
  const natija = kattaSon;
  document.getElementById("demo").innerHTML = `Kattasi: ` + natija;
  if (son1==son2) {
    document.getElementById("demo").innerHTML = `Ikkisi teng!`;
  }
}


function stringTengmi() {
  function tengmi(yozuv1, yozuv2) {
    if (yozuv1.length === yozuv2.length) {
      return true;
    } else {
      return false;
    }
  }

  const malumot1 = prompt(`36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-biriga teng bo’lsa funksiya Rost qiymat qaytarsin, aks hold Yolg’on.

  Birinchi yozuvni kiriting:`);
  const malumot2 = prompt("Ikkinchi yozuvni kiriting:");

  const natija = tengmi(malumot1, malumot2);

  if (natija) {
    document.getElementById("demo").innerHTML = `Rost, belgilar soni bir-biriga teng!`;
  } else {
    document.getElementById("demo").innerHTML = `Yolg'on, belgilar soni bir-biriga teng emas!`;
  }
}

function stringBoshmi() {
  function boshmi(yozuv) {
    if (yozuv.trim() === "") {
      return true;
    } else {
      return false;
    }
  }
  const malumot = prompt(`37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.*

  *qo'shimcha:

  Istalgan yozuvni kiriting:`);
  const natija = boshmi(malumot);

  if (natija) {
    document.getElementById("demo").innerHTML = `Rost, yozuv bo'sh!`;
  } else {
    document.getElementById("demo").innerHTML = `Yolg'on, yozuv bo'sh emas!`;
  }
}


function bolinuvchi() {
  function bolinuvchiBolinish(matematikAmallar) {
    try {
      const son = parseInt(matematikAmallar);

      if (son % 5 !== 0) {
        return false;
      }


      return true;
    } catch (error) {
      return false;
    }
  }

  const butunSon = prompt(`38.Shunday funksiya yasang.Unda butun son argument sifatida beriladi. Agar ushbu butun son 5 ga bo’linsa, funksiya true qaytarsin, aks holda false qaytarsin!

  Butun son kiriting:`);
  const natija = bolinuvchiBolinish(butunSon);

  if (natija) {
    document.getElementById("demo").innerHTML = `Rost, ushbu son 5 ga bo'linadi!`;
  } else {
    document.getElementById("demo").innerHTML = `Yolg'on, ushbu son 5 ga bo'linmaydi!`;
  }
}



function bolinuvchi100() {
  function bolinuvchiBolinish(matematikAmallar) {
    try {
      const son = parseInt(matematikAmallar);

      if (son % 100 !== 0) {
        return false;
      }


      return true;
    } catch (error) {
      return false;
    }
  }

  const butunSon = prompt(`39.Shunday funksiya yasang.Unda butun son argument sifatida beriladi. Agar ushbu butun son 100 ga bo’linsa, funksiya true qaytarsin, aks holda false qaytarsin!

  Butun son kiriting:`);
  const natija = bolinuvchiBolinish(butunSon);

  if (natija) {
    document.getElementById("demo").innerHTML = `Rost, ushbu son 100 ga bo'linadi!`;
  } else {
    document.getElementById("demo").innerHTML = `Yolg'on, ushbu son 100 ga bo'linmaydi!`;
  }
}


function stringBelgiSoni() {
  function belgiSoniTopish(str) {
    if (str === "") {
      return 0;
    }

    const boshBelgi = str[0];
    const qolganBelgiSoni = belgiSoniTopish(str.slice(1));
    const boshBelgiSoni = isNaN(parseInt(boshBelgi)) ? 1 : 0;
    return boshBelgiSoni + qolganBelgiSoni;
  }

  const matn = prompt(`40. Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

  String kiriting:`);
  const belgiSoni = belgiSoniTopish(matn);

  document.getElementById("demo").innerHTML = `Stringda belgi soni: ${belgiSoni} ta`;
}
