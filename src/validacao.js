const form = document.getElementById('form');
const campo = document.querySelectorAll('.campos');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeValidate();
    emailValidate();
    numValidate();
})

function setError(index){
    campo[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
};

function removeError(index){
    campo[index].style.border = '';
    spans[index].style.display = 'none';
};

function nomeValidate(){
    if(campo[0].value.length < 3){
        setError(0);
    }else{
        removeError(0);
    }
};

function emailValidate(){
    if(!emailRegex.test(campo[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
};

function numValidate(){
    if(campo[2].value.length == " "){
        setError(2);
    }else{
        removeError(2);
    }
}

