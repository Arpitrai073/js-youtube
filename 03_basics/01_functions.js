// function addtwoNumbers(num1,num2)
// {
//     console.log(num1+num2);
// }
function addtwoNumbers(num1,num2)
{
    return num1+num2
}
const result=addtwoNumbers(3,null)
console.log(result);
function loginUser(username)
{
    if(!username)
    {
        console.log("Enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("arpit"))
