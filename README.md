# typescript-study
learn typescript with vscode 
[typescript-tutorial](https://www.gitbook.com/book/xcatliu/typescript-tutorial/details)
## install ts
```bash
npm install -g typescript
```
## coding & compile
make file *hellow.ts*
```typescript
function hellow(name:string){
    console.log(name);
}
hellow('TOM');
```
compile ts file to js
```bash
tsc hellow.ts
```