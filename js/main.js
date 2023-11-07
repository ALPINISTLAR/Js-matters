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


function kopaytma() {
  let a = +prompt("Ushbu funksiya sonlar ko`paytmasini hisoblaydi, 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:");
    document.getElementById("demo").innerHTML = a * b;
}

function soatSekund() {
  let soat = +prompt("Ushbu funksiya soatlar butun son sifatida qabul qilib, uni sekundlarga o`girib beradi, sonni kiriting:");
    document.getElementById("demo").innerHTML = soat * 60 * 60 +' sekund';
}

function uchburchakTomoni() {
  let tomon1 = +prompt("Ushbu funksiya uchburchakning eng uzun tomonini hisoblaydi, A tomonini kiriting:");
  let tomon2 = +prompt("B tomonini kiriting:");
    document.getElementById("demo").innerHTML = ((tomon1 + tomon2) - 1) + ' ga teng';
}