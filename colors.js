
function colorJS(){ 
    const activeJS = document.documentElement.classList;

    if(activeJS == ' js') {

    const btnSubmit = document.querySelector('[type="submit"]');

    function getColor(){
        const btnText = document.querySelector('[type="text"]');
        let btnValue = btnText.value;
        let firstLetter = btnValue[0];
        let wordLength = btnValue.length;
        let lastLetter = wordLength - 1;
        let letterElementf = document.querySelector('.firstLetter span').innerHTML = firstLetter;
        let letterElementl = document.querySelector('.lastLetter span').innerHTML = btnValue[lastLetter];
        let lengthElement = document.querySelector('.length span').innerHTML = wordLength;
        let bodyElement = document.querySelector('body').style.background = `${btnValue}`;

        const notification = document.querySelector('p.notification');
        let notText = notification.innerHTML = `Você digitou a cor: ${btnValue}`;
        const notStyle = notification.style.textTransform = "lowercase";

        if(btnValue === 'azul' || btnValue === 'Azul'){
            bodyElement = document.querySelector('body').style.background = `#0652DD`;
        }

        if(btnValue === 'amarelo' || btnValue === 'Amarelo'){
            bodyElement = document.querySelector('body').style.background = `#FFC312`;
        }

        if(btnValue === 'laranja' || btnValue === 'Laranja'){
            bodyElement = document.querySelector('body').style.background = `#EE5A24`;
        }

        if(btnValue === 'vermelho' || btnValue === 'Vermelho'){
            bodyElement = document.querySelector('body').style.background = `#ED4C67`;
        }

        if(btnValue === 'verde' || btnValue === 'Verde'){
            bodyElement = document.querySelector('body').style.background = `#009432`;
        }

        if(btnValue === 'roxo' || btnValue === 'Roxo'){
            bodyElement = document.querySelector('body').style.background = `purple`;
        }

        if(btnValue === 'marrom' || btnValue === 'Marrom'){
            bodyElement = document.querySelector('body').style.background = `brown`;
        }

        if(btnValue === 'preto' || btnValue === 'Preto'){
            bodyElement = document.querySelector('body').style.background = `#111`;
        }

        if(btnValue === ''){
            letterElementf = document.querySelector('.firstLetter span').innerHTML = 'x';
            letterElementl = document.querySelector('.lastLetter span').innerHTML = 'x';
            lengthElement = document.querySelector('.length span').innerHTML = 'x';
            notText = notification.innerHTML = 'Você não digitou nenhuma cor!';
        }
    }

    btnSubmit.addEventListener('click', getColor);

}

}

colorJS();


function tituloDigita (){

    const h1 = document.querySelector('h1');
    let textoArray = h1.innerHTML.split('');
    let textoLenght = textoArray.length;

    function typeWrite(elemento){
        elemento.innerHTML = '';

        textoArray.forEach( (letra, index) => {
            setTimeout(function() {
                elemento.innerHTML += letra;
            }, 150 * index);
        });
    }

typeWrite(h1);

}

tituloDigita();
