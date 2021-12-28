//menu
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', ()=>{
  menu.classList.toggle('invisible'); //toggle: lấy ra thêm vào class invisible để ẩn hiện btn
});