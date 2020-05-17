buttonfind.onclick = function() {
    let val = document.getElementById('inputbox-input').value;
    if (val === 'google') {
        alert ('Yandex круче. Но это не точно');    
    } else {  
        alert (val);     
    }
        alert (users[0].name);
};

let users = [{
    name: 'Alex',
    age: '18'
}, {
    name: 'Masha',
    age: '25'
}];
