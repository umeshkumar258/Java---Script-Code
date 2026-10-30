const url = "https://catfact.ninja/fact";

const btn = document.querySelector("#btn");


const factpara = document.querySelector("#para");
const getData = async () => {
    console.log("Fetching data...");
    let promise = await fetch(url);
    // let data = await promise.json();
    console.log(promise);

    let data = await promise.json();
    console.log(data);

    factpara.innerText = data.fact;



};

btn.addEventListener("click", getData);
