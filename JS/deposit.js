// step1: add deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // get the value of the input
    const depositSecText=document.getElementById('deposited-amount')
    const newDepositText=depositSecText.value
    // step3: get the current total deposit
    const  depositTotal =document.getElementById('total-deposit')
    const preDepositTotal=depositTotal.innerText
    //step-4 calculate the total deposit
    const currentDepositTotal=parseFloat(preDepositTotal)+parseFloat(newDepositText);
    depositTotal.innerText=currentDepositTotal;
    //step-5 calculate the total Balance
    const balance=document.getElementById('total-balance')
    const BalanceText=parseFloat(document.getElementById('total-balance').innerText)
    const currentBalanceTotal=BalanceText+parseFloat(newDepositText);
    balance.innerText=currentBalanceTotal;

    // step-6  clear the deposit section
    depositSecText.value='';

})