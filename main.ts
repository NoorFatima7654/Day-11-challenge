// //Question no 31

let users: string[] = ["eric","haseeb","ali","fatima","admin"]
users = []
if (users.length === 0) {
  console.log("we need to find  some users!")
}

 //Question no 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
 //unique username.
//• Make a list of five or more usernames called current_users.
let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"]

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the
 // current_users list.
 let new_users : string [] = ["admin","fatima","Aliza","Haseeb", "noor"]

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message 
//that the person will need to enter a new username. If a username has not been used, print a message saying that 
//the username is available.
 //• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 let current_users_lower : string []  =current_users.map(user => user.toLowerCase()) 

for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    } else {
        console.log(`yes ${new_user}, i still in available list`)

        }
    }


    //Question no 33

let numbers : number [] = [1,2,3,4,5,6,7,8,9]

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2)
{
    suffix = "nd";
    }
    console.log(`${number} ${suffix}`);
})