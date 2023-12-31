import {hashPassword, isPasswordCorrect} from './encrypt';

var password = "12345678";

//Generate hash and salt

/* (async ()=>{
    var result = await hashPassword(password);
    console.log(result.salt.length)
    console.log(result.hash.toString("base64").length)
})() */

//Verify password

(async () => {
    var result = await isPasswordCorrect(
      "3sItehYEaZSMY125xFJ51TYX0AkWc77bPMDdxQpCb/NlPFpmyuqFdteTt11ObWLvegHie6RliOXGx28EQNQaQthAXbgYA+s722yZ3jpxyA1nEYcLNI9p96p15KsTxvTXSCIEMR57N9eLoIWQqkG22+ox4luwrFNEoDY2J8GAcQE=",
      "9EjHqGZqKi36P0KmYraWzylgRbt69Oudi3BRZscSvuCvuB2A+b2xBbzBDp7vpzZRKd/7Cawhg9JDBEqKdQOz8tiZAweggO+HlwpHGNClSJavpftZl8d7XZAKky540pWv5ClEk99FpRlYGR6Nk7FcnoHtkGrR4mX6d6uWO0gFGqM=",
      "IdJK063291S`"
    );
    console.log(result);
  })();