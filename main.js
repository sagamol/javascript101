// alert("Hello world");

let nachricht = "Hallo Welt";
// alert(nachricht);
nachricht = "neuer Text";
// alert(nachricht);
console.log(nachricht);
const linkColor = "#ff0000";
let eine_variable = "test";
console.log("Variable: eine_variable: ", eine_variable);
let highScore = 75.9944;
console.log("Highscore ist: ", highScore / 20);
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = "test2";
console.log(meineNachricht);
meineNachricht = `Ein mehr
und ein
ganz langer
text
und aus`;

console.log(meineNachricht);

let fullName =`Jeffrey "The Dude" Lebowsky`;
console.log(fullName);

let isOver18 = true;
console.log("über 18?", isOver18);
let age = 17;
console.log("age über 18", age > 18);

let zahlenListe = [2, 11, 24, 33];
console.log(zahlenListe);
let namensListe = [ "Jane" , "John"];
console.log(namensListe[1]);
console.log("Anzahl der Namen: ", namensListe.lenght);

let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer Alter: ", benutzer.alter);
benutzer.bestzeit = 200;
console.log(benutzer);
benutzer["bestzeit ever"] = 100;
console.log(benutzer);

// Benutzer Eingabe
// let alter=prompt("Wie alt bist du?");
// console.log("Du bist", alter, "Jahre alt");
// console.log("Über 18?", alter > 18);
// if (alter > 18) {
//     console.log("Du darfst hinein...");
// } else {
//     console.log("noch nicht 18...");
// }
for (let i=0; i<10; i++) {
    console.log("Wert von i:", i);
}

function showAge(birthYear) {
    let age = 2018 - birthYear;
    console.log("Du bist ", age, "Jahre alt");
}

showAge(1964);
showAge(1988);

