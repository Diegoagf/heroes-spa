import { heroes } from "../data/heroes";

export const GetHeroesByPublisher =(publisher)=>{
    const ValidPublishers = ['DC Comics','Marvel Comics'];
    if(!ValidPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher===publisher);
}