var firstscore = document.querySelector('#firstscore');
var total_to_score = document.querySelector('#total_to_score');
var myresult = document.querySelector('#myresult');
var Grade = document.querySelector('#Grade');
var myform = document.querySelector('#myform');
myform.addEventListener('submit',function(event){
    event.preventDefault();
    if(!firstscore.value || !total_to_score.value){
        alert("Enter scores to be calculated");
    }
    else{
        var x = parseInt(firstscore.value);
        var y = parseInt(total_to_score.value);
        var result = x / y;
        var newresult = result * 100;
        //console.log(newresult);
        myresult.value ="Answer is " + newresult + "%";
        if(newresult >= 80 && newresult <= 100){
            Grade.value = "A Plain";
        }
        else if(newresult >= 65 && newresult <=79 ){
            Grade.value = "B Plain";
        }
        else if(newresult >= 50 && newresult <= 64){
            Grade.value = "C Plain";
        }
        else{
            Grade.value = "D Plain";
        }
        
    }
});

