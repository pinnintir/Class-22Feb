const posts = [
{ title: 'Post One', body: 'This is post one' }, 
{ title: 'Post Two', body: 'This is post two' }
];

//We are mimicing how it is to fetch from a server 
//Set timeOut will take in a callback function and takes in a certain amt 
//of time where we want to delay what we put in here 

function getPosts () { 
setTimeout (() => { 
let output = '';
posts.forEach((post, index) => { 
output += `<li>${post.title}</li>`; 
}); 
document.body.innerHTML = output;
}, 2000); 
}

function createPost(post, callback) { 
    setTimeout(() => { 
        posts.push(post);
        callback(); 
    }, 2000); 
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts); 




//essentially this is an array of two objects 
//Instead of using Promises we are using a callback function using a setTimeout
//Instead of using the function declaration with the keyword function 
//We are using an arrow function 
//So that's a very common convention 
//Inside the set timeout we are going to try and get the posts and put on page
//whenever this runs we are basically putting in the body of the HTML doc the post title 
//This will happen each second 
//It's saying for each post inside of this array we are outputting an array 
//There's something about the notation post.title --> what kind of notation?
//We used dot notation in the curly braces
//For each object we are going inside and getting the title of that object 
//The post on lin 9 is representing each object in the array 
//We will use the dot notation to go inside and get the title 
//In order to go inside and get the body - we need post.body 

//So we get the posts from the array and we are looping through and then putting 
//them into the output variable and putting it on this line 

//

//getPost took one second and the createPost took two seconds 
//So this is where asynchronous programming comes in 












