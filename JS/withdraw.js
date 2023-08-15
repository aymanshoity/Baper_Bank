// step1: get the button first
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-1 get the balance section id
    const balance=document.getElementById('total-balance')
    const BalanceText=parseFloat(document.getElementById('total-balance').innerText);

      // step-2 get the input value
    const withdrawSecText=document.getElementById('Withdraw-amount');
    const innerWithdrawSecText=parseFloat(withdrawSecText.value);
    console.log(innerWithdrawSecText)
    withdrawSecText.value='';
    if(isNaN(innerWithdrawSecText)){
        alert("please provide a num");
        return;
    }
    if(BalanceText<innerWithdrawSecText){
        alert('taka nai r')
        return;
    }
    
     // step-3 get the previous withdraw  
    const withdrawSec=document.getElementById('total-withdraw')
    const innerWithdrawSec=parseFloat(withdrawSec.innerText)
    console.log(innerWithdrawSec)
       
    // step-4 update the withdraw value
    const newWithdrawValue=innerWithdrawSec+innerWithdrawSecText;
    console.log(newWithdrawValue)
    withdrawSec.innerText=newWithdrawValue;
    // calculate updated balance
    const currentBalanceTotal=BalanceText-innerWithdrawSecText;
    balance.innerText=currentBalanceTotal;

    // step-6 clear the withdraw section
    withdrawSecText.value='';

   


})