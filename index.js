
const printLet = () =>
{
    let a = 'i am let'
    return console.log(a);
}
const printConst = () =>
{
    const b = 'i am const'
    b = 'am i const?'
    return console.log(b);
}
const printVar = () =>
{
    var c = 'i am var'
    return console.log(c);
}
let a = 'hey'
const b = 'hey'
var c = 'hey'

a = 'i am updated'
// b = 'i am updated'
var c = 'i am updated'


printLet()
printConst()
printVar()

console.log(a);
console.log(b);
console.log(c);