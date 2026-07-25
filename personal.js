const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});



const heroImage = document.querySelector(".hero-right img");

if(heroImage){

    heroImage.animate([

        {transform:"translateY(0px)"},
        {transform:"translateY(-12px)"},
        {transform:"translateY(0px)"}

    ],{

        duration:2500,
        iterations:Infinity

    });

}



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

    observer.observe(section);

});



const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});



const projects=document.querySelectorAll(".project-item img");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.boxShadow="0 0 20px #38BDF8";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.boxShadow="none";

    });

});



const skills=document.querySelectorAll(".skill");

skills.forEach(skill=>{

    skill.addEventListener("click",()=>{

        skill.style.background="#0EA5E9";

        setTimeout(()=>{

            skill.style.background="#1E293B";

        },300);

    });

});
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});