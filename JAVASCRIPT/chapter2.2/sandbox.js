// arrays methods
    let ninjas = ['shaun', 'ryu', 'chun-li'];

    ninjas[1] = 'ken';
    console.log(ninjas[1]);

    let ages = [20, 25, 30, 35];
    console.log(ages[2]);

    let random = ['shaun', 'çrystal', 30, 20];
    console.log(random);

    console.log(ninjas.length);

    // let result = ninjas.join(', ');
    // let result = ninjas.indexOf('chun-li');
    
    // join things together
    // let result = ninjas.concat(['ken', 'crystal']);

    // push method

    // let result = ninjas.push('ken');
    // result = ninjas.pop();

    // console.log(result);


    // let age = null;
    // console.log(age, age + 3, `the age is ${age}`);

    // booleans & comparisons
    // console.log(true, false, "true", "false");

    // // methods can return booleans
    // let email = 'tabrillaangelica@gmail.com';
    // let names = ['art', 'rose', 'tabs'];

    // let result = email.includes('@');
    // let result = names.includes('art');
    // console.log(result);


    // comparison operators
        //let age = 25;
        // console.log(age == 25);
        // console.log(age == 20);
        // console.log(age != 35);
        // console.log(age > 20);
        // console.log(age < 20);
        // console.log(age <= 25);
        // console.log(age >= 25);


    // let name = 'art';
    // console.log(name == 'art');
    // console.log(name == 'Art');
    // console.log(name > 'zebra');
    // console.log(name > 'Art');

    // loose comparison (different types can still be equal)
        //console.log(age == 25);
        //console.log(age == '25');
        //console.log(age != 25);
        //console.log(age != '25');

    // strict comparison (different types cannot be equal)
        // console.log(age === 25);
        // console.log(age === '25');
        // console.log(age !== 25);
        // console.log(age !== '25');

    //type conversion
        let score = '100';

        // score = Number(score);
        // console.log(score+1);
        // console.log(typeof score);

        let result = Number('hello');
        //let result = String(50);
        //let result = Boolean(0);   
        //let result = Boolean('0');

        console.log(result, typeof result);

    