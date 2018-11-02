import { Injectable } from '@angular/core';
import {Pet} from '../interfaces/pet'
import {HttpClient} from '@angular/common/http'



@Injectable()

export class PetsService {

  pets: Pet[];
  constructor(private http: HttpClient) {
    let pet1: Pet = {
      id: 1,
      nombre: 'Coby',
      tipo: 'perro'
    };
    let pet2: Pet = {
      id: 2,
      nombre: 'Toby',
      tipo: 'conejo'
    };
    let pet3: Pet = {
      id: 3,
      nombre: 'Trosqui',
      tipo: 'perro'
    };
    let pet4: Pet = {
      id: 4,
      nombre: 'Alvin',
      tipo: 'gato'
    };
    this.pets = [pet1, pet2, pet3, pet4];
  }

  getPets() {
    return this.pets;
  }
  getPersonajes(){
    return this.http.get('https://swapi.co/api/people').subscribe((data)=>{
      console.log(data)
    })
  }
}
    

