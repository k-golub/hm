
function calculateZ(x, y) {
    if (x * y === 0) {
        return 'Ошибка';
    }
    return 1 / (x * y);
}


document.getElementById('verify').onclick = function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    
 
    const z = calculateZ(a, b);
    

    document.getElementById('result').value = z;
};


document.getElementById('send').onclick = function() {
    document.forms['UserEnter'].submit();
};