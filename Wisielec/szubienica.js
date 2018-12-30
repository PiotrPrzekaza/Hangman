let password = "Bez pracy nie ma kołaczy";
password = password.toLocaleUpperCase();

let widthPassword = password.length;

let manyMiss = 0;
const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

let password2 = "";

for (i = 0; i < widthPassword; i++) {
    if (password.charAt(i) == " ") password2 = password2 + " ";
    else password2 = password2 + "-";
}

function writePassword() {
    document.getElementById("board").innerHTML = password2;
}


window.onload = start;

let letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";


function start() {
    let divsCharacters = "";

    for (i = 0; i <= 34; i++) {
        let elements = "lett" + i;
        divsCharacters = divsCharacters + '<div class="letter" onclick ="check(' + i + ')" id="' + elements + '">' + letters[i] + '</div>'
        if ((i + 1) % 7 == 0) divsCharacters = divsCharacters + '<div style= "clear: both;"></div>'
    }

    document.getElementById("letters").innerHTML = divsCharacters;

    writePassword();
}

String.prototype.setSign = function(place, sign) {
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + sign + this.substr(place + 1);
}

function check(nr) {
    let hit = false;

    for (i = 0; i < widthPassword; i++) {
        if (password.charAt(i) == letters[nr]) {
            password2 = password2.setSign(i, letters[nr]);
            hit = true;
        }
    }
    if (hit == true) {
        yes.play();
        let elements = "lett" + nr;
        document.getElementById(elements).style.background = "#003300";
        document.getElementById(elements).style.color = "#00c000";
        document.getElementById(elements).style.border = "3px solid #00c300";
        document.getElementById(elements).style.cursor = "default";

        writePassword();
    } else {
        no.play();
        let elements = "lett" + nr;
        document.getElementById(elements).style.background = "#330000";
        document.getElementById(elements).style.color = "#c00000";
        document.getElementById(elements).style.border = "3px solid #c00000";
        document.getElementById(elements).style.cursor = "default";
        document.getElementById(elements).setAttribute("onclick", ";");
        manyMiss++;
        let picture = "img/s" + manyMiss + ".jpg";
        document.getElementById("hangman").innerHTML = '<img src="' + picture + '" alt=""/>';
    }
    if (password == password2)
        document.getElementById("letters").innerHTML = "Tak jest! Podano prawidłowe hasło: " + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    if (manyMiss >= 9)
        document.getElementById("letters").innerHTML = "Przegrana! Prawidłowe hasło to: " + password + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

}