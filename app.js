

let input = document.querySelector("input")

let generatePassword =()=>{

    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = caps.toLowerCase();
    let special = "!@#$%&"
    let numbers = "0123456789"
    let pass = ""

    let first = caps[ Math.floor(Math.random() * caps.length) ]
    let second = small[Math.floor(Math.random() * small.length)]
    let third = special[Math.floor(Math.random() * special.length)]
    let fourth = numbers[Math.floor(Math.random() * numbers.length)]

    pass = first + second + third + fourth
    input.value = pass;
    console.log(pass)

}



let img = document.querySelector("img")
console.log(img)

img.addEventListener("click",()=>{

    if(input.type=="password")
       {
           input.type = "text"
           img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3xboMHnWwQMEQ6ot8txUG5uqlAa0J6S_ssH-wzdmnpw&s=10"
        } 
        else
            {
                input.type = "password"
                img.src = "https://png.pngtree.com/recommend-works/png-clipart/20240521/ourmid/pngtree-closed-eyes-icon-ad-block-png-image_12503494.png"
        }

    console.log("clicked")
})


let copyText =()=>{

    input.select()
    document.execCommand("copy")
    console.log("copied")
}