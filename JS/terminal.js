function toggle_terminal(){
    var terminalBox = document.getElementById("terminal_box");
    var terminalText = document.getElementById("type_text");
    terminalBox.classList.toggle("toggle_window");
    terminalText.classList.toggle("active");
    terminalFade();
    console.log("Terminal toggled");
}

function maximizeWindow(){
    var terminalBox = document.getElementById("terminal");
    terminalBox.classList.toggle("maximize_Window");
    console.log("window maximized");
}

function terminalFade(){
    var terminalFade = document.getElementById("terminal_fade");
    terminalFade.classList.toggle("active");
}
