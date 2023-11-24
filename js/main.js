

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

function bolinuvchilar() {
  function bolish(x, y) {
    if (x % y === 0) {
      return true
    } else {
      return false
    }
  }

  const x = prompt(`41.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya True qaytaradi aks holda False qaytaradi.

  1 - argumentni kiriting:`)
  const y = prompt(`2 - argumentni kiriting:`)
  let natija = bolish();
  if (natija) {
    document.getElementById("demo").innerHTML = `Rost, ${x} soni ${y} ga bo'linadi!`;
  } else {
    document.getElementById("demo").innerHTML = `Yolg'on, ${x} soni ${y} ga bo'linmaydi!`;
  }
}

function raqamgaOzgartir() {
  function raqamYasa(inputString) {
    if (isFinite(inputString)) {
      return Number(inputString);
    } else {
      return 'Kiritilgan qiymat raqam emas';
    }
  }

  let userInput = prompt(`42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.

  Iltimos, raqam kiriting:`);
  let result = raqamYasa(userInput);

  document.getElementById("demo").innerHTML = result;
}

function tortburchakYuzi() {
  function hisoblaTortburchakYuzi(tomon1, tomon2) {
    if (isNaN(tomon1) || isNaN(tomon2) || tomon1 <= 0 || tomon2 <= 0) {
      return -1;
    }
    var yuz = tomon1 * tomon2;
    return yuz;
  }

  var tomon1 = parseFloat(prompt(`43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri to'rtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

  To’rtburchak tomonini kiriting:`));
  var tomon2 = parseFloat(prompt('To’rtburchak ikkinchi tomonini kiriting:'));
  var yuzi = hisoblaTortburchakYuzi(tomon1, tomon2);

  if (yuzi === -1) {
    document.getElementById("demo").innerHTML = 'Xatolik! Tomonlar to’g’ri son emas yoki manfiy son!';
  } else {
    document.getElementById("demo").innerHTML = `To’rtburchakning yuzi: ${yuzi} sm²`;
  }
}


function nameSurname() {
  function formatNameAndSurname(firstName, lastName) {
    return `${firstName}, ${lastName}`;
  }

  var ism = prompt(`44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.

  Iltimos, ismingizni kiriting:`);
  var familiya = prompt('Iltimos, familiyangizni kiriting:');
  var formattedName = formatNameAndSurname(ism, familiya);

  document.getElementById("demo").innerHTML = formattedName;
}


function negativSonniHisobla() {
  function negativiniHisobla() {
    var son = parseFloat(prompt('Istalgan sonni kiriting:'));

    if (isNaN(son)) {
      document.getElementById("demo").innerHTML = 'Xatolik! Iltimos, son kiriting.';
      return;
    }
  }
  var runner = negativiniHisobla();
  var negativSon = -runner;
  document.getElementById("demo").innerHTML = negativSon;
}



function kinogaKirmoqchimi() {
  var bolaYoshi = parseInt(prompt(`50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false.

  Bolangizni yoshini kiriting:`));
  var otaOnasiBilanBirga = confirm('Ota-onasi bilan birgami?');

  var natija = (bolaYoshi >= 15) && otaOnasiBilanBirga;

  if (natija) {
    document.getElementById("demo").innerHTML = `Kinoga kirishi mumkin.`;
  } else {
    document.getElementById("demo").innerHTML = `Kinoga kirishi taqiqlanadi!`;
  }
}

// ========== start 51 ===========
// == 51 ==
function birgaOshir() {
  alert(`51. Bizda [3, 4, 5, 6] massivlar bor, funksiya ishga tushganida, massivlarning har biri 1 ga oshiriladi. Natija ekranga chiqadi.`)
  function oshir1ga(arr) {
    arr = [3, 4, 5, 6];
    let natija = arr.map(element => element + 1);

    return natija;
  }
  let result = oshir1ga();

  document.getElementById("demo").innerHTML = result;
}

