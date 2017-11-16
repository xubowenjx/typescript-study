/*
 * @Author: xubowen 
 * @Date: 2017-11-16 18:33:53 
 * @Last Modified by: xubowen
 * @Last Modified time: 2017-11-16 18:41:44
 */
/**
 * 被?修饰的属性作为可选字段继承实现
 */
interface IPerson {
  name: string
  age: number
  address?: string
}
let TOM: IPerson = {
  name: 'xubowen',
  age: 12
}
let Suni: IPerson = {
  name: 'Suny',
  age: 20
}
let Pol: IPerson = {
  name: 'POL',
  age: 12,
  address: '无锡'
}
//任意属性
interface IAnimal {
  //只读属性
  readonly name: string
  type: string
  age?: number
  [propName: string]: any
}
let dog: IAnimal = {
  name: 'dog',
  type: '4',
  color: 'red'
}
let cat: IAnimal = {
  name: 'cat',
  type: '4',
  color: 'white',
  age: 3
}
// cat.name = 'newCat'

