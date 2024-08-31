const user={
    username:"Arpit",
    Welcomemsg:function()
    {
        console.log(`${this.username} welcome to our website`);
        console.log(this)
    }
}
// user.Welcomemsg()
// user.username="Sam"
// user.Welcomemsg()
// this will only work in objects not in functions
// const addTwo=(num)=>{
//     return num+2
// }
const addTwo=(num)=> num+2//this is known as implicit return ,if we use curly bracket then we will have to mention return but we are mentioning parenthesis then we will not use return 
console.log(addTwo(2))