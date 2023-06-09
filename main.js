function navegar(lugar) {
    switch (lugar) {
        case "recamara":
            localStorage.setItem("lugar", 'img_rec.jpg');
            break;
        case "comedor":
            localStorage.setItem("lugar", 'img_com.jpg');
            break;
        case "jardin":
            localStorage.setItem("lugar", 'img_jar.jpg');
            break;
        case "mascotas":
            localStorage.setItem("lugar", 'img_mascotas.jpg');
            break;
        case "canasta":
            localStorage.setItem("lugar", 'img_can.jpg');
            break;
    }
    window.location = "reconocer.html";
}

