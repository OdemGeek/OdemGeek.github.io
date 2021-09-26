function createRipple(event) {
    const button = event.currentTarget;
   
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - button.dataset.yoffset - radius}px`;
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
