//TRABAJO DE MIHAI Y YANN
while ((contLocStor != localStorage.length) && (encontrado != true)) {
    key = localStorage.key(contLocStor);
    //hasta aquí comprueba si tiene o no la key dentro del localStorage


    if (key == nombreBienCompleto) { // si la clave coincide con el nombre que tenemos ahora del perro
        let cantNum = Number(JSON.parse(localStorage.getItem(`${key}`)))
        cantNum++;
        localStorage.setItem(nombreBienCompleto, JSON.stringify( //ponemos en el localStorage el conjunto clave-valor que nos asocia el nombre completo de la raza al número de veces que aparece
            Number(cantNum)
        ));
        encontrado = true;// y una vez lo haya encontrado usamos esto para salir del bucle
    }
    contLocStor++;
}
// esto no se me habría ocurrido, principalmente porque no terminé de entender el locasStorage para antes del trabajo.


//TRABAJO DE JAVIER Y DAVID
function mostrar(id) {
    let test = document.getElementById('grafica');
    if (test.style.display == 'block') {
        test.style.display = 'none';
    } else {
        test.style.display = 'block'
    }
}
//no se me habría ocurrido por lo de usar el .style.diplay y porque la llama dentro del if >=20 que hay más arriba para que sólo la pinte cuando ya este rellena la cuadrícula


//TRABAJO DE ELENA Y JULIÁN
// header {
//     display: grid;
//     grid-template-rows: 1fr 1fr;
//     place-items: center;
//     background-image: url('./dogFood.png');
//     background-size: cover;
//     height: 20rem;
//     letter-spacing: 2rem;
//     margin-bottom: 10rem;
// }
//esto es css pero no se me habría ocurrido ponerle un header porque a veces me cuesta incorporar todas las herramientas de las que dispongo y no sé cuándo usar una y cuándo no


//TRABAJO DE ANIBAL Y SERGIO
if (localStorage.getItem('perritos') == null) {
    localStorage.setItem('perritos', JSON.stringify([]));
}
//este trabajo la verdad es que tiene muchas cosas que a mi no se me habría ocurrido usar, principalmente porque tiendo a coger unas cuantas herramientas que sé usar y me ciño a ellas y este grupo ha usado casi todo lo que habíamos visto hasta entonces

//en esta parte en concreto, la verdad es que me resultó muy interesante ver como hace para que si intenta coger un objeto y no está, crearlo


//TRABAJO DE GUSTAVO Y ALBERTO
const ejercicio1 = function () {
   
    if (document.querySelector(".grafica")) {
        var divs = document.querySelector(".grafica");
        var div = divs;
        var padre = div.parentNode;
        padre.removeChild(div);
        ejercicio1()//hasta aquí comprueba si tiene la gráfica y de ser así, la borra y luego vuelve a entrar en la función
    } else { //aquí si no tiene la gráfica lo que hace es crearla con todos sus divs y todo lo necesario
        grafi = document.createElement("div");
        grafi.setAttribute("class", "grafica");
        can = document.createElement("canvas");
        can.setAttribute("id", "myChart");
        grafi.appendChild(can);
        document.body.appendChild(grafi);
       
        if (cont1 <= 20) { //aquí si el contador que han definido es menor o igual que 20, va subiendo la etiqueta con la raza a su variable labels y
            if (cont1 == 1) {
                labels.push(`${json.message.split("/")[4]}`)
            } else {
                labels.push(arrayDePerros[0].razas)
            }
        }
    }
}

//esto me pareció fácilmente una de las cosas más creativas de todos los grupos, sobre todo cómo lo resolvieron usando la recursividad de la función