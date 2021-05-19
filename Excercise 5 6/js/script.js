var oldpass ='admin';

function validate(){
    const user = document.getElementById('username');
    const pwd = document.getElementById('pwd');
    if(user.trim().length ==0){
        document.getElementById('errorName').innerHTML = "Xin moi nhap username";
        return false;
    }
    else{
        document.getElementById('errorName').innerHTML = "";
    }
    if(pwd.trim().length ==0){
        document.getElementById('errorPass').innerHTML = "Xin moi nhap password";
        return false;
    }
    else{
        document.getElementById('errorPass').innerHTML = "";
    }
    if(user!='admin' && user!=null){
        document.getElementById('errorName').innerHTML = "Sai username";
        return false;
    }
    else{
        document.getElementById('errorName').innerHTML = "";
    }
    if(pwd!= oldpass && user!=null){
        document.getElementById('errorPass').innerHTML = "Sai password";
        return false;
    }
    else{
        document.getElementById('errorPass').innerHTML = "";
    }
    if(true){
        document.getElementById('login').innerText = "Dang nhap thanh cong";
        document.getElementById('login').style.background = 'antiquewhite';
    }
}
function reset(){
    document.getElementById('username').value ='';
    document.getElementById('pwd').value ='';
    document.getElementById('username').value ='';
    document.getElementById('oldpass').value ='';
    document.getElementById('newpass').value ='';
    document.getElementById('errorOldpass').value ='';
    document.getElementById('errorNewPass').value ='';
    document.getElementById('success').value ='';
}
function loading(){
    document.getElementById('loading').innerHTML = 'Loading....';
    setTimeout(function (){
        validate();
        document.getElementById('loading').innerHTML = 'Login';
    }, 1000);
}
