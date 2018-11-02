//alert(hola mundo futbol )

setTimeout(console.log('b'),2000)
setTimeout(console.log('g'),100000000)

//objetos de equipos de colombia atributos nombre estrellas imegn entrenados web jugadores
var nacional = {
    nombre: "Atlético Nacional",
    estrellas: "16",
    urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/atletico-nacional.jpg",
    estadio: "<strong>Estadio </strong>Atanasio Girardot",
    entrenador: "<strong>Entrenador </strong>Jorge Almirón",
    web: "https://www.atlnacional.com.co",
    jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
};
var america = {
    nombre: "América de Cali",
    estrellas: "13",
    urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/america-de-cali.jpg",
    estadio: "<strong>Estadio </strong>Olímpico Pascual Guerrero",
    entrenador: "<strong>Entrenador </strong>Pedro Felipe Da Cruz Felicio Santos",
    web: "https://www.america.com.co",
    jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
};
var millonarios = {
    nombre: "Millonarios",
    estrellas: "15",
    urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/millonarios.jpg",
    estadio: "<strong>Estadio </strong>Nemesio Camacho El Campín",
    entrenador: "<strong>Entrenador </strong>Miguel Ángel Russo",
    web: "https://www.millonarios.com.co",
    jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
};

var tolima = {
    nombre: "Deportes Tolima",
    estrellas: "2",
    urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/deportes-tolima.jpg",
    estadio: "<strong>Estadio </strong>Manuel Murillo Toro",
    entrenador: "<strong>Entrenador </strong>Alberto Gamero",
    web: "https://www.clubdeportestolima.com.co/",
    jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
};
var medellin = {
    nombre: "Independiente Medellín",
    estrellas: "6",
    urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/independiente-medellin.jpg",
    estadio: "<strong>Estadio</strong>Atanasio Girardot",
    entrenador: "<strong>Entrenador </strong>Octavio Zambrano",
    web: "https://www.dimoficial.com",
    jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
};

var Equidad = [
        {
            nombre: "La Equidad",
            liga: "A",
            puntos: [6,6,0,0,9,0,9,18]
        } ]
        var s = ''; 
  
    var equipos =[nacional, america, millonarios, tolima, medellin];

    var nombrenaci = equipos =>{
            
            s =equipos.nombre           
            console.log('entro a nombrenac',s) 
           
    }
    nombrenaci(equipos)
    

    var selEquipos = document.getElementById('equipos');
    
    selEquipos.onchange = function(){
       var selectedOption = this.options[selEquipos.selectedIndex];
       
        console.log(selectedOption.value)
        if (selectedOption.value == 'millonarios'){                
               
                nombrenaci(millonarios)
                console.log(s)
                document.getElementById("equipoNac").innerHTML=s;
                console.log(selectedOption.value + ': ' + selectedOption.text);
        }        
}
       
     
       
        
        
      
     

    var select = document.getElementById('provincia');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  });


  //object.onchange = function(){myScript};


