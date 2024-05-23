import { LitElement, css, html } from 'lit'


export const getFilm = async(code)=>{
    try{
    let options = {
        method: 'GET',
            Headers: {
                "content-type": "application/json"
            }
    }
    let url = `https://search.imdbot.workers.dev/?q=${code}`
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
    } catch (error) {
      console.error('Ocurrió un error al obtener las peliculas:', error);
    }
  }

export const getFilmByYear = async(code)=>{
    try{
    let options = {
    method: 'GET',
    Headers: {
    "content-type": "application/json"
    }
    }

    let url = `https://search.imdbot.workers.dev/?q=${code}`
    let res = await fetch(url, options);
    let data = await res.json();
    let FilmNwe = data['#YEAR']
    FilmNwe.sort((a,b)=>
    b['#YEAR']- a['#YEAR']
    )
    return FilmNwe
    } catch (error) {
    console.error('Ocurrió un error al obtener las peliculas:', error);}
}


export const getFilmByActor = async(code)=>{
    try{
    let options = {
    method: 'GET',
    Headers: {
    "content-type": "application/json"
    }
    }

    let url = `https://search.imdbot.workers.dev/?q=${code}`
    let res = await fetch(url, options);
    let data = await res.json();
    let FilmNew = data['#ACTORS']
    return FilmNew
    } catch (error) {
    console.error('Ocurrió un error al obtener las peliculas:', error);}
}

export const getFilmByIMDb = async(code)=>{
    try{
    let options = {
    method: 'GET',
    Headers: {
    "content-type": "application/json"
    }
    }

    let url = `https://search.imdbot.workers.dev/?tt=${code}`
    let res = await fetch(url, options);
    let data = await res.json();
    let FilmNew = data['#RANK']
    return FilmNew
    } catch (error) {
    console.error('Ocurrió un error al obtener las peliculas:', error);}
}
