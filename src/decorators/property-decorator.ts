function readonly(target: any, propertyKey: string | symbol){
	let p = target[propertyKey];
	
	let eSetter = (val:any)=>{
		throw TypeError(`Cannot set property ${propertyKey} of ${target} which is readonly.`);
	}
	
	Object.defineProperty(
		target,
		<string>propertyKey,
		{
			get:()=>p,
			set:eSetter,
			enumerable:true
		}
	);
}

class B{
	@readonly static PROP = 1;
}
console.log(B.PROP);

B.PROP = 100;
console.log(B.PROP);