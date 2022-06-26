const url="";
let datab={
    host:"localhost",
    user:"jagruti",
    password:"1234",
    database:"Wptstudy1",
    port:3306
};
const mysql =require('mysql2');
const con=mysql.createConnection(datab);

console.log("Database adventures");