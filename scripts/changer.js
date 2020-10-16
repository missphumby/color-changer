(function colorChanger() {
    const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.id === "grey"){
            body.style.backgroundColor = "gray"
        }else if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
        }else if(e.target.id === "red"){
            body.style.backgroundColor = "red"
        }else if(e.target.id === "blue"){
            body.style.backgroundColor = "blue"
        }else if(e.target.id === "green"){
            body.style.backgroundColor = "green"
        }else if(e.target.id === "lightpink"){
            body.style.backgroundColor = "fuchsia"
        }
    })
})

})()