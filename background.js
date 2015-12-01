var bgs = [
    'catering.jpg',
    'chinese.jpg',
    'cupcakes.jpg',
    'desserts.jpg',
    'people.jpg',
    'steak.jpg'
];
var i = 0;

function changeBG() {
    document.body.style.backgroundImage = "url(images/backgrounds/" + bgs[i] + ")";
    i = (i+1) % bgs.length;
}

window.onload = function () {
  setInterval(changeBG, 5000);
  changeBG();
};
