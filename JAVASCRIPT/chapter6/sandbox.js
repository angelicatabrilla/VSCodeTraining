// const para = document.querySelector('p');
// console.log(para);

// const para1 = document.querySelector('div.error');
// console.log(para1);

// const para2 = document.querySelector('body > h1');
// console.log(para2);


    // const paras =  document.querySelectorAll('p');
    // console.log(paras[0]);
    // // paras.forEach(para => {
    // //     console.log(para);
    // // });

    // const errors = document.querySelectorAll('.error');
    // console.log(errors);


// //get an element by ID
//     const title = document.getElementById('page-title');
//     console.log(title);


// //get elements by their class name
//     const errors = document.getElementsByClassName('error');
//     console.log(errors);
//     console.log(errors[0]);


// //get elements by their tag name
//         const paras = document.getElementsByTagName('p');
//         console.log(paras);
//         console.log(paras[1]);



const para = document.querySelector('p');
//console.log(para.innerText);

// //change the text on the html
// para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML);
//content.innerHTML += '<h2> THIS IS A NEW H2 </h2>';
//content.innerHTML = '<h2> THIS IS A NEW H2 </h2>';

const people = ['art', 'ange', 'rose'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

