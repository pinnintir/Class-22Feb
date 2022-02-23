const posts = [
    { title: 'Post One', body: 'This is post one' }, 
    { title: 'Post Two', body: 'This is post two' }
    ];
    

    function getPosts () { 
    setTimeout (() => { 
    let output = '';
    posts.forEach((post, index) => { 
    output += `<li>${post.title}</li>`; 
    }); 
    document.body.innerHTML = output;
    }, 1000); 

}
    
function createPost(post) { 
return new Promise((resolve, reject) => { 
    setTimeout(() => { 
        posts.push(post); 

        const error = false;

        if (!error) { 
            resolve();
    
        } else { 
            reject('Error: Something went wrong'); 
        }
    }, 2000); 
}); 
}




//Try and go back and see if you can get this error message to work 
//Because it didn't work this time 

//createPost({ title: 'Post Three', body: 'This is post three'})
//.then(getPosts)
//.catch(err => console.log(err)); 

//Promise.all 
const promise1 = Promise.resolve('Hello World');
const promise2 = 10; 
const promise3 = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, 'Goodbye')
); 
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res
=> 
res.json()
);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));


//Async/Await/Fetch 
async function fetchUsers(){ 
const res = await fetch 
('https://jsonplaceholder.typicode.com/users'); 

const data = await res.json(); 
console.log(data); 
} 

fetchUsers(); 


//Moving on to Async/Await soon 
//Async await is just a way to handle responses
//We need to have a function that is labeled asynchronous 
//So we can say async await 
//what we want to do is create a function --the function needs to be labelled
//async
//So what we will do is create posts 
//Except we want to call right before it an await 
//Then we can simply call get posts 
//We are waiting 




