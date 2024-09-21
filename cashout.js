document.getElementById('btn-cashout-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const pinNum = getInputFieldValueById('pin-number-out');
        const cashoutMoney = getInputFieldValueById('cashout-amount');
        
        const curentBalance = curentBalances('current-balance');
        console.log('add money value', cashoutMoney, pinNum, curentBalance);

        // validation check
        if(isNaN(cashoutMoney )){
            alert("input correct amount");
            return;
        }

        // && 
        if(pinNum===1 && curentBalance>= cashoutMoney){
            const newBalance = curentBalance -cashoutMoney;
            document.getElementById("current-balance").innerText = newBalance;

            // transaction history
            const p= document.createElement('p');
            p.classList.add('bg-red-600');
            p.innerText =`cashout Money: ${cashoutMoney}, New balance: ${newBalance}  `;
            document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert("Try again leter please");
        }

})