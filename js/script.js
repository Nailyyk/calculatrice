function clearScreen(){
    document.getElementById("result").value=""
}

function display(valeur){
    console.log(valeur)
    document.getElementById("result").value += valeur;
}

    function calculate(){
        let a = document.getElementById("result").value;
        let b = eval(a);
        document.getElementById("result").value= b;
    }



    document.addEventListener("keydown", function(event) {
        switch(event.key){
            case "1" :document.getElementById("result").value+=event.key;
            break;
            case "2" :document.getElementById("result").value+=event.key;
            break;
            case "3" :document.getElementById("result").value+=event.key;
            break;
            case "4":document.getElementById("result").value+=event.key;
            break;
            case "5":document.getElementById("result").value+=event.key;
            break;
            case "6":document.getElementById("result").value+=event.key;
            break;
            case "7":document.getElementById("result").value+=event.key;
            break;
            case "8":document.getElementById("result").value+=event.key;
            break;
            case "9":document.getElementById("result").value+=event.key;
            break;
            case "0":document.getElementById("result").value+=event.key;
            break;
            case "+":document.getElementById("result").value+=event.key;
            break;
            case "-":document.getElementById("result").value+=event.key;
            break;
            case "*":document.getElementById("result").value+=event.key;
            break;
            case "/":document.getElementById("result").value+=event.key;
            break;
            case "Enter":calculate(); // le nom de votre fonction pour calculer
            break;
            case "Backspace":clearScreen()//le nom de votre function pour clear
            break;
        }
      })


      