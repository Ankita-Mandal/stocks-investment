function toggleImage() {
    $(".hiddenclickimg").toggle();
  };

var invest=document.getElementById("invest-button");
var sell=document.getElementById("sell-button");
invest.onclick= allowToSell()

function allowToSell(){
    setTimeout(function(){
        sell.removeAttribute("disabled");
    },10000)
}

var returnPerc = [1.4,1.1,0.8,1.3,0.7,0.6,1.1,1.2,0.9,1.3];


function calReturnAmount()
{
    iAmount=parseFloat(document.getElementById("i-amount").value);
    // s=document.getElementsByName("stock").value;
    capital=parseInt(document.getElementById("c-amount").innerHTML);    
    
    if(document.getElementById("stock1").checked)
    {
        var rP=1.4;
    }
    if(document.getElementById("stock2").checked)
    {
        var rP=1.1;
    }
    if(document.getElementById("stock3").checked)
    {
        var rP=0.8;
    }
    if(document.getElementById("stock4").checked)
    {
        var rP=1.3;
    }
    if(document.getElementById("stock5").checked)
    {
        var rP=0.7;
    }
    if(document.getElementById("stock6").checked)
    {
        var rP=0.6;
    }
    if(document.getElementById("stock7").checked)
    {
        var rP=1.1;
    }
    if(document.getElementById("stock8").checked)
    {
        var rP=1.2;
    }
    if(document.getElementById("stock9").checked)
    {
        var rP=0.9;
    }
    if(document.getElementById("stock10").checked)
    {
        var rP=1.3;
    }
    rAmount=iAmount*rP;
    document.getElementById("return").innerHTML = rAmount;
    document.getElementById("c-amount").innerHTML= capital+parseInt(rAmount);
}

function capitalAfterInvestment()
{
    capital=parseInt(document.getElementById("c-amount").innerHTML);
    iAmount=document.getElementById("i-amount").value;
    document.getElementById("c-amount").innerHTML= capital-parseInt(iAmount);
    
}



