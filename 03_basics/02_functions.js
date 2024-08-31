const user=({
    username:"arpit",
    age:20
})
function passobject(anyobj)
{
    console.log(`Logged in username is ${anyobj.username} and his age is ${anyobj.age}`)

}
passobject(user)
// let a=2;
// let b="hi";
// let c=console.log(a/b) 
const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(5))
//in this we cannot call function before its declaration