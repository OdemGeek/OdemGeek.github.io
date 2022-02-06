function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - button.dataset.yoffset - radius + window.scrollY}px`;

    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);

}

function createRippleOut(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - button.dataset.yoffset - radius + window.scrollY}px`;

    circle.classList.add("rippleOut");

    const ripple = button.getElementsByClassName("rippleOut")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);

}

window.onload = function () {
    var buttons = document.getElementsByClassName('sBlock');
    for (const button of buttons) {
        button.addEventListener("click", createRipple);
        //button.addEventListener("focusout", createRippleOut);
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

var mx = 0;
var my = 0;

document.addEventListener('mousemove', e => {
    mouseXpercentage = e.clientX + window.scrollX;
    mouseYpercentage = e.clientY + window.scrollY;
    mx = e.clientX;
    my = e.clientY;
    document.body.style.setProperty('--x', mouseXpercentage + "px");
    document.body.style.setProperty('--y', mouseYpercentage + "px");
});

window.addEventListener('scroll', e => {
    mouseXpercentage = mx + window.scrollX;
    mouseYpercentage = my + window.scrollY;
    document.body.style.setProperty('--x', mouseXpercentage + "px");
    document.body.style.setProperty('--y', mouseYpercentage + "px");
});