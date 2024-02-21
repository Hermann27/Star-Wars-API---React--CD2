import React from 'react'

 const Results = ({character}) =>  {

    try{
            const dataResults = character.map((c) =>(
            <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.birth_year }</td>
                <td>{c.height}</td>
                <td>{c.mass}</td>
                <td>{c.species}</td>
                <td>{c.homeworld}</td>
                <td>
                    <ul>
                        {Object.values(c.films).map((film, index) => (
                            <li key={index}>
                                <a href={`https://www.swapi.tech/api/films/${index}`}>{film}</a>
                            </li>
                        ))}
                    </ul>      
                </td>          
            </tr>   
        ))
        return (
            <div>
              <h6>Search result :</h6>
              <table className='table table-success table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Species</th>
                        <th>HomeWorld</th>
                        <th>Films</th>
                    </tr>
                </thead>
                <tbody>
                    {dataResults}
                </tbody>
              </table>
            </div>
          )
    }catch(error){
        console.error('error in displaying the result based on the input search:',error);
    } 
}
export default  Results;