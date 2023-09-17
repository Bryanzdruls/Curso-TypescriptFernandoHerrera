import { genericFunctionArrow } from "../generics/generics";
import { Villain,Hero } from '../interfaces';


const deadpool = {
    name: 'DeadPool',
    realName:'Wade',
    dangerLevel:130
}

console.log(genericFunctionArrow<Villain>(deadpool) );


