
// const tl = gsap.timeline({
//     default: {
//         duration: 1.8,
//     }
// })

// tl.set(".home-container1", {
//     x: -700,
// })
//     .set(".name", {
//         opacity: 0
//     })
//     .set(".job_role", {
//         opacity: 0
//     })
//     .set(".home-container2", {
//         x: -700,
//     })
//     .to(".home-container2", {
//         x: 0,
//     })
//     .to(".home-container1", {
//         x: 0,
//     })
//     .to(".name", {
//         opacity: 1,
//         duration: 1.5
//     })
//     .to(".job_role", {
//         opacity: 1,
//         duration: 1.5
//     })


const navbar = document.querySelector(".navbar")
const icon = document.querySelector(".icon")


icon.addEventListener("click",() => {  
    navbar.classList.toggle("active")
});


