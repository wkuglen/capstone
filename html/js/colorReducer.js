var half = Math.round(255/2);
var quarter = Math.round(half/2);
var quarter3 = half + quarter;
var eighth = Math.round(quarter/2);


console.log(half);
console.log(quarter);

// red
document.getElementById('colorBlocks_red').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: rgb(255,0,0)"></div>');
document.getElementById('colorBlocks_red').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: '+rgbStr(255,0,0)+'"></div>');
document.getElementById('colorBlocks_red').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: '+hslStr(0)+'"></div>');

// green
document.getElementById('colorBlocks_green').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: rgb(0,255,0)"></div>');
document.getElementById('colorBlocks_green').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: '+rgbStr(0,255,0)+'"></div>');
document.getElementById('colorBlocks_green').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color:'+hslStr(120)+'"></div>');

// blue
document.getElementById('colorBlocks_blue').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: rgb(0,0,255)"></div>');
document.getElementById('colorBlocks_blue').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color: '+rgbStr(0,0,255)+'"></div>');
document.getElementById('colorBlocks_blue').insertAdjacentHTML('beforeend',
'<div class="colorBlock" style="background-color:'+hslStr(240)+'"></div>');



function hslStr(h) {
    return('hsl('+h+', 75%, 50%)');
}

function rgbStr(r, g, b) {
    var newR = Math.round(0.75*r);
    var newG = Math.round(0.75*g);
    var newB = Math.round(0.75*b);
    return('rgb('+newR+','+newG+','+newB+')');
}
