function yigindi() {
  let a = +prompt("Ushbu funksiya sonlar yig`indisini hisoblaydi, 1 - sonni kiriting:");
  let b = +prompt("2 - sonni kiriting:");
    document.getElementById("demo").innerHTML = a + b;
}

function minut() {
  let minut = +prompt("Ushbu funksiya minutlarni butun son sifatida qabul qilib, uni sekundlarga o`girib beradi, sonni kiriting:");
    document.getElementById("demo").innerHTML = minut * 60 +' sekund';
}

















function myFunction() {
  let result = prompt("Please enter your name", "Harry Potter");
    document.getElementById("demo").innerHTML =
    "Hello " + result;
}