// == 52 ==
function qoshtirnoq() {
  function hosilQil() {
    var ism = prompt(`52.Template string yordamida ya’ni backticlar orqali “ ushbu
    formatdagi stringni hosil qiling.

    Natija: “Donyor Olimov” ko’rinishida bo’lsin.

    *funksiya ism va familiya qabul qiladi, ularni birlashtirib qo'shtirnoqqa o'rab beradi.

    Ismingizni kiriting:`);
    var familiya = prompt("Familiyangizni kiriting:");

    var natija = `"${ism} ${familiya}"`;
    return natija;
  }

  var result = hosilQil();
  document.getElementById("demo").innerHTML = result;
}

// == 53 ==
function holatniAniqlash() {
  var son = prompt(`53.Quyidagi namunani ternary operator ko’rinishida yozing. Ternary operatorga misol: 2===2 ? 'teng' : 'tengemas'

  *funsiya son qabul qiladi. Agar son '0'dan katta bo'lsa "yaxshi", aks holda "yaxshi emas" qaytaradi.  Albatta buni aniqlash uchun ternary operator dan foydalanadi!

  Iltimos, son kiriting:`);
  var holat = son > 0 ? "yaxshi" : "yaxshi emas";
  document.getElementById("demo").innerHTML = `Holat: ${holat}`;
}

// == 54 ==
function uzunlikJuftmi() {
  var str = prompt(`54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
  juft bo’lsa funksiya true qaytarsin, aks holda false.

  Iltimos, bir matn kiriting:`);
  var juftUzunlik = str.length % 2 === 0;


  var demoElement = document.getElementById("demo");
  demoElement.innerHTML = juftUzunlik ? `ROST, matn uzunligi juft.` : `YOLG'ON, matn uzunligi juft emas.`;
}

// == 55 ==
function darajaKotar() {
  var son1 = prompt(`55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin.

  Iltimos, birinchi sonni kiriting:`);
  var son2 = prompt("Iltimos, ikkinchi sonni kiriting:");

  var natija = Math.pow(Number(son1), Number(son2));

  var demoElement = document.getElementById("demo");
  demoElement.innerHTML = "Natija: " + natija;
}

// == 56 ==
function songgiElementChiqarish() {
  var massiv = prompt(`56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
  so’nggi elementini qaytarib bersin.

  *massivni vergul(,) bilan kiriting.

  Iltimos, massivni kiriting:`);

  var tartiblanganMassiv = massiv.split(',').map(function (item) {
    return parseFloat(item);
  });

  var songgiElement = tartiblanganMassiv[tartiblanganMassiv.length - 1];

  var demoElement = document.getElementById("demo");
  demoElement.innerHTML = "So'nggi element: " + songgiElement;
}

// == 57 ==
function kabisaYili() {
  function kabisaYiliAniqla(yil) {
    var bolinishi4ga = yil % 4 === 0;

    var bolinishi100ga = yil % 100 === 0;

    var bolinishi400ga = yil % 400 === 0;

    var kabisaYili = (bolinishi4ga && !bolinishi100ga) || bolinishi400ga;

    return kabisaYili;
  }

  var testYil = prompt(`57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda 400ga ham bo’linganidagina kabisa hisoblanadi.

  Iltimos, tekshirish uchun yilni kiriting:`);
  var natija = kabisaYiliAniqla(parseInt(testYil));

  if (natija) {
    document.getElementById("demo").innerHTML = testYil + " - yil Kabisa yili!";
  } else {
    document.getElementById("demo").innerHTML = testYil + " - yil Kabisa yili emas!";
  }
}

