const shrinkMenuBtn = document.querySelector('.shrink-menu-btn');
const search = document.querySelector('.search');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');
const activeTab = document.querySelector('.active-tab');

const tooltipElement = document.querySelectorAll('.tooltip-element');

const btnDark = document.querySelector('.btn-dark');
const btnUser = document.querySelector('.btn-user');
const userBx = document.querySelector('.user-bx');

let activeIndex;

shrinkMenuBtn.onclick = () => {
    document.body.classList.toggle('shrink');
}

search.onclick = () => {
    document.body.classList.remove('shrink');
    search.lastElementChild.focus();
}

function moveActiveTab() {
    let topPosition = activeIndex * 58 + 2.5;

    activeTab.style.top = `${topPosition}px`;
}

function changeLink() {
    sidebarLinks.forEach(sideLink => sideLink.classList.remove('active'));
    this.classList.add('active');
    activeIndex = this.dataset.active;
    moveActiveTab();
}

sidebarLinks.forEach((link) => link.addEventListener("click", changeLink));


function showTooltip() {
    let tooltip = this.parentNode.lastElementChild;
    let spans = tooltip.children;
    let tooltipIndex = this.dataset.tooltip;

    Array.from(spans).forEach((spEle) => spEle.classList.remove('show'));
    spans[tooltipIndex].classList.add('show');
    tooltip.style.top = `${100 / (spans.length * 2) * (tooltipIndex * 2 + 1)}%`;

}

tooltipElement.forEach((ele) => ele.addEventListener("mouseover", showTooltip));

btnDark.onclick = () => {
    let mainElement = document.querySelector('.main');
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle("dark-mode");
    mainElement.classList.toggle("dark-mode");
}

btnUser.onclick = () => {
    userBx.classList.toggle('dropdown');
}