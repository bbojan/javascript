//text logger skip
console._log = console.log;
console.log = function(arg0){
    console._log.apply(window, arguments);

    setTimeout(() => {
        var el = document.getElementById('txt01');
        el.innerHTML = el.innerHTML + (arg0 ? arg0.toString() : '') + '\n';
    }, 1);
};
//text logger

//START

(function(){
    console.log(var1)
    var var1 = 1
    console.log(var1)
    let var2 = 2 
    console.log(var2)
})()
//// https://developer.mozilla.org/en-US/docs/Glossary/IIFE


// old-school class without prototype
var SimpleCar = SimpleCar || (function(){
    var car = {
        brand : '',
        working : false
    }

    car.start = function(){
        car.working = true
        console.log(car.brand + ' started')
    };

    car.stop = function(onStopped){
        setTimeout(function(){
            console.log(car.brand + ' stopping')
            car.working = false
            if(typeof onStopped === 'function'){
                onStopped()
            }
        }, 1000);
    }

    //constructor
    return function(brand){
        car.brand = brand
        return car
    }
})()

var car0 = SimpleCar('yugo'); //called without new (NO THIS)
car0.start()
car0.stop(function(){
    console.log(car0.brand + ' stopped')
})

var Car = Car || (function(){
    var car = function(brand){
        this.brand = brand;
        this.working = false
    }

    car.prototype = {
        start:function(){
            this.working = true
            console.log(this.brand + ' started')
        },
        stop:function(onStopped){
            var self = this;
            //must remember THIS , because async event with other THIS
            setTimeout(function(){
                console.log(self.brand + ' stopping')
                self.working = false
                if(typeof onStopped === 'function'){
                    onStopped()
                }
            }, 1000);
        }
    }

    return car
})()

var car1 = new Car('audi'); //called with new (MUST have THIS)
car1.start()
car1.stop(function(){
    console.log(car1.brand + ' stopped')
})

class OOCar{
    constructor(brand){
        this.brand = brand;
        this.working = false
    }

    start(){
        this.working = true
        console.log(this.brand + ' started')
    }

    stop(onStopped){
        setTimeout(()=>{
            console.log(this.brand + ' stopping')
            this.working = false
            if(typeof onStopped === 'function'){
                onStopped()
            }
        }, 1000);
    }
}

var car2 = new OOCar('mercedes'); //called with new (MUST have THIS)
car2.start()
car2.stop(function(){
    console.log(car2.brand + ' stopped')
})


const funk1 = function(){
    console.log(funk1.toString())
}

funk1.text = 'functions are also object and can have properties'
funk1();

funk1.method = () =>{
    console.log(funk1.text)
}

funk1.method();
