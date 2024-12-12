async function displayComments(i) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/' + i)
    const comment = await response.json()
    const text = comment.body
    document.getElementById("comment" + i).textContent = text
}


async function displayUser(i) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + i)
    const user = await response.json()
    const text = user.name
    document.getElementById("user" + i).textContent = text
}

async function displayImg(i) {
    const response = await fetch('https://unsplash.it/1920/1080?random')
    const blob = await response.blob()
    document.getElementById("img" + i).src = URL.createObjectURL(blob)
}


for(let i = 1; i < 4; i++){
    displayUser(i)
    displayComments(i)
    displayImg(i)
}   