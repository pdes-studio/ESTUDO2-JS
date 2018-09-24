
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
        let notification = document.querySelector('p.notification').innerHTML;

        let bodyElement = document.querySelector('body').style.background = `${btnValue}`;

        if(btnValue === 'azul'){
            bodyElement = document.querySelector('body').style.background = `#0652DD`;
        }

        if(btnValue === 'amarelo'){
            bodyElement = document.querySelector('body').style.background = `#FFC312`;
        }

        if(btnValue === 'laranja'){
            bodyElement = document.querySelector('body').style.background = `#EE5A24`;
        }

        if(btnValue === 'vermelho'){
            bodyElement = document.querySelector('body').style.background = `#ED4C67`;
        }

        if(btnValue === 'verde'){
            bodyElement = document.querySelector('body').style.background = `#009432`;
        }

        if(btnValue === 'roxo'){
            bodyElement = document.querySelector('body').style.background = `purple`;
        }

        if(btnValue === 'marrom'){
            bodyElement = document.querySelector('body').style.background = `brown`;
        }

        if(btnValue === 'preto'){
            bodyElement = document.querySelector('body').style.background = `#111`;
        }

        if(btnValue === ''){
            letterElementf = document.querySelector('.firstLetter span').innerHTML = 'x';
            letterElementl = document.querySelector('.lastLetter span').innerHTML = 'x';
            lengthElement = document.querySelector('.length span').innerHTML = 'x';
            notification = document.querySelector('p.notification').innerHTML = 'Você não digitou nenhuma cor!';
        }
    }

    btnSubmit.addEventListener('click', getColor);

}

}

colorJS();
