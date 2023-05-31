console.log('JS dadi OK');

const dadiPlacer = document.getElementById('dadiPlacer');
const dadiButton = document.getElementById('dadiButton');

dadiButton.addEventListener('click', function(){
    const pcNumber = Math.floor(Math.random() * 6)  +  1;
    console.log('Numero del computer: ' +  pcNumber);
    const userNumber = Math.floor(Math.random() * 6)  +  1;
    console.log('Numero dell\'user: ' +  userNumber);
    let result = `<h4>Il tuo numero: ${userNumber} - numero di Marco: ${pcNumber}</h4>`;

    if(userNumber > pcNumber){
        console.log('L\'utente ha vinto!');
        result += '<h4>HAI BATTUTO MARCO!</h4>'
    } else if(userNumber === pcNumber){
        console.log('I numeri sono ugali: pareggio!');
        result += '<h4>PAREGGIO!</h4>'
    } else {
        console.log('Il computer ha vinto!');
        result += `<h4> MARCO TI HA BATTUTO!</h4><h4>Marco ci tiene a ricordarti di non mettere div inutili!</h4>`
    }

    dadiPlacer.innerHTML = result;
})