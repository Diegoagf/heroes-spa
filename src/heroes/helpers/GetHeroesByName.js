import { heroes } from "../data/heroes";


export const GetHeroesByName=  (heroName = '') => {
    heroName = heroName.toLocaleLowerCase().trim();
    
    if(heroName.length===0) return [];

    return heroes.filter(heroe=> heroe.superhero.toLocaleLowerCase().includes(heroName));


}