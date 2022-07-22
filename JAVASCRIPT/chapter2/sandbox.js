// Number 1:
/*
    alert('hello, world');

    console.log(1);
    console.log(2);

    let age = 25;
    let year = 2019;
    console.log(age, year);

    age = 30;
    console.log(age);

    const points = 100;
    //points = 50;
    console.log(points);

   var score = 75;
   console.log(score); 
*/

//Number 2:
/*
   // strings
    console.log('hello, world');

    let email = 'tabrillaangelica@gmail.com';
    console.log(email);

   // string concatenation
    let firstName = 'Angelica';
    let lastName = 'Tabrilla';

    let fullName = firstName + ' ' + lastName;
    console.log(fullName);

   // getting characters
    console.log(fullName[0]);

   // string length
    console.log(fullName.length);

    // string method
    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result, fullName);

    let index = email.indexOf('@');
    console.log(index);
*/


//Number 3:
/*
    //common string methods
    let email = 'tabrillaangelica@gmail.com';

    //let result = email.lastIndexOf('n');
    //let result = email.slice(8, 16);
    //let result = email.substr(8, 8);
    //let result = email.replace('l', 'y');
    
    console.log(result);
*/

//Number 4:
/*
    let radius = 10;
    const pi = 3.14;

    console.log(radius, pi);

    //math operators +. -, /, **, %
        console.log(10/2);
         let result = radius % 3;
         //let result = pi * radius**2;
     
    // order of operation - B I D M A S  

       //let result = 5 * (10-3)**2;
       console.log(result); 
*/

    //SHORT HAND NOTATION
      /*  
            let likes = 10;
            //likes = likes +1;
            //likes ++;
            //likes--;
            //likes += 10;
            //likes -= 5;
            //likes *= 2;
            //likes /=2;

            //console.log(likes);
        

    // NaN - not a number
        //console.log(5 / 'hello');
       // console.log(5 * 'hello');
        
            let result = 'the blog has ' + likes + ' likes';
            console.log(result);
    */

    // Number 5:

        // template strings
        const title = 'Best reads of 2019';
        const author = 'Mario';
        const likes = 30;

        // concatenation way
        // let result = 'The blog called '+ title + ' by ' + author + ' has ' + likes + ' likes';
        // console.log(result);

        // template string way
        let result = `The blog called ${title} by ${author} has ${likes} likes`;
        console.log(result);

        // creating html templates
        let html = `
            <h2>${title}</h2>
            <p>By ${author} </p>
            <span>This blog has ${likes} likes </span
            `;
            console.log(html);

    