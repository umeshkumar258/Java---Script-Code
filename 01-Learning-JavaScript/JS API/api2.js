let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {

  let fact = await getFacts();

  console.log(fact);

  let p = document.querySelector("#fact");

  p.textContent = fact;
});




let url = "https://catfact.ninja/fact"

async function getFacts() {

    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(res)
        console.log(data)
    } 
    catch(err){
        console.log("Error Occures",err)
    }
    console.log("Good Bye")
}

getFacts();




async function getFacts(){
    try{
        let res = await axios.get(url)
        return res.data.fact
        
    }
    catch(er){
        console.log(er)
        return "No fact found.."
    }
}




