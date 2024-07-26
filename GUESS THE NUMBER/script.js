var x=Math.floor(Math.random()*20);
var attempt=20;
function random()
{
    var num=document.getElementById("num").value;
    
    
    
    if(num==x)
    {
        alert("You win")
        document.getElementById("ans").innerHTML="Congrats You Win!!!"; 
        attempt--;
        document.getElementById("at1").innerHTML=attempt;
        document.getElementById("score").innerHTML=attempt;
        document.body.style.backgroundColor="#90ee90";
        
    }
    else if(num>x)
    {
        document.getElementById("ans").innerHTML="Too High...";
        attempt--;
        document.getElementById("at1").innerHTML=attempt;
        
    }
    else
    {
        document.getElementById("ans").innerHTML="Too Short...";
        attempt--;
        document.getElementById("at1").innerHTML=attempt;
        
    }
    
}
function reload()
{
    location.reload();
}