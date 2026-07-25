const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

        nav.classList.remove("active");

    });

});

const heroImage = document.querySelector(".hero-right img");

heroImage.animate(

[
    {transform:"translateY(0px)"},
    {transform:"translateY(-10px)"},
    {transform:"translateY(0px)"}
],

{
    duration:2500,
    iterations:Infinity
}

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s";

    observer.observe(section);

});