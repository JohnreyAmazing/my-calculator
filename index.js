const input_box = document.getElementById("inputbox");
const cont = document.getElementById("container");
const buttons = document.getElementById("btn");


function appendkeys(input){
    if(input_box.value == "Error kingina mo")(
        buttons.disabled = true
    )
    else{
        input_box.value += input;
    }
}

function calculate(){
    try {
        input_box.value = eval(input_box.value)
        if(input_box.value === "666"){
            cont.classList.toggle("hidden")
        }
    } catch (error) {
        input_box.value = "Syntax Error";
    }
}

function clears(){
    input_box.value = "";
}
