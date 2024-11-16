let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

  //taking a string to store the result 
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            // evaluating
             string = eval(string);
             // adding the string value in the input
             input.value = string; 
        }
        else if(e.target.innerHTML == 'AC'){
            // empty the string
             string = '';
             // showing the value of string in the input tag
             input.value = string;
        }
        else if(e.target.innerHTML == 'DEL' ){
            // removing the last element of string using substring function
            // if length is 4 then excluding last---ans='3'
             string = string.substring(0, string.length-1);
             input.value = string ;
        }
        else{

            string += e.target.innerHTML;
            input.value = string;
        }

    })
} )