// == 58 ==
function birinchiHarfisiz() {
  function birinchiHarf(soz) {
    if (soz && typeof soz === 'string') {
      var birinchiHarf = soz.charAt(0);

      var qolganSoz = soz.slice(1);

      return qolganSoz;
    } else {
      return "Noto'g'ri formatda ma'lumot kiritildi.";
    }
  }

  var kiritilganSoz = prompt(`58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi harfisiz qaytarib bersin.

  Iltimos, biror so'zni kiriting:`);

  document.getElementById("demo").innerHTML = birinchiHarf(kiritilganSoz);
}

// == 59 ==
function teskariQiymat() {
  var qiymat = prompt(`59.Boolen qiymatini teskarisini qaytarib beradigan funksiya yasang.

  Iltimos, boolean qiymatni kiriting (true yoki false):`);

  var teskari = (qiymat === 'true') ? false : (qiymat === 'false') ? true : "Noto'g'ri formatda qiymat kiritildi.";

  document.getElementById("demo").innerHTML = teskari;
}

// == 60 ==
function juftToqTekshir() {
  var son = prompt("Iltimos, sonni kiriting:");

  var natija = (son % 2 === 0) ? "juft" : "toq";

  document.getElementById("demo").innerHTML = "Natija: " + natija;
}


// **********************
// == 81 ==
function nechtaBogin() {
  function boginSanash(word) {
    var boginSanash = 0;

    for (var i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
        if (i < word.length - 1 && isConsonant(word[i + 1])) {
          boginSanash++;
        }
      }
    }
    if (isVowel(word[word.length - 1])) {
      boginSanash++;
    }
    return boginSanash;
  }
  function isVowel(char) {
    return /[aeiouAEIOU]/.test(char);
  }
  function isConsonant(char) {
    return /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(char);
  }
  var kiritilganSoz = prompt(`81.Funksiyaga so’z berilsa, ushbu funksiya ushbu so’zda nechta bo’g’in borligini aytsin.

  Istalgan so'zni kiriting:`);
  var boginSoni = boginSanash(kiritilganSoz);

  document.getElementById("demo").innerHTML = `So'zda ${boginSoni} ta bo'g'in mavjud.`;
}





// == 106 ==
function raqamSoni() {
  function raqamSoniTop(son) {
    var sonStr = son.toString();
    var raqamSoni = sonStr.length;
    return raqamSoni;
  }

  var kiritilganSon = prompt(`106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
  raqam borligini qaytarsin.

  Istalgan sonni kiriting:`);
  var raqamSoni = raqamSoniTop(kiritilganSon);

  if (isNaN(kiritilganSon)) {
    document.getElementById("demo").innerHTML = "Son kiriting!";
  } else {
    var raqamSoni = raqamSoniTop(parseInt(kiritilganSon));
    document.getElementById("demo").innerHTML = `Kiritilgan son ${raqamSoni} ta raqamdan iborat.`;
  }
}




// == 107 ==
function engKattaSonYasa() {
  function engKattaSon(son) {
    var sonStr = son.toString();
    var sonArray = sonStr.split('');
    sonArray.sort(function(a, b) {
      return b - a;
    });

    var yangiSon = parseInt(sonArray.join(''));

    return yangiSon;
  }

  var kiritilganSon = prompt(`107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin bo’lgan sonni qaytarsin.

  Istalgan sonni kiriting:`);

  if (isNaN(kiritilganSon)) {
    document.getElementById("demo").innerHTML = "Raqam kiriting!";
  } else {
    var engKatta = engKattaSon(parseInt(kiritilganSon));
    document.getElementById("demo").innerHTML = "Eng katta hosil bo'lgan son: " + engKatta;
  }
}










// == 108 ==
function randomSon() {
  var qiymat1 = parseInt(prompt(`108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu oraliqdan bironta random son qaytarsin.

  Birinchi sonni kiriting:`));
  var qiymat2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

  if (isNaN(qiymat1) || isNaN(qiymat2)) {
    document.getElementById("demo").innerHTML = "Noto'g'ri kiritish!";
    return;
  }

  var son = Math.floor(Math.random() * (qiymat2 - qiymat1 + 1)) + qiymat1;
  document.getElementById("demo").innerHTML = `${qiymat1} va ${qiymat2} orasidagi tasodifiy son: ${son}`;
}


