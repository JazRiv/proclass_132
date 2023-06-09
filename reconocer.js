img = "";
set_name = "";
object_list = [];
estado = false;

function setup(){
    canvas = createCanvas(400, 400);
    modelo = ml5.objectDetector("cocossd", modelolisto);
    img.resize(400, 400);
}

function preload(){
    img = loadImage(localStorage.getItem("lugar")); 
    set_name = (localStorage.getItem("lugar"));
    if (set_name == "img_rec.jpg"){
        document.getElementById("nombre"). innerHTML = "Recamara";
    }
    if (set_name == "img_com.jpg"){
        document.getElementById("nombre").innerHTML = "Comedor";
    }
    if (set_name == "img_jar.jpg"){
        document.getElementById("nombre").innerHTML = "Jardin";
    }
    if (set_name == "img_mascotas.jpg"){
        document.getElementById("nombre").innerHTML = "Mascotas";
    }
    if (set_name == "img_can.jpg"){
        document.getElementById("nombre").innerHTML = "Canasta de frutas";
    }
}

function draw(){
    image(img, 0, 0, 400, 400);
    if (estado == true){
        for (var contador = 0; contador < object_list.length; contador ++){
            p_x = object_list[contador].x;
            p_y = object_list[contador].y;
            width = object_list[contador].width;
            height = object_list[contador].height;
            nombre = object_list[contador].label;
            conf = Math.round(object_list[contador].confidence*100) +" %";
            noFill()
            stroke("red");
            rect(p_x, p_y, width, height);
            text(nombre + conf, p_x, p_y);
        }
        document.getElementById("objetos").innerHTML = object_list.length + " objetos detectados";
    }
}

function bye(){
    window.location = "index.html";
}

function modelolisto(){
    console.log("modelo listo");
    modelo.detect(img, mostrar);
}

function mostrar(error, resultado){
    if (!error){
        console.log(resultado);
        object_list = resultado;
        estado = true;
    }
}