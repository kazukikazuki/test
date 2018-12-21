// 問1

document.write("■■■問1■■■");
document.write("<br>");

function menseki(hankei){
    return "面識は【"+hankei*hankei*3.14+"cm2】です。";
}

document.write("半径5cmの円の");
document.write(menseki(5));
document.write("<br>");
document.write("半径7cmの円の");
document.write(menseki(7));
document.write("<br>");
document.write("半径10cmの円の");
document.write(menseki(10));
document.write("<br>");

// 問2

document.write("■■■問2■■■");
document.write("<br>");

function group(otona,kodomo){
    return "グループの合計金額は【"+(otona*500+kodomo*200)+"円】です。"
}

document.write("A"+group(2,4)+"<br>");
document.write("B"+group(1,5)+"<br>");
document.write("C"+group(3,7)+"<br>");