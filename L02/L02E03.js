(function(){

    const list1 = [0,1,2,3,4,5,6,7,8,9];
    const [_, second, third, ...rest] = list1

    console.log(second);
    console.log(third);
    console.log(rest);

    const [a,b] = ['A','B'];
    console.log(a,b);

    const [c,d] = [{name:'C'},{name:'D'}];
    console.log(c,d);

    const funk = ([v,b]) => ([41 + v,true, b]);
    const [val,bool, b3] = funk([1,false]);
    
    console.log(val, bool, b3);


    const array2 = [0,1];
    const array3 = [3, ...array2];
    console.log(array3);

    const obj1 = {
        a:1,
        b:2,
        c:3,
        funk:()=>{}
    };

    console.log(obj1)

    const obj2 = {
        ...obj1,
        c:4,
        d:5,
    };

    console.log(obj2)


    const map1 = new Map();
    map1.set(1,'A');
    map1.set(2,'B');
    map1.set(3,'C');

    console.log(map1);
    
    console.log(map1.has(2));

    map1.delete(2);

    console.log(map1.get(2));

    console.log(map1.get(3));

    let entries = []
    map1.forEach((v,k)=> entries.push([k,v]));

    console.log(entries);

})()

