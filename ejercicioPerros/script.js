let cont = 1;
// let contX=0;
let totalRazas = [];
const labelsX = [];
const frecuencias = [, , , , , , , , , , , , , , , , , , , ,];
function perro() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(json => {
            if (cont < 20) {
                document.getElementById('random').src = json.message
            } else {


                document.getElementById('random').src = json.message
                let foto = document.getElementById('random').src
                let separar = foto.split('/');
                let raza = separar[4]
                var condicion = totalRazas.includes(raza)
                totalRazas.push(raza)
                if (!condicion) {
                    labelsX.push(raza)
                    frecuencias[cont - 1] = 1
                    // contX++
                } else {
                    let pos = labelsX.indexOf(raza)
                    console.log(pos)
                    frecuencias[pos]++

                }
            }
            
        })
        .then(() => {
            if (cont < 20) {
                let foto = document.getElementById('random').src
                let separar = foto.split('/');
                let raza = separar[4]
                var condicion = totalRazas.includes(raza)
                totalRazas.push(raza)
                if (!condicion) {
                    
                    document.getElementById(`c${cont}`).src = foto
                    labelsX.push(raza)
                    document.getElementById('showBreed').innerText = `¡Has encontrado un ${raza}!`
                    frecuencias[cont - 1] = 1
                    cont++
                    // contX++
                } else {
                    alert(`La raza de perro ${raza} está repetida`)
                    let pos = labelsX.indexOf(raza)
                    console.log(pos)
                    frecuencias[pos]++

                }
            } else {
                fetch('https://api.thecatapi.com/v1/images/search')
                    .then(res => res.json())
                 
                    .then(json => {
                        let data = json[0]
                        document.getElementById('random').src = data.url
                    })
                    .then(() => {
                        let foto = document.getElementById('random').src
                        document.getElementsByClassName('boton')[0].innerText = '¡Miau!'
                        document.getElementById(`c${cont}`).src = foto
                        document.getElementById('showBreed').innerText = '¡Ups! se ha colado un gato'
                        document.getElementById('titulo').innerText = 'Gatos'
                        document.getElementById('favIcon').href = 'http://4.bp.blogspot.com/-g3tGAC5psHg/UPHMfH-wMQI/AAAAAAAAAY4/VmD17lwrIww/s1600/BCPicon123.jpg'
                    })
            }
        })
        .then(() => {
            if (labelsX.length == 20) {
                const labels = labelsX;
                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Dog breeds',
                        backgroundColor: 'teal',
                        borderColor: 'goldenrod',
                        data: frecuencias,
                    }]
                };
                const config = {
                    type: 'line',
                    data: data,
                    options: {}
                };
                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            }
        })
}