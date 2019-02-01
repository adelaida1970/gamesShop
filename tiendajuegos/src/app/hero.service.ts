import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    productos: any = [{
        
        "products": [
            {
                "id": 1,
                "name": "CORRALÍSIMA ½ LIBRA",
                "categories": [
                    1
                ],           
                "available": true,
                "bestSeller": true,
                "price": "35000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/media-libra.png",
                "description": "Media libra de carne de res asada a la parrilla, con salsa BBQ."
            },
            {
                "id": 2,
                "name": "CORRALÍSIMA ¾ DE LIBRA",
                "categories": [
                    1,2
                ],            
                "available": true,
                "bestSeller": false,
                "price": "40000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/tres-cuartos-de-libra.png",
                "description": "Tres cuartos de libra de carne de res asada a la parrilla, con salsa BBQ."
            },
            {
                "id": 3,
                "name": "CORRAL CASERA",
                "categories": [
                    1
                ],            
                "available": false,
                "bestSeller": false,
                "price": "10500",            
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/casera.png",
                "description": "1/3 Lb. De carne de res, con queso americano, cebolla roja recién cortada, tomate y lechuga fresca."
            },
            {
                "id": 4,
                "name": "CORRALÍSIMA TODOTERRENO",
                "categories": [
                    1,2
                ],            
                "available": true,
                "bestSeller": true,
                "price": "30000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/Corralisima.png",
                "description": "Dos porciones de ¼ de lb. De carne de res asada a la parrilla, con tocineta, queso mozzarela, vegetales, pepinillos y salsa BBQ."
            },
            {
                "id": 5,
                "name": "CORRAL",
                "categories": [
                    2
                ],         
                "available": true,
                "bestSeller": true,
                "price": "6500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/corral.png",
                "description": "La tradicional con ¼ lb. de carne de res, lechuga fresca, tomate y cebolla recién cortados. Salsas y las adiciones que prefieras."
            },
            {
                "id": 6,
                "name": "CORRAL CON QUESO",
                "categories": [
                    2
                ],           
                "available": true,
                "bestSeller": true,
                "price": "8000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/corral-queso.png",
                "description": "La tradicional con queso mozzarella, verduras frescas y salsas."
            },
            {
                "id": 7,
                "name": "CORRAL ESPECIAL",
                "categories": [
                    1,2
                ],           
                "available": false,
                "bestSeller": false,
                "price": "17000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/corral-especial.png",
                "description": "Carne, lechuga, tomate, cebolla, salsas con tocineta en trocitos y queso mozzarella."
            },
            {
                "id": 8,
                "name": "CORRAL HAWAIANA",
                "categories": [
                    1,2
                ],            
                "available": true,
                "bestSeller": false,
                "price": "14500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/hawaiana.png",
                "description": "Con queso mozzarella, piña, salsas y lechuga fresca."
            },
            {
                "id": 9,
                "name": "VAQUERO SENCILLO",
                "categories": [
                    3
                ],            
                "available": true,
                "bestSeller": false,
                "price": "8500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/vaquero.png",
                "description": "Con queso, cebolla picada, papas chips trituradas y salsas."
            },
            {
                "id": 10,
                "name": "VAQUERO ESPECIAL",
                "categories": [
                   3
                ],            
                "available": true,
                "bestSeller": false,
                "price": "14500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/vaquero.png",
                "description": "Con queso mozzarella, tocineta, cebolla picada, papas chips trituradas y salsas."
            }
            
            ,
            {
                "id": 11,
                "name": "VAQUERO TOCINETA",
                "categories": [
                    3
                ],            
                "available": true,
                "bestSeller": true,
                "price": "14500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/vaquero.png",
                "description": "Con queso mozzarella, piña, salsas y lechuga fresca."
            },
            {
                "id": 12,
                "name": "GASEOSA NORMAL",
                "categories": [
                    4
                ],            
                "available": true,
                "bestSeller": true,
                "price": "4500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/EC-Vaso.png",
                "description": "Solo productos postobon."
            },
            {
                "id": 13,
                "name": "NESTEA MEDIANO",
                "categories": [
                    4
                ],            
                "available": false,
                "bestSeller": false,
                "price": "4500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/EC-Vaso.png",
                "description": "Todos los sabores."
            },
            {
                "id": 14,
                "name": "CERVEZA NACIONAL",
                "categories": [
                    4
                ],            
                "available": true,
                "bestSeller": false,
                "price": "6000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/cerveza-nacional.png",
                "description": "350ml."
            },
            {
                "id": 15,
                "name": "H2OH",
                "categories": [
                    4
                ],            
                "available": false,
                "bestSeller": false,
                "price": "3500",
                "img": "http://www.elcorral.com/wp-content/uploads/2013/12/PARA-MENÚ.png",
                "description": "Todos los sabores."
            },
            {
                "id": 16,
                "name": "AGUA CRISTAL",
                "categories": [
                    4
                ],            
                "available": true,
                "bestSeller": false,
                "price": "3500",
                "img": "http://www.elcorral.com/wp-content/uploads/2013/12/AGUA-PARA-PAGINA.png",
                "description": "Con gas y sin gas."
            },
            {
                "id": 17,
                "name": "CERVEZA ARTESANAL",
                "categories": [
                    4
                ],            
                "available": true,
                "bestSeller": true,
                "price": "7500",
                "img": "http://www.elcorral.com/wp-content/uploads/2013/12/cerveza-artesanal.png",
                "description": "A su gusto."
            },
            {
                "id": 18,
                "name": "BROWNIE CON HELADO",
                "categories": [
                    5
                ],            
                "available": true,
                "bestSeller": true,
                "price": "10500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/BROWNIE-CON-HELADO-PARTE-ABAJO.png",
                "description": "Con cobertura de chocolate o arequipe, acompañado de una bola de helado y hojuelas de chocolate."
            },
            {
                "id": 19,
                "name": "MALTEADA MEDIANA",
                "categories": [
                   4,5
                ],            
                "available": true,
                "bestSeller": true,
                "price": "12500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/MALTEADAS.png",
                "description": "Chocolate, Chocolate Light, Frutos del Bosque, Frutos del bosque Light, Macadamia, Café, Café Mocca, Fresa, Vainilla, Piña, Arequipe. Preparadas con helado Súper Premium Von Glacet. Para disfrutar con cuchara."
            },
            {
                "id": 20,
                "name": "MALTEADA PEQUEÑA",
                "categories": [
                   4,5
                ],            
                "available": true,
                "bestSeller": false,
                "price": "7500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/MALTEADAS.png",
                "description": "Chocolate, Chocolate Light, Frutos del Bosque, Frutos del bosque Light, Macadamia, Café, Café Mocca, Fresa, Vainilla, Piña, Arequipe. Preparadas con helado Súper Premium Von Glacet. Para disfrutar con cuchara."
            },
            {
                "id": 21,
                "name": "PIE",
                "categories": [
                   5
                ],            
                "available": true,
                "bestSeller": false,
                "price": "8000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/MALTEADAS.png",
                "description": "Crocante corteza de hojaldre rellena de deliciosa manzana o limón."
            },
            {
                "id": 22,
                "name": "PIE CON HELADO",
                "categories": [
                   5
                ],            
                "available": true,
                "bestSeller": false,
                "price": "12500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/PIE-CON-HELADO_v2-1.png",
                "description": "Crocante pie relleno de manzana o limón. Acompañado de una bola de helado."
            },
            {
                "id": 23,
                "name": "SUNDAE",
                "categories": [
                   5
                ],            
                "available": false,
                "bestSeller": true,
                "price": "6000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/sundae.png",
                "description": "Exclusivo helado del sabor que prefieras, bañado en salsa de caramelo y chocolate. Decorado con nueces en almíbar y una jugosa cereza."
            },
            {
                "id": 24,
                "name": "ENSALADA CORRAL",
                "categories": [
                   6
                ],            
                "available": true,
                "bestSeller": false,
                "price": "31000",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/ensalada-corral.png",
                "description": "Combinación de huevo duro, jamón, pollo a la plancha, queso mozzarella y parmesano, arvejas, pepinillo, maíz tierno, tomate y lechuga crujiente."
            },
            {
                "id": 25,
                "name": "TACO SALAD",
                "categories": [
                   6
                ],            
                "available": true,
                "bestSeller": false,
                "price": "35500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/taco-salad.png",
                "description": "Canastilla de hojaldre, con cebolla recién cortada, lechuga, arvejas, huevo duro, jamón, tomate, queso y pepinillos."
            },
            {
                "id": 26,
                "name": "ENSALADA COBB",
                "categories": [
                   6
                ],            
                "available": true,
                "bestSeller": false,
                "price": "12500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/ensalada-cobb.png",
                "description": "Preparada con crujiente lechuga, jamón, queso mozzarella, aguacate, arvejas, maíz tierno, tomate, pollo grillé, tocineta y huevo duro."
            },
            {
                "id": 27,
                "name": "ENSALADA MEDITERRÁNEA",
                "categories": [
                   6
                ],            
                "available": true,
                "bestSeller": false,
                "price": "8500",
                "img": "http://www.elcorral.com/wp-content/uploads/2012/01/ensalada-mediterranea.png",
                "description": "Con lechuga, jugosos tomates, Lomitos de Pollo, queso parmesano y aguacate fresco."
            }
        ] }
   ]



    public SearchCategory(id: number) {
        var producList = [];

        for (var i = 0; i < this.productos.length; i++) {

            var productRow = this.productos[i];

            for (var j = 0; j < productRow.products.length; j++) {

                var row = productRow.products[j];

                for (var x = 0; x < row.categories.length; x++) {

                    if (row.categories[x] == id) {
                        producList.push(row);
                        break;
                    }
                }

            }
        }

        return producList;
    }


    public AvailableGame(available: boolean) {
        var availableList = [];

        for (var i = 0; i < this.productos.length; i++) {

            var productRow = this.productos[i];

            for (var j = 0; j < productRow.products.length; j++) {

                var row = productRow.products[j];

                if (row.available == available) {
                    availableList.push(row);
                }
            }
        }

        return availableList;
    }

    public SearchAll() {
        return this.productos[0].products;
    }

    public higherPrice() {
var Priceb = [];
       // this.productos.filter(pipi => {
      //      return pipi.price > 30000;
      // })
        
         //this.productos.filter(data => parseFloat(data.price) > 30000);
         for (let m = 0; m < this.productos.length; m++) {
         var mprice =this.productos[m];

           for (let n = 0; n < mprice.products.length; n++) {
               var qprice= mprice.products[n].price;
               
             if (parseFloat(qprice) > 30000){
             
               Priceb.push(mprice.products[n]);
                 }

          }
         }
       return Priceb;
     
    }

    public menorPrice() {
        var Pricec = [];
             
                 for (let m = 0; m < this.productos.length; m++) {
                 var mprice =this.productos[m];
        
                   for (let n = 0; n < mprice.products.length; n++) {
                       var qprice= mprice.products[n].price;
                       
                     if (parseFloat(qprice) < 10000){
                       
                       Pricec.push(mprice.products[n]);
                         }
        
                  }
                 }
               return Pricec;
             
            }
        
}


    








