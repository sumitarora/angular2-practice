'use strict';

class Hello {
  @logIt()
  sayHello() {
    console.log('hello there');
  }
} 

function logIt() {
 return (target: any, name: string, descriptor: any) => {
  console.log(`call to ${name}`);
  return descriptor;
  };
}

new Hello().sayHello();