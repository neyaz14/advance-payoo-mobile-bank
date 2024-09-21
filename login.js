
document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault(); // <-- auto load hoa theke atkay
        console.log('login button clicked');
    //       get the phone number
        const phoneNum = document.getElementById('phone-number').value;
        const pinNum  = document.getElementById('pin-number').value;

        //    console.log(phoneNum, pinNum);
        if(phoneNum ==='12345' && pinNum==='1'){
            window.location.href= 'home.html'
        }
        else{
            alert("wrong pin or phn num ");
        }
    })