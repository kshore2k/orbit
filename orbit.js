const screen = document.getElementById("screen");
let mouseX;
let mouseY;
let angle = 0;

document.addEventListener("click", (event) => {
    generateCircle(event.pageX, event.pageY);
});

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

const generateCircle = (x, y) => {
    const colors = ["aqua","chartreuse","coral","fuchsia","greenyellow","orangered","lime","magenta","slateblue","springgreen","red","tomato","yellow"];
    randomColor = colors[Math.floor(Math.random()*colors.length)];
    randomSize = Math.floor((Math.random()*31) + 5);

    const cirlce = document.createElement("div");
    cirlce.setAttribute("style", `height:${randomSize}px; 
                                    width:${randomSize}px; 
                                    background-color:${randomColor}; 
                                    border-radius:50%;
                                    left:${x}px;
                                    top:${y-50}px;
                                    display:inline-block;
                                    position: absolute;
                                    `
                        );

    screen.appendChild(cirlce);

    orbit(cirlce, angle);
};

const orbit = (circle, angle) => {

    const step = (timestamp) => {
        let x = mouseX + 50 * Math.cos(angle);
        let y = mouseY + 50 * Math.sin(angle);
        
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        angle = (angle + Math.PI / 360) % (Math.PI * 2);

        window.requestAnimationFrame(step);
    };
    
    window.requestAnimationFrame(step);
};