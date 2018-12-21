document.write("■■■問1■■■");
document.write("<br>");
for(var a=1; a<=5; a++){
    document.write("★");
}
document.write("<br>");

document.write("■■■問2■■■");
for(var b=1; b<=2; b++){
    document.write("<br>");
    for(var c=1; c<=3; c++){
        document.write("★");
    }
}
document.write("<br>");

document.write("■■■問3■■■");
for(var d=1; d<=2; d++){
    document.write("<br>");
    for(var e=1; e<=5; e++){
        document.write("☆");
    }
}
document.write("<br>");

document.write("■■■問4■■■")
for(var f=1; f<=4; f++){
    document.write("<br>");
    for(var g=1; g<=5; g++){
        document.write("★");
    }      
}
document.write("<br>");

document.write("■■■問5■■■");
for(var h=1; h<=4; h++){
    document.write("<br>");
    for(var i=1; i<=3; i++){
        document.write("★");
    } 
}
document.write("<br>");

document.write("■■■問6■■■");
for(var j=1; j<=3; j++){
    document.write("<br>");
    for(var k=1; k<=3; k++){
        if(k%2==0){
            document.write("☆");//割り切れないとき☆
        }else{
            document.write("★");
        }
    }
}
document.write("<br>");

document.write("■■■問7■■■")
for(var l=1; l<=4; l++){
    document.write("<br>");
    for(var m=1; m<=5; m++){
        if(m%2==0){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
}
document.write("<br>");

document.write("■■■問8■■■");
for(var n=1; n<=5; n++){
    document.write("<br>");
    switch(n){
        case 1:
            document.write("★");
            break;
        case 2:
            document.write("★★");
            break;
        case 3:
            document.write("★★★");
            break;
        case 4:
            document.write("★★★★");
            break;
        case 5:
            document.write("★★★★★");
            break;
    }
}
document.write("<br>");

document.write("■■■問8 ver.2■■■");
for(var o=1; o<=5; o++){
    document.write("<br>");
    for(var p=1; p<=o; p++){
        document.write("★");
    }
}
document.write("<br>");