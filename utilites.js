function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function curentBalances(id){
    const curentBalance = document.getElementById(id).innerText;
    const curentBalanceNumber = parseFloat(curentBalance);
    return curentBalanceNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}