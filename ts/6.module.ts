import * as _ from "lodash";
let arr:object[] = [];
for(let i = 0;i<10;i++){
    arr.push({
        name:`name${i}`,
        age:i
    });
}
let result = _.find(arr,{name:'name1'});
console.log(result);