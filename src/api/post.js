export const fetchPost = async () =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json)
        
 }