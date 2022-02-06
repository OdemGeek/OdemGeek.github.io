function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - button.dataset.yoffset - radius + window.scrollY}px`;
    /*circle.style.left = `${event.clientX - radius}px`;
    circle.style.top = `${event.clientY - radius}px`;*/
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);

}

window.onload = function () {
    var buttons = document.getElementsByClassName('sBlock');
    for (const button of buttons) {
        button.addEventListener("click", createRipple);
    }
    
}

window.addEventListener('scroll',function (e) {
    var el = document.getElementById('helpPanel');
    var style = getComputedStyle(el);
    var isPositionFixed = (style.getPropertyValue('position') == 'fixed');

    if (window.scrollY < 200 && isPositionFixed) {
        //el.style.display = 'none';
        el.className = 'helpPanelHidden';
    }
    else {
        //el.style.display = 'inherit';
        el.className = 'helpPanelShown';
    }
});



let constrain = 20;
let mouseOverContainer = document.getElementsByClassName("sBlocks");
let ex1Layer = document.getElementsByClassName("sBlock");

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(100px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position);
    });
    alert(position);
};
