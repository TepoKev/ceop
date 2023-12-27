import {hashPassword} from './encrypt';

var password = "12345678";

(async ()=>{
    var result = await hashPassword(password);
    console.log(result.salt.length)
    console.log(result.hash.toString("base64").length)
})()