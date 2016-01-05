function paramDecorator(target: any, propertyKey: string | symbol, parameterIndex: number) {
    console.log(parameterIndex);
    console.log(propertyKey);

    let p = target[propertyKey];
    console.log(p);

    let eSetter = (val:any)=>{
        throw TypeError(`OOPS ${propertyKey} of ${target} is readonly.`);
    }

    Object.defineProperty(target,  <string>propertyKey, {
        get:()=>p,
        set:eSetter,
        enumerable:true
      }
    );
}

class Hello2{
    sayHello(param1: string, @paramDecorator param2: string) {
        console.log(param1);
        console.log(param2);
    }
}

var h = new Hello2();
h.sayHello('a','b');