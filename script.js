// 1 - 10
for (var i = 1; i < 10; i++) {
    document.getElementById('lowHolder').insertAdjacentHTML('beforeend', '<a id="idChild" class="lowLink" href="interventions/low/index.html#'+i+'"> 0'+i+'</a>');
}
for (var i=10; i <= 30; i++) {
    document.getElementById('lowHolder').insertAdjacentHTML('beforeend', '<a id="idChild" class="lowLink" href="interventions/low/index.html#'+i+'"> '+i+'</a>');
}

for (var i = 1; i <= 5; i++) {
    document.getElementById('midHolder').insertAdjacentHTML('beforeend', '<a id="idChild" class="midLink" href="interventions/mid/0'+i+'.html"> 0'+i+'</a>')
}

document.getElementById('highHolder').insertAdjacentHTML('beforeend', '<a id="idChild" class="highLink" href="interventions/high/01.html">01</a>')
