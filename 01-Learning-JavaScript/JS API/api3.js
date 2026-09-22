console.log("About Dog API")

let btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {

    let link = await getImages()

    

    console.log(imgs);

    let img = document.querySelector("img")

    img.setAttribute("src", link)

});




let url = "https://dog.ceo/api/breeds/image/random"


async function getImages() {
    try {
        let res = await axios.get(url)
        console.log(res)
        return res.data.message

    }
    catch (er) {
        console.log(er)
        return "No Images Found"
    }
}




