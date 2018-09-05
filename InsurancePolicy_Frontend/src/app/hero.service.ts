import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


 
@Injectable({ providedIn: 'root' })
export class HeroService {
 
  constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
 
  getHero(Aadhaar: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${Aadhaar}`);
    return of(HEROES.find(hero => hero.Aadhaar === Aadhaar));
  }

  QuerybyAadhaar(Aadhaar: number){
    return of (HEROES.find(hero => hero.Aadhaar === Aadhaar));
  }
  addHero(aadhar,name,age,Active,instype,inscomp,salary,suminsured,policyprice,New){
}
QuerybyName(name:string){
  return of (HEROES.find(hero => hero.name === name));
}
QuerybyCompany(inscomp: string){
  return of (HEROES.find(hero => hero.InsuranceCompany === inscomp));
}

createPolicy(aadhar,name,age,Active,instype,inscomp,salary,suminsured,policyprice,New)
{
   //heroes: Hero[];
  let Hero1 = new Hero();
    Hero1.Aadhaar = aadhar;
    Hero1.name= name;
    Hero1.Age = age;
    Hero1.PolicyStatus = 'Active';
    Hero1.InsuranceType = instype;
    Hero1.InsuranceCompany = inscomp;
    Hero1.Salary = salary;
    Hero1.SumInsured = suminsured;
    Hero1.PolicyPrice = policyprice;
    Hero1.Status = 'new';
    return Hero1;
}
}
