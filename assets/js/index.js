//Logos Sliding
const sliders = document.querySelectorAll(".icon-slider");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    sliders.forEach(sliders =>{
        sliders.setAttribute("data-animated", true);

        const sliderInner = sliders.querySelector(".icon-slider-inner");
        const sliderContent = Array.from(sliderInner.children);

        sliderContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('area-hidden', true);
            sliderInner.appendChild(duplicatedItem);
        });
    });
}

// change text color and image fade
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        const projectImage = project.querySelectorAll(".project-img");
        const projectText = project.querySelector(".project-text");
        const projectDescription = project.querySelectorAll("h2, p, h3");

        projectText.addEventListener("mouseenter", function() {
            projectImage.forEach(element =>{
                element.style.visibility = "visible";
                element.style.opacity = "1";
            })
            projectDescription.forEach(element =>{
                element.style.color = "#ddd";
            })
        });

        projectText.addEventListener("mouseleave", function() {
            projectImage.forEach(element =>{
                element.style.visibility = "hidden";
                element.style.opacity = "0";
            })
            projectDescription.forEach(element =>{
                element.style.color = "#111";
            })
        });
    });
});

//div follow cursor
document.addEventListener('DOMContentLoaded', () => {
    const projectText = document.querySelector('.project-text');
    const projectImg = document.querySelector('.project-img');

    projectText.addEventListener('mousemove', (e) => {
        projectImg.style.visibility = 'visible';
        projectImg.style.opacity = '1';
        projectImg.style.left = `${e.pageX-350}px`; // Offset for better positioning
        projectImg.style.top = `${e.pageY-120}px`;
    });

    projectText.addEventListener('mouseleave', () => {
        projectImg.style.visibility = 'hidden';
        projectImg.style.opacity = '0';
    });
});
