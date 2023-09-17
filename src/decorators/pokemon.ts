function printToConsole(constructor:Function){
    console.log(constructor);
}

const printToConsoleConditional = (print:boolean =false):Function =>{
    
    if (print) {
        return printToConsole
    } else {
        return () =>{}
    }
}

const bloquearPrototipo = function(constructor:Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId():Function {
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = (id:number)=>{
            if (id<1 || id>800) {
               return console.error('El id debe estar entre 1 y 800');
                
            } else {
                originalMethod(id);
            }
        }
    }
}
function readOnly(isWritable:boolean=true):Function{
    return function(target:any, propertyKey:string){
        const descriptor:PropertyDescriptor = {
            get(){
                return 'brian'
            },
            set(this,val) {
                Object.defineProperty( this,propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                } );
            },
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( true )
export class Pokemon{
    @readOnly(true)
    public publicApi:string= 'https://pokeapi.co';
    constructor(
        public name:string,
        ){}

    @CheckValidPokemonId()
    savePokemonToDb(id:number){
        console.log(`Pokemon guardado en db ${id}`);
    }
}