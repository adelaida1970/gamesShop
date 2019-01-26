import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  

  categories:any = [
    {
        "id": 1,
        "name": "Acción"
    },
    {
        "id": 2,
        "name": "Aventura"
    },       
    {
        "id": 3,
        "name": "Conducción"
    },
    {
        "id": 4,
        "name": "Deportes"
    },
    {
        "id": 5,
        "name": "Estrategia"
    },
    {
        "id": 6,
        "name": "Lucha"
    }
]

public getCategorias(){
  return this.categories;
}

public buscarCategoria(id){
  return  console.log(this.categories.filter((categoria)=>{return categoria.id == id})[0] || null);
}


}