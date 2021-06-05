window.load = slide(1);

var bgNumber = 1;

function slide(n){
    let allBgs = 5;
    document.getElementById('img-back').style.backgroundImage = "url('images/"+n+".jpg')";
    botoes(n, allBgs);
    bgNumber = n;
}
function btanterior(){
    if(bgNumber > 1){
        bgNumber--;
        slide(bgNumber);
    }
}
function btposterior(){
    if(bgNumber < 5){
        bgNumber++;
        slide(bgNumber);
    }
}
function botoes(n, m){
    document.getElementById('botoes').innerHTML = "";
    for(a = 1; a <= m; a++){
        if(a == n){
            document.getElementById('botoes').innerHTML += "<li class='selected' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")'></li>";
        }
    }
}