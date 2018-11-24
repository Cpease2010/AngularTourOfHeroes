import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServie: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    console.log('helo')
    this.messageServie.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
