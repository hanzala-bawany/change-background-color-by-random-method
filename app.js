let bgc = ['Yellow','SkyBlue','SeaGreen','Gray','Purple','Orange','Pink','Red'] 

//   bgcolor change step by step

// let i = 0;
// function colorChanger(){
//     if(i==bgc.length){
//         i=0;
//     }
//     document.body.style.backgroundColor=bgc[i];
//     let spanOfBox =  document.body.querySelector(".box").querySelector("span")
//     spanOfBox.innerText=bgc[i]
//     spanOfBox.style.color=bgc[i]
//     i++;
// }


//   bgcolor change randomly

function colorChanger(){
    let randomColor = Math.floor(Math.random()*bgc.length);
    document.body.style.backgroundColor=bgc[randomColor];
    let spanOfBox =  document.body.querySelector(".box").querySelector("span");
    spanOfBox.innerText=bgc[randomColor];
    spanOfBox.style.color=bgc[randomColor];
}


//   bgcolor change but with use a new function

// let changeColor = () =>{
//     let randomColor = Math.floor(Math.random()*bgc.length);
//     document.body.style.backgroundColor=bgc[randomColor];
//     let spanOfBox =  document.body.querySelector(".box").querySelector("span");
//     spanOfBox.innerText=bgc[randomColor];
//     spanOfBox.style.color=bgc[randomColor];
// }
// let box = document.getElementsByClassName('btn');
// box.addEventListener("click",changeColor)
