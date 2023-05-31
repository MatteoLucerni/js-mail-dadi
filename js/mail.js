console.log('JS mail OK');

const emailsList = ['matteo@boolean.com', 'luca@boolean.com', 'marco@boolean.com', 'mario@boolean.com', 'gino@boolean.com', 'maria@boolean.com'];
console.table(emailsList);
const emailTarget = document.getElementById('emailPlacer');
const mailButton = document.getElementById('emailButton');

mailButton.addEventListener('click', function(){
    let isValid = false;
    const userEmail = document.getElementById('email').value.trim();
    console.log(userEmail);

    // Verifica del dato inserito dall'utente

    if(!userEmail.includes('@') || !userEmail.includes('.')){
        console.log('Input non valido');
        emailTarget.innerText = 'Errore: per favore inserisci una mail, esempio: example@email.com';
        emailTarget.classList.remove('text-info');
        emailTarget.classList.add('text-danger');
        return;
    }

    // Verifico se la mail è presente nell'array
    // ! (vietato utilizzare .inludes( ) sull'array)

    for (let i = 0; i < emailsList.length; i++){
        if(userEmail === emailsList[i]){
            isValid = true;
        }
    };

    console.log(isValid);

    // In base al risulato della verifica array stampo in pagina

    if(isValid){
        console.log('Acesso effettuato correttamente, benvenuto!');
        emailTarget.innerText = 'Acesso effettuato correttamente, benvenuto!';

        // Verifica colore testo e sostituzione
        if(emailTarget.classList.contains('text-danger')){
            emailTarget.classList.remove('text-danger');
            emailTarget.classList.add('text-info');
        }
    } else {
        console.log('Acesso fallito, email non valida!');
        emailTarget.innerText = 'Acesso fallito, email non valida!';

        // Verifica colore testo e sostituzione
        if(emailTarget.classList.contains('text-info')){
            emailTarget.classList.remove('text-info');
            emailTarget.classList.add('text-danger');
        }
    };
})