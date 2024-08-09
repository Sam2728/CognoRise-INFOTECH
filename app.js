(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear-btn');
    let equal = document.querySelector('.equal-btn');

    buttons.forEach(function(button){
        button.addEventListener('click', function(input){
            let value = input.target.dataset.number;
            screen.value += value;
        })
    });
    
    equal.addEventListener('click', function(e){
        try{
             let answer = eval(screen.value);
             screen.value = answer;
        }
        catch{
        screen.value = "Error";
        }
    })
    

    clear.addEventListener('click', function(input){
        screen.value="";
    });

})();