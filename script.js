// Only fetching DATA here
// POST REQUEST
function post (){
    fetch('https://reqres.in/api/users',{
        method : 'POST',
        headers:{
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            name:'User 0',
        }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Error:'+err));
}






/*
GET REQUEST
fetch('https://reqres.in/api/users')
.then(res => res.json() )
.then(data => console.log(data))
.catch(err => console.log('Error:' +err));
*/