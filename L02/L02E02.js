(function(){

    const list1 = [0,1,2,3,4,5,6,7,8,9];
    console.log(list1)

    const mapped = list1.map(item => 'val ' + item * 10)
    console.log(mapped)

    const filtered = list1.filter(item => item % 2 === 1)
    console.log(filtered)

    const sum = list1.reduce((prev,curr,index)=> prev + curr, 0);
    console.log('sum ' + sum)

    const list2D = [
        [1,1,1],
        [2,2,2],
        [3,3,3]
    ];

    const slowFlat = list2D.reduce((prev,curr)=> prev.concat(curr), []);
    console.log('slowFlat ', slowFlat)

    const fastFlat = list2D.flatMap(item => item);
    console.log('fastFlat ', fastFlat)
   
    const list2D2 = [
        {arr:[1,1,1]},
        {arr:[2,2,2]},
        {arr:[3,3,3]}
    ];

    const fastFlat2 = list2D2.flatMap(item => item.arr);
    console.log('fastFlat2 ', fastFlat2)

    const map = {
        '42' : { name:'yugo', id:42 },
        '101' : { name:'audi', id:101 },
        '7' : { name:'mercedes', id:7 },
    }

    console.log(map)

    console.log(Object.keys(map))
    console.log(Object.values(map))

    const entries = Object.entries(map)

    console.log(entries)

    map[6] = { name:'toyota', id:6 };

    console.log(map[6])

    delete map[7]

    const entries2 = Object.entries(map).map(([key, value])=> ([value.name, value.id]))

    const Object_FromEntries = (entries) => {
        return entries.reduce((prev,[currentKey, currentValue]) => ({
            ...prev,
            [currentKey]:currentValue
        }),{});
    }

    const map2 = Object_FromEntries(entries2);

    console.log(map2)

})()
