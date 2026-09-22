let url = "https://catfact.ninja/fact"

fetch(url)
.then((res) =>{
    console.log(res);
    return res.json()
})
.then((data)=>{
    console.log(data)
    console.log(data.fact)
    console.log(data.length)

    return fetch(url)
})
.then((res)=>{
    return res.json();
})

.then((data2) =>{
    console.log(data2)
})


.catch((err) =>{
    console.log(err);
})

console.log("I am happy..")