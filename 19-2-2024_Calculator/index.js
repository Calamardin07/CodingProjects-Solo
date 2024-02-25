let screen = document.getElementById("screen_text")

function buttonPress(button) {
    if (screen.innerHTML == 'ERR'){screen.innerHTML = ""}
    if (screen.innerHTML.length < 11) {screen.innerHTML += button;}
}

function equalPressed(button){
    try{
        screen.innerHTML = eval(screen.innerHTML)
    } catch{
        screen.innerHTML = "ERR"
    }
    
}

function clrPressed(){
    screen.innerHTML = ""
}

function backPressed() {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
    
}