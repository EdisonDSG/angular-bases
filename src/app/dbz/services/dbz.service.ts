import { Injectable } from '@angular/core';
import {v4 as UUID} from 'uuid'
import { Character } from '../interfaces/character.interface';

console.log(UUID());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character:Character[] = [{
    id: UUID(),
    name : 'Krillin',
    power: 1000,
  }, {
    id: UUID(),
    name: 'Goku',
    power: 9500,
  },{
    id: UUID(),
    name: 'Vegueta',
    power: 7500,
  }];

addCharacter(character:Character):void{
  const newCharacter:Character = {id:UUID(), ...character}
  this.character.push(newCharacter);
}

deleteCharacterById(id:string):void{
  this.character = this.character.filter(character => character.id !== id)
}

}
