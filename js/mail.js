console.log('JS mail OK');

const emailsList = ['matteo@boolean.com', 'luca@boolean.com', 'marco@boolean.com', 'mario@boolean.com', 'gino@boolean.com', 'maria@boolean.com'];
console.table(emailsList);
const emailTarget = document.getElementById('emailPlacer');
const userEmail = prompt('Inserisci la tua e-mail', 'gino@boolean.com').trim();
let isValid = false;

for (let i = 0; i < emailsList.length; i++){
    if(userEmail === emailsList[i]){
        isValid = true;
    }
};

console.log(isValid);

if(isValid){
    console.log('Acesso effettuato correttamente, benvenuto!');
} else {
    console.log('Acesso fallito, email non valida!');
};