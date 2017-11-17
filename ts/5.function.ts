/*
 * @Author: xubowen 
 * @Date: 2017-11-17 11:57:04 
 * @Last Modified by: xubowen
 * @Last Modified time: 2017-11-17 16:41:04
 */
function sum(x:number,y:number):number {
    return x+y;
}
/**
 * just assign the function to variable 
 * @param x 
 * @param y 
 */
let s1 = function (x:number,y:number):number {
    return x+y;
}
/**
 * declare the function type & parameter
 * @param x 
 * @param y 
 */
let s2:(x:number,y:number)=>number = function(x:number,y:number):number{
    return x+y;
}
interface FunMain {
    (x:number,y:number):number
}
/**
 * 接口申明函数形式
 */
let ssum:FunMain;
ssum = function (x:number,y:number){
    return x+y;
}
/**
 * 可选参数 y 
 * @param x 
 * @param y 
 */
function kk (x:number,y?:number) {
    return y?x+y:x;
}
kk(1);
kk(1,2)
/**
 * 参数设置默认值
 * @param name 
 * @param age 
 */
function defaultParam (name:string,age:number = 1) {
    console.log(name);
    console.log(age);
}
/**
 * 剩余参数
 * @param first 
 * @param other 
 */
function say (first,...other){
    console.log(`first param is ${first}`);
    console.log(`other param is ${other}`);
}
function say1 (first:any[],...other:any[]){
    other.forEach(function(x){
        first.push(x);
    });
}

function overload (str:string):string;
function overload (str:number):number;
function overload (str:number|string):number|string {
    var res = str.toString().split('').reverse().join('');
    if(typeof str =='number'){
        return Number(res);
    }else {
        return res;
    }
}
overload(123);
overload('123');

