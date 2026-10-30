// async function greet(params) {
//     // throw "some random error.."
//     // Abo.abc
//     return "Umesh Kumar";
// }

// function greet1(){
//     return "new one";
// }

// greet()
// .then((result)=>{
//     console.log("promise succcesfully.")
//     console.log(result)
// })

// .catch((err) =>{
//     console.log("promise was rejecteed with err: ",err);
// })

// let hello = async () =>{
//     console.log("This arrow asys function..ok understnd.")
//     return "5";
// }

// hello()



function getNum() {
    // console.log(3) ;
    return new Promise((reslove, reject) => {

        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            reslove()
        }, 1000);

    });
}

async function demo() {
    await getNum();
    await getNum();
    getNum();
}