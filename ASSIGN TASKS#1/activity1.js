
const myName = document.querySelector('h1');

myName.style.margin = '50px';
myName.style.fontSize = '60px';


const para = document.querySelectorAll('p');
para.forEach(p => {
    if(p.textContent.includes('Singer')){
        p.classList.add('ariana');
    }
    if(p.innerText.includes('Color')){
        p.classList.add('color');
    }
});