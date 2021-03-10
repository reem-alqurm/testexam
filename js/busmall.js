'use strict';
let continarEl = document.getElementById('continar');
function Bussmall(productName, imgepath){
    this.productName=productName;
    this.imgepath=imgepath;
    this.showen=0;
    Bussmall.arrayofproduct.push(this);
}
let image1index;
let image2index;
let image3index;

function render(){
    let image1 = document.createElement('img');
    continarEl.appendChild(image1);
    let image2 = document.createElement('img');
    continarEl.appendChild(image2);
    let image3 = document.createElement('img');
    continarEl.appendChild(image3);
    
    

}
function genratRandomindex(){
    return Math.floor(Math.random()*arrayofproduct.length)
}
Bussmall.arrayofproduct=[];

    new Bussmall('bag', 'images/bag.jpg');
    new Bussmall('banana', 'images/banana.jpg');
    new Bussmall('bathroom.', 'images/bathroom.jpg');
    new Bussmall('boots', 'images/boots.jpg');
    new Bussmall('breakfast', 'images/breakfast.jpg');
    new Bussmall('bubblegum', 'images/bubblegum.jpg');
    new Bussmall('chair', 'images/chair.jpg');
    new Bussmall('cthulhu', 'images/cthulhu.jpg');
    new Bussmall('dog-duck', 'images/dog-duck.jpg');
    new Bussmall('dragon', 'images/dragon.jpg');
    new Bussmall('pen', 'images/pen.jpg');
    new Bussmall('pet-sweep', 'images/pet-sweep.jpg');
    new Bussmall('scissors', 'images/scissors.jpg');
    new Bussmall('shark', 'images/shark.jpg');
    new Bussmall('sweep', 'images/sweep.png');
    new Bussmall('tauntaun', 'images/tauntaun.jpg');
    new Bussmall('unicorn', 'images/unicorn.jpg');
    new Bussmall('usb', 'images/usb.gif');
    new Bussmall('water-can', 'images/water-can.jpg');
    new Bussmall('wine-glass', 'images/wine-glass.jpg');

