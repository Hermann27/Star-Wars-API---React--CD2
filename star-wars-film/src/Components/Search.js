import { Fragment, useState } from 'react'
import axios from 'axios';
import Results from './Results';


const Search = () => {

    const[results, setResults] = useState([]);
    const[searchQuery,setSearchQuery] = useState("");
    const[loading,setLoading] = useState(false);
    const[response,setResponse] = useState(true);

    const searchHandler = async (e) =>{
        e.preventDefault();
        setResults([]);
        if(!searchQuery){
            return;
        }
        setResponse(true);
        setLoading(true);
        //------------------------------------------------------------------------------- Implementation of the API  ------------------------
        try{

            const response = await axios.get(`https://swapi.dev/api/people/?search=${searchQuery}`);
            const characters = response.data.results;
            await setAttributes(characters);

        }catch(error){
            console.error("Error in searching:",error);
        }
    }

    const setAttributes = async (characters) =>{
        try{
            const promise = characters.map(async (character) =>{
                character.homeworld = await getHomeWorld(character.homeworld);
                character.species = await getSpecies(character.species);
                character.films = await getFilms(character.films);
                return character;
            });
            const updatedCharacters = await Promise.all(promise);
            setResults(updatedCharacters);
            setLoading(false);

            if (updatedCharacters.length ===0){
                setResponse(false);
            }else{
                setResponse(true);
            }
        }catch(error){
            console.error('error in getting attributes:',error);
        }
    }

    const getHomeWorld = async (homeWorld) =>{
        try{
            const response = await axios.get(homeWorld);
            return response.data.name;

        }catch(error){
            console.error('error getting the homeWorld value:',error);
        }
    }

    const getSpecies = async (species) =>{
        try{
            const response = await axios.get(species);
            return response.data.name || 'Human';
        }catch(error){
            console.error('error getting the species:',error);
        }
    }

    const getFilms = async (films) =>{
        try{
            const myfilms ={};
            let promises=[];
            if(films){
                for(let film of films){
                    promises.push(
                        await axios.get(film)
                        .then((response) =>{
                            myfilms[film] = response.data.title; // Add title to the dictionary with film URL as key
                        })
                    )
                }             
            }
            return myfilms;
        }catch(error){
            console.error('error in getting the films:',error);
        }
    }
  return (
    <Fragment>   
        <br/> 
            <form onSubmit={searchHandler}>
                <div className='input-group mb-3'>
                    <input 
                    className='from-control'
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder='Search Character..' 
                    type='text'>
                    </input>
                    
                    <button className='btn btn-primary'>Search</button>
                </div>
            </form>
            {!response && <p>No results to display for this search</p> }
            {loading && <p>Searching...</p>}
            {results.length > 0 && <Results character={results}/>}        
    </Fragment>
  )
}
export default  Search;