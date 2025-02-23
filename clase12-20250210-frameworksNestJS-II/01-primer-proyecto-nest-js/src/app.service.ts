import { Injectable, NotFoundException } from '@nestjs/common';

export interface HeroesInterface        {
  id:number,
  name:string,
  alias:string,
  team?:string,
  publisher:string,
}

@Injectable()
export class AppService {
  private heroes:HeroesInterface[]

  constructor(){
    this.heroes=[
        {
            id:1,
            name:'Spider-Man',
            // colorDePelo:"negro",
            alias:'Peter Parker',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:2,
            name:'Superman',
            alias:'Clark Kent',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:3,
            name:'Iron Man',
            alias:'Tony Stark',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:4,
            name:'Wonder Woman',
            alias:'Diana Prince',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:5,
            name:'Black Widow',
            alias:'Natasha Romanoff',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:6,
            name:'Batman',
            alias:'Bruce Wayne',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:7,
            name:'Aquaman',
            alias:'Arthur Curry',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:8,
            name:'Captain America',
            alias:'Steve Rogers',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:9,
            name:'Flash',
            alias:'Barry Allen',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:10,
            name:'Black Panther',
            alias:'TChalla',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:11,
            name:'Green Lantern',
            alias:'Hal Jordan',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:12,
            name:'Thor',
            alias:'Thor Odinson',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:13,
            name:'Batwoman',
            alias:'Kate Kane',
            team:'Bat Family',
            publisher:'DC',
        },
        {
            id:14,
            name:'Hulk',
            alias:'Bruce Banner',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:15,
            name:'Zatanna',
            alias:'Zatanna Zatara',
            team:'Justice League Dark',
            publisher:'DC',
        },
        {
            id:16,
            name:'Doctor Strange',
            alias:'Stephen Strange',
            team:'Defenders',
            publisher:'Marvel',
        },
        {
            id:17,
            name:'Green Arrow',
            alias:'Oliver Queen',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:18,
            name:'Scarlet Witch',
            alias:'Wanda Maximoff',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:19,
            name:'Martian Manhunter',
            alias:'Jonn Jonzz',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:20,
            name:'Deadpool',
            alias:'Wade Wilson',
            team:'None',
            publisher:'Marvel',
        },
    ]
  }

  getHello(): string {
    return 'Hello World!';
  }

  getHeroes(): HeroesInterface[]{
    return this.heroes
  }

  getHeroeById(id:number):HeroesInterface | undefined {
    let heroe:HeroesInterface | undefined  =this.heroes.find(h=>h.id==id)
    if(!heroe) throw new NotFoundException(`No se encontraron heroes con id ${id}`)

    return heroe
  }

  createHeroe(heroe){
    let id=1
    if(this.heroes.length>0){
      id=Math.max(...this.heroes.map(d=>d.id))+1
    }

    let newHeroe={
      id, 
      ...heroe,
      // colorDePiel:"verde"
    }

    this.heroes.push(newHeroe)

    return newHeroe
    
  }
}
