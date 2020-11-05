console.log("*** consumo de api ***");

// definir la url que vamos a consumir -----

const url = ("https://www.balldontlie.io/api/v1/players/");

const getData = (api,opc) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      if (opc==1)
      imprimirDatos(json);
      else
      obtenerUrl(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// primer paso para consumir la api es obtener las urls 

const obtenerUrl = (data) => {

  data.results.forEach(nba => {
       html="";
       getData(nba.url,1)

         
    
  });
}
let TodaData;
let html="";
const imprimirDatos = (data) => {
  
 // aca se tre todo el contenido de la data de la api
  // console.log (" lo que trajo fue ", data)
 
  data.data.forEach((jugadores) => {
    html += `<div class="cards">`;
    
    html += `<div>`;
    html += `<div class="hero">`;
    html += `<h2 class="txtTitulo">${jugadores.first_name}</h2> `;
    html += `<h2 class="txtTitulo">${jugadores.last_name}</h2>`;
    html += `<div class="contenedorResto">
    <h2 class="txtSmall">Posicion:</h2>
    <h3 class="txtP">${jugadores.team.full_name}</h3><hr>
      </div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    document.getElementById("jugadores").innerHTML = html;
 
});
 };

 //Metodo buscar

 let button = document.getElementById('button');

 button.addEventListener('click',()=>{
   
    let buscar = document.getElementById('buscar').value;
   
   
 });
 getData(url,1);
 





