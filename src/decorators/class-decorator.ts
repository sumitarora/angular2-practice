function readOnly<T extends Function>(t:T):T|void{
    let base = t;

    function construct(constructor:T, args:any[]) {
        let obj: any = function () {
            return constructor.apply(this, args);
        };
        obj.prototype = constructor.prototype;
        return new obj();
    }

    let func: any = (...args:any[])=>{
        let newObj = construct(base, args);
        Object.freeze(newObj);
        return newObj;
    };

    func.prototype = base.prototype;
    return func;
}

@readOnly
class A{
    prop = 1;
}

var a = new A();
console.log(a.prop);
a.prop = 100;
console.log(a.prop);

