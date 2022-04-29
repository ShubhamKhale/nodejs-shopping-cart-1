let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let nav4 = document.getElementById("nav4");
let nav5 = document.getElementById("nav5");

nav2.addEventListener("click", ()=>{
    window.scrollBy({ 
        top: 5900, 
        left: 0, 
        behavior: 'smooth' 
    });
})

nav3.addEventListener("click", ()=>{
    window.scrollBy({ 
        top: 4150, 
        left: 0, 
        behavior: 'smooth' 
    });
})

nav4.addEventListener("click", ()=>{
    window.scrollBy({ 
        top: 2850, 
        left: 0, 
        behavior: 'smooth' 
    });
})

nav5.addEventListener("click", ()=>{
    window.scrollBy({ 
        top: 1520, 
        left: 0, 
        behavior: 'smooth' 
    });
})