// == 109 ==
function narissistikSon() {
  let son = prompt(`109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son degani sonning har bir raqamini sonning uzunligi miqdorida darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

  Istalgan sonni kiriting:`);

  let raqamlar = son.split("").map(Number);
  let daraja = son.length;
  let summa = raqamlar.reduce((total, num) => total + Math.pow(num, daraja), 0);
  let natija = summa === parseInt(son);

  if (natija) {
    document.getElementById("demo").innerHTML = `Ha, bu narissistik son.`;
  } else {
    document.getElementById("demo").innerHTML = `Yo'q, bu narissistik son emas.`;
  }
}


// == 110 ==
function kattaHarfSoni() {
  var satr = prompt(`110.Funksiya string qabul qiladi.Funksiya ushbu stringda nechta katta harf ishtirok etganin qaytarsin.

  Iltimos, satrni kiriting:`);

  var kattaHarfSanasi = 0;

  for (var i = 0; i < satr.length; i++) {
    if (satr[i] >= 'A' && satr[i] <= 'Z') {
      kattaHarfSanasi++;
    }
  }

  document.getElementById("demo").innerHTML = `Stringda ${kattaHarfSanasi} ta katta harf bor.`;
}












// == 76 ==
function qaytarString(str, miqdor) {
  if (typeof str !== 'string' || miqdor <= 0) {
    return "Not A String !!";
  }


  let natija = "";
  for (let i = 0; i < miqdor; i++) {
    natija += str;
  }

  return natija;
}

// Test qilish uchun:
console.log(qaytarString("Mubashir", 2)); // "MubashirMubashir"
console.log(qaytarString("Matt", 3));      // "MattMattMatt"
console.log(qaytarString(1990, 7));         // "Not A String !!"






// == 77 ==
function koplik() {
  const soz = prompt(`77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
  funksiya true qaytarsin, aks holda false.

  Iltimos, so'z kiriting:`);

  const natija = soz.toLowerCase().endsWith("lar");

  document.getElementById("demo").innerHTML = natija;
}

// == 78 ==
function boshOxiri() {
  let str = prompt(`78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
  bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.

  Istalgan so'zni kiriting:`);

  if (!str || str.length < 2) {
    document.getElementById("demo").innerHTML = "Kamida ikkita harfli so'z kiritilishi kerak!";
    return;
  }

  let boshHarf = str[0];
  let oxirgiHarf = str[str.length - 1];

  let natija = boshHarf + oxirgiHarf;
  document.getElementById("demo").innerHTML = natija;
}

// == 79 ==
function sozAytish() {
  let word = prompt(`79.Jon so’zni qiynalib talaffuz qiladi. Masalan quyosh so’zini qu… qu… quyosh deb, daraxt so’zini da… da… daraxt deb, ya’ni boshida 2 marta so’zini 2ta harfini aytadi keyin hammasini. Agar funksiya string kiritilsa xuddi shunday formatda string qaytarsin.

  !! so'z eng kamida 2 bo'gindan iborat bo'lishi shart.

  So'zni kiriting:`);
  if (word && word.length >= 4) {
    let prefix = word.substring(0, 2);
    let natija = `${prefix}... ${prefix}... ${word}`;

    document.getElementById("demo").innerHTML = natija;
  }
}

// == 80 ==
function ahvol() {
  let holat = prompt(`80. Ushbu funksiya 'happy' yoki 'sad' qiymatini qabul qiladi. Agar qiymat berilmasa u 'neutral'ga teng bo'ladi.`);
  return `Today, I am feeling ${holat || 'neutral'}`;
}

function ahvolniAniqla() {
  let natija = ahvol();
  document.getElementById("demo").innerHTML = natija;
}