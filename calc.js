let history = '';

// This function clear all the values

function clearScreen() {
 document.getElementById("result").value = "";
 
 addToHistory(' ');
}

// This function display values
function display(value) {
 document.getElementById("result").value += value;
 addToHistory(value);
}
// This function evaluates the expression and return result
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
 
 addToHistory('=' + q + "\n");
}


function addToHistory(value) {
    history += value;
    document.getElementById('history').innerText = history;
      }
	  
function clearHistory(value) {
    history ="";
    document.getElementById('history').innerText = history;
      }
	
	