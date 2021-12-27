function creation(a) {
    var el = document.createElement('div');
    if (a === 1) {
        var x = document.querySelector(".month").innerHTML;
        var day = new Date(x, d);
        var g = day.getDay();
        el.style.gridColumnStart = g + 1;
    }
    el.className = 'b2';
    var x = document.querySelector(".ilaya");
    x.appendChild(el);
    el.innerHTML = a;
    el.addEventListener('click',function(){
        press(this);
    })
}
var d = 0;
var y;
var mon;
var month = ["January ", "February ", "March ", "April", "May", "June ", "July", "Augest ", "September", "October", "November", "December"];
function increment() {
    var x = document.querySelector(".month").innerHTML;
    var today = new Date(x, d+1, 0);
    y = today.getDate();
    var day = new Date(x, d);
    mon = day.getMonth();
    var j = month[mon];
    document.querySelector('.year').innerHTML = j;
    for (var i = 1; i <= y; i++) {
        creation(i);
    }
    d++;
    if (d == 13) {
        d = 1;
        document.querySelector(".month").innerHTML = x / 1 + 1;
    }
}
function decrement() {   
    var x = document.querySelector(".month").innerHTML;
    d--;
    if (d<0) {
        d = month.length-1;
        document.querySelector(".month").innerHTML = x / 1 - 1;
    }
    var today = new Date(x, d+1, 0);
    y = today.getDate();
    var day = new Date(x, d);
    mon = day.getMonth();
    var j = month[mon];
    document.querySelector('.year').innerHTML = j;
    for (var i = 1; i <= y; i++) {
        creation(i);
    }   

}
function remove() {
    document.querySelector('.ilaya').removeChild(document.querySelector('.b2'));
}
function destroy() {
    for (var i = 0; i < y; i++) {
        remove();
    }
}
function press(g){
    if(document.querySelector(".pressing")){
    document.querySelector(".pressing").classList.remove('pressing')
    }
    g.classList.add('pressing')
}
