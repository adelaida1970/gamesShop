import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  

  categories:any = [{
    "categories": [
        {
            "id": 1,
            "name": "A la Parrilla"
        },
        {
            "id": 2,
            "name": "A la Plancha"
        },       
        {
            "id": 3,
            "name": "Hot Dogs"
        },
        {
            "id": 4,
            "name": "Bebidas"
        },
        {
            "id": 5,
            "name": "Postres"
        },
        {
            "id": 6,
            "name": "Ensaladas"
        }
    ] }
    
]

public getCategorias(){
  return this.categories;
}

public buscarCategoria(id){
  return  console.log(this.categories.filter((categoria)=>{return categoria.id == id})[0] || null);
}


}