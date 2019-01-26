import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  productos: any = [{
    
    "products": [
        {
            "id": 1,
            "name": "Duke Nukem 3D Megaton Edition PC Full",
            "categories": [
                1
            ],           
            "available": true,
            "bestSeller": true,
            "price": "35000",
            "img": "https://www.compucalitv.com/wp-content/uploads/2013/03/Duke-Nukem-3D-Megaton-Edition-PC-portada.jpg",
            "description": "Duke Nukem 3D Megaton Edition Juego para PC Full del 2013 Juego de Acción para PC Duke Nukem 3D: Megaton Edition."
        },
        {
            "id": 2,
            "name": "Shadows Awakening PC Full Español",
            "categories": [
                1,2
            ],            
            "available": true,
            "bestSeller": false,
            "price": "40000",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/shadows-awakening-pc-full-espanol.jpg",
            "description": "Es la nueva aventura de la saga de los Reinos Heréticos."
        },
        {
            "id": 3,
            "name": "SCUM Open World Survival PC Game (Early Access)",
            "categories": [
                1
            ],            
            "available": false,
            "bestSeller": false,
            "price": "10500",            
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/scum-pc-portada-compucalitv.jpg",
            "description": "SCUM es un nuevo videojuego para PC del genero de supervivencia en mundo abierto, el juego aunque cuenta con modo single player."
        },
        {
            "id": 4,
            "name": "Total War WARHAMMER II PC Full Español",
            "categories": [
                1,2
            ],            
            "available": true,
            "bestSeller": true,
            "price": "30000",
            "img": "https://4.bp.blogspot.com/-UkhlZWaRhdo/Wc1oc1F5OpI/AAAAAAABb6M/nOb1PkOuWC4F_Ox8or9Oi0ag2Q5djiCfQCLcBGAs/s1600/total-war-warhammer-ii-pc-full-espanol-portada.jpg",
            "description": "Total War WARHAMMER II PC Full Español Un nuevo mundo te espera para ser conquistado por sus nuevos personajes y guerreros."
        },
        {
            "id": 5,
            "name": "Graveyard Keeper PC Full Español",
            "categories": [
                2
            ],         
            "available": true,
            "bestSeller": true,
            "price": "6500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/graveyard-keeper-pc-full-espanol.jpg",
            "description": "Prepárate para explorar mazmorras misteriosas en Graveyard Keeper PC Full Español un juego desarrollado por Lazy Bear Games."
        },
        {
            "id": 6,
            "name": "Flynn and Freckles PC Full Español",
            "categories": [
                2
            ],           
            "available": true,
            "bestSeller": true,
            "price": "8000",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/09/flynn-and-freckles-pc-full-espanol.jpg",
            "description": "Un joven pirata decide embarcarse en una alocada aventura en busca de un legendario tesoro en Flynn and Freckles PC Full Español un juego desarrollado por Rookie Hero Games."
        },
        {
            "id": 7,
            "name": "Claws of Furry PC Full Español",
            "categories": [
                1,2
            ],           
            "available": false,
            "bestSeller": false,
            "price": "17000",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/09/claws-of-furry-pc-full-espanol.jpg",
            "description": "Prepárate para poner a prueba tus habilidades ninja en Claws of Furry PC Full Español un juego que te destina a luchar contra todo el barrio. Incluye, además, 50 niveles de completo caos."
        },
        {
            "id": 8,
            "name": "UNDER NIGHT IN-BIRTH Exe:Late[st] PC Full",
            "categories": [
                1,2
            ],            
            "available": true,
            "bestSeller": false,
            "price": "14500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2016/07/UNDER-NIGHT-IN-BIRTH-Exe-Late-st-PC-Full-portada.jpg",
            "description": "Prepárate para poner a prueba tus habilidades ninja en Claws of Furry PC Full Español un juego que te destina a luchar contra todo el barrio. Incluye, además, 50 niveles de completo caos."
        },
        {
            "id": 9,
            "name": "MotoGP 18 PC Full Español",
            "categories": [
                3
            ],            
            "available": true,
            "bestSeller": false,
            "price": "8500",
            "img": "https://1.bp.blogspot.com/-ioU5n29Ly7U/Wxk3_2dbcLI/AAAAAAABi3Q/dBWvONSkjIM_TQj_1NFAojGhpwSssO-dgCLcBGAs/s1600/motogp-18-pc-full-espanol-portada.jpg",
            "description": "Lucha contra el tiempo y prepárate para iniciar una carrera profesional en el juego conocido como MotoGP 18 PC Full Español un lanzamiento que incluye pistas y motocicletas oficiales."
        },
        {
            "id": 10,
            "name": "WRC 7 FIA World Rally Championship PC Full Español",
            "categories": [
               3
            ],            
            "available": true,
            "bestSeller": false,
            "price": "14500",
            "img": "https://3.bp.blogspot.com/-Me2jI21P8JU/Wce3-757m7I/AAAAAAAAeK8/aDKy6j2q43kddtO1MDf9v0KycCa24LMXQCLcBGAs/s1600/wrc-7-fia-world-rally-championship-2017-PC-portada.jpg",
            "description": "WRC 7 FIA World Rally Championship PC Full Español llega a compucalitv con un espectacular modo multiplayer local en pantalla dividida y cientos de novedades en uno de los mejores simuladores de rally que existe en la actualidad."
        }
        
        ,
        {
            "id": 11,
            "name": "Nascar Heat 3 PC Full",
            "categories": [
                3
            ],            
            "available": true,
            "bestSeller": true,
            "price": "14500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/09/nascar-heat-3-pc-full.jpg",
            "description": "Nascar Heat 3 PC Full es un juego competitivo en un modo de juego sumamente mejorado con el fin de convertir al participante en un corredor profesional."
        },
        {
            "id": 12,
            "name": "NBA 2K19 20th Anniversary Edition PC Full Español",
            "categories": [
                4
            ],            
            "available": true,
            "bestSeller": true,
            "price": "4500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/09/NBA-2K19-20th-AE-PC-Full-compucalitv-portada.jpg",
            "description": "Han pasados 20 años desde que 2K lanzo por primera vez un juego de baloncesto para PC, hoy 20 años después tenemos a nuestro alcance un espectacular simulador de baloncesto tan realista que ni te lo podrás creer, disfruta de NBA 2K19 20th Anniversary Edition PC Full Español."
        },
        {
            "id": 13,
            "name": "Ultimate Fishing Simulator PC Full Español",
            "categories": [
                4
            ],            
            "available": false,
            "bestSeller": false,
            "price": "4500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/ultimate-fishing-simulator-pc-full-espanol.jpg",
            "description": "Los desarrolladores de Ultimate Fishing Simulator PC Full Español plantean brindar una experiencia única a la hora de tener una caña de pescar."
        },
        {
            "id": 14,
            "name": "The Golf Club™ 2019 featuring PGA TOUR PC Full Español",
            "categories": [
                4
            ],            
            "available": true,
            "bestSeller": false,
            "price": "6000",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/The-Golf-Club-2019-featuring-PGA-TOUR-PC-portada.jpg",
            "description": "Nuevo juego de Golf para PC, se trata de The Golf Club 2019 para PC Full con textos en español, el cual cuenta con un un editor de personajes mejorado, sociedades individuales y mejoradas al igual que nuevos modos de juego como Skins y ALT-SHOT"
        },
        {
            "id": 15,
            "name": "AO International Tennis PC Full Español",
            "categories": [
                4
            ],            
            "available": false,
            "bestSeller": false,
            "price": "3500",
            "img": "https://2.bp.blogspot.com/-bUl1AXV5r2U/WvIJKDFzPrI/AAAAAAABhxg/YoIUco5RCMUKxq16acOuUE7XTPp4EsjIwCLcBGAs/s1600/ao-international-tennis-pc-full-portada.jpg",
            "description": "Los mejores jugadores se reúnen en el videojuego de tennis numero 1 en todo el mundo y conocido como AO International Tennis PC Full."
        },
        {
            "id": 16,
            "name": "FIFA 18 PC Full Español",
            "categories": [
                4
            ],            
            "available": true,
            "bestSeller": false,
            "price": "3500",
            "img": "https://4.bp.blogspot.com/-zXsQ_z_s00s/WbrQJPJtEwI/AAAAAAABbfs/iMlJrewZQLofUX6i_BZcw1ZfOReqfhlDACLcBGAs/s1600/fifa-18-pc-full-espanol-portada.jpg",
            "description": "FIFA 18 PC Full Español añade el motor Frostbite y un requerimiento recomendado de Directx 12, así mismo hace que se confunda la línea que separa el mundo virtual del real y consigue darles vida a los jugadores, a los equipos y a las atmósferas que se viven en el mundo del juego."
        },
        {
            "id": 17,
            "name": "Ride 2 Special Edition PC Full Español",
            "categories": [
                4,3
            ],            
            "available": true,
            "bestSeller": true,
            "price": "7500",
            "img": "https://1.bp.blogspot.com/-neMv2kpFVC8/V_e6jwSBcnI/AAAAAAAAcw0/0_9HMPjBmq8caEWzwN11Gp2PuOOPzUZvQCLcB/s1600/ride-2-pc-game-caratula-2016.jpg",
            "description": "En Ride 2 para PC full en español podremos disfrutar con mas de 170 motocicletas, mas de 30 impresionantes circuitos y una fantástica personalización en 5 áreas principales como lo son: Motor, Frenos y suspensión, Ruedas, Transmisión y Estética."
        },
        {
            "id": 18,
            "name": "Sudden Strike 4 PC Full Español",
            "categories": [
                5
            ],            
            "available": true,
            "bestSeller": true,
            "price": "10500",
            "img": "https://2.bp.blogspot.com/-dfa6HMA3nmU/WZDXFh5k9HI/AAAAAAABaoY/ewYVmE8iJwgufRxkcI4tKDNiOGNKOA0_ACLcBGAs/s1600/sudden-strike-4-pc-full-espanol-portada.jpg",
            "description": "Sudden Strike 4 PC Full Español es una de las cuartas entregas desarrollada por Kite Games en una estrategia ambientada en tiempo real."
        },
        {
            "id": 19,
            "name": "Panzer Strategy PC Full",
            "categories": [
               4,5
            ],            
            "available": true,
            "bestSeller": true,
            "price": "12500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/panzer-strategy-pc-full.jpg",
            "description": "La Segunda Guerra Mundial esta mas inmersa que nunca en Panzer Strategy PC Full un juego desarrollado por Starni Games."
        },
        {
            "id": 20,
            "name": "Injustice 2 Legendary Edition PC Full Español",
            "categories": [
               5,6
            ],            
            "available": true,
            "bestSeller": false,
            "price": "7500",
            "img": "https://2.bp.blogspot.com/-cXEjaGHB7E4/WzwhM83WzlI/AAAAAAABjjU/QG8HcChhnwYb7B7dw93xzX5SNCnNC8AdwCLcBGAs/s1600/injustice-2-legendary-edition-pc-full-espanol-portada.jpg",
            "description": "Injustice 2 Legendary Edition PC Full Español es un nuevo juego de lucha que te permitirá disfrutar de los legendarios personajes de DC quienes estarán a tu disposición en un juego desarrollado por NetherRealm Studios y QLOC con los mejores superhéroes."
        },
        {
            "id": 21,
            "name": "Dragon Ball Xenoverse 2 PC Full Español",
            "categories": [
               6
            ],            
            "available": true,
            "bestSeller": false,
            "price": "8000",
            "img": "https://4.bp.blogspot.com/-Df3-1x7HL3M/WBJ9EXMHI9I/AAAAAAAAc2M/azeGU-SujXkPsvrI-_12Hu8q5QwgE-OVQCLcB/s1600/Dragon-Ball-Xenoverse-2-PC-Full-Esp-cover.jpg",
            "description": "Segunda entrega para PC de la saga manganime creada por Bandai Namco titulada: Dragon Ball Xenoverse 2 PC Full Español."
        },
        {
            "id": 22,
            "name": "Naruto to Boruto: Shinobi Striker PC Full Español",
            "categories": [
               6
            ],            
            "available": true,
            "bestSeller": false,
            "price": "12500",
            "img": "https://www.compucalitv.com/wp-content/uploads/2018/08/Naruto-to-Boruto-Shinobi-Striker-PC-portada-compucalitv.jpg",
            "description": "Nueva videojuego de naruto para PC, esta vez podremos disfrutar de Naruto to Boruto: Shinobi Striker PC Full Español en el que contaremos con personajes de tipo: Ataque, Larga distancia, defensa y sanadores."
        },
        {
            "id": 23,
            "name": "Spider Man Shattered Dimensions PC Full Español",
            "categories": [
               6
            ],            
            "available": false,
            "bestSeller": true,
            "price": "6000",
            "img": "https://4.bp.blogspot.com/-bHHhkGjb8o8/T0bPQVMhCSI/AAAAAAAAKD4/4HghPcalcjI/s420/Spider-Man+Shattered+Dimensions.jpg",
            "description": "SpiderMan: Shattered Dimensions es un juego de aventura y de acción Disponible para Descargar el cual se desarrolla en cuatro universos paralelos radicalmente distintos en los que viven cuatro Spiderman dotados de poderes únicos."
        },
        {
            "id": 24,
            "name": "BattleTech Deluxe Edition PC Full",
            "categories": [
               4
            ],            
            "available": true,
            "bestSeller": false,
            "price": "31000",
            "img": "https://1.bp.blogspot.com/-HcrZ4t1SpCE/Wt9dN5QV0vI/AAAAAAAAex4/LoqQPfV1CksvLNNmsme92Djwl6QVReWWgCLcBGAs/s1600/BATTLETECH-PC-Full-compucalitv.jpg",
            "description": "Esta nueva entrega para PC: BattleTech PC Full nos adentra en la historia de una soberana derrocada con violencia producto de una temerosa batalla para recuperar el trono con el apoyo de una improvisada."
        },
        {
            "id": 25,
            "name": "Ash of Gods Redemption PC Full",
            "categories": [
               4
            ],            
            "available": true,
            "bestSeller": false,
            "price": "35500",
            "img": "https://3.bp.blogspot.com/-WY5VKTl3B8U/WrVifRqGLCI/AAAAAAABgjs/JhV7LnQAyAQm7Q9e1vrGMWJ2BwEBAA1IQCLcBGAs/s1600/ash-of-gods-redemption-pc-full-portada.jpg",
            "description": "Ash of Gods Redemption PC Full abarca una gran cantidad de personajes e historia cuyos diálogos son bastante profundos en un relato de fantasía como también de acción."
        },
        {
            "id": 26,
            "name": "Company of Heroes 2 Master Collection PC Full Español",
            "categories": [
               4
            ],            
            "available": true,
            "bestSeller": false,
            "price": "12500",
            "img": "https://2.bp.blogspot.com/-f8aPOlHaUEs/ViMPPcz3y7I/AAAAAAAAZsg/aI1gQe1hNk8/s1600/company-heroes-2-pc-game.jpg",
            "description": "En Company of Heroes 2: The British Forces podremos tener al Ejército Británico el cual incluye un nuevo y diferenciado grupo de opciones."
        },
        {
            "id": 27,
            "name": "Raging Justice PC Full Español",
            "categories": [
               6
            ],            
            "available": true,
            "bestSeller": false,
            "price": "8500",
            "img": "https://3.bp.blogspot.com/-KUp_0vpkeB8/WvIhq3pR4fI/AAAAAAABhyc/wxiGfJvopxsfbdLjma4xkprzJ2EnfHTuQCLcBGAs/s1600/raging-justice-pc-full-espanol-portada.jpg",
            "description": "En primer lugar haz caer toda la brutalidad que puedas sobre criminales despiadados en violentos combates de desplazamiento lateral con el juego Raging Justice PC Full Español en mortíferas calles a puñetazos, patadas y peleas para castigar a esos gamberros.."
        }
    ]
}]

public getGame() {
  return this.productos;
}
public getNameGame() {
  return this.productos.name;
}
public SearchGame(id) {
  return this.productos.filter((juego) => { return juego.id == id })[0] || null;
}
public SearchCategory(id:number){
  return id ? this.productos.filter(juego => {
      return juego.categories.includes(id);
  }) : this.productos;
}

public BestSellerSearch(){
  return this.productos.filter(juego => {
      return juego.bestSeller;
  }) 
}

public buscarExhausted(){
  return this.productos.filter(juego => {
      return !juego.available;
  }) 
}
public buscaravailable(){
  return this.productos.filter(juego => {
      return juego.available;
  }) 
}
public higherPrice(){
  return this.productos.filter(juego => {
      return juego.price > 30000;
  }) 
}
public lowerprice(){
  return this.productos.filter(juego => {
      return juego.price < 10000;
  }) 
}

}

