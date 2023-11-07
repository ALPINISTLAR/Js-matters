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
    document.getElementById("demo").innerHTML = (asos * baladlik) / 2 +' sm^';
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





function string() {
  let string= prompt("Ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a” stringini birlashtirib qaytaradi");
    document.getElementById("demo").innerHTML = 'Something' + ' ' + string;
}

function kvadrat() {
  let raqam = +prompt("Ushbu funksiya soatlarning kvadratini hisoblaydi:");
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