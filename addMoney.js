// console.log("add money working");
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const pinNum = getInputFieldValueById('pin-number');
        const addMoney = getInputFieldValueById('amount-add');
        
        const curentBalance = curentBalances('current-balance');
        console.log('add money value', addMoney, pinNum, curentBalance);

        // validation check
        if(isNaN(addMoney)){
            alert("input correct amount");
            return;
            // return kora hoise jate function ke thamano jay
        }

        if(pinNum===1){
            const newBalance = addMoney+ curentBalance;
            document.getElementById("current-balance").innerText = newBalance;

            // add transaction history
            const p= document.createElement('p');
            p.classList.add('bg-green-500');
            p.innerText =`Added Money: ${addMoney}, New balance: ${newBalance}  `;
            document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert("Try again leter please");
        }

})
