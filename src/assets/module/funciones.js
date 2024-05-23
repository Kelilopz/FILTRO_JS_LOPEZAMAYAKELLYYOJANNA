import { LitElement, css, html } from 'lit'


export const getFilm = async(code)=>{
    let url = `https://search.imdbot.workers.dev/?q=${title}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }

    let res = await fetch(url, option)
    let result = await res.json()
    let films = [...result.description]
    console.log(films)
    return(films)
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
    let url = `https://search.imdbot.workers.dev/?tt=${id}`
    let option = {
        method: 'GET',
        Headers: {
            "content-type": "application/json"
          }
    }
    let responder = await fetch(url, option)
    let result = await responder.json()
    console.log(result)
    return(result)
}
