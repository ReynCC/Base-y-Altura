class CRectangulo{
    constructor(longitud, altura){
    this.longitud = longitud;
    this.altura = altura;
    }
    CalcularArea(){
        return this.longitud * this.altura;
    }
}

let rectangulo = new CRectangulo(5, 16);

document.write(rectangulo.longitud + "<br>");
document.write(rectangulo.altura + "<br>");

let area= rectangulo.CalcularArea();
document.write(area);