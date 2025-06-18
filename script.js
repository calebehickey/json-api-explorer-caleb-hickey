document.getElementById("fetchButton").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            document.getElementById("postList").innerHTML = json.title
        });
        
        
});

document.getElementById("submitButton").addEventListener("click", () => {
    const postData = {
        title: document.getElementById("titleInput").value,
        body: document.getElementById("bodyInput").value,
        userId: 1,
        
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("data recieved");
        document.getElementById("postList").innerHTML = `Created Post ID: ${data.id} 
        ${title}
        ${body}`;
    });
});