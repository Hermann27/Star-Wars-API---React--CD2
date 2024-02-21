import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterDetails({ characterUrl }) {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(characterUrl);
        setCharacter(response.data.result);
        console.log("Character details link response: ", response.data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacter();
  }, [characterUrl]);

  if (!character) {
    return <p>Loading character details...</p>;
  }else{
    console.log('Object :',character);
  }
  return (
    <>
      <h6>Character Details:</h6>
        <div  class="table-responsive">
        <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Birth Year</th>
                            <th>Eye Color</th>
                            <th>Gender</th>
                            <th>Hair Color</th>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Skin Color</th>
                            <th><center>Created</center></th>
                            <th><center>Edited</center></th>
                        </tr>
                    </thead>
                    <tbody>
                                <th>{character.description}</th>
                                <td>
                                    <center>{character.properties.birth_year}</center>
                                </td>
                                <td>
                                    <center>{character.properties.eye_color}</center>
                                </td>
                                <td>
                                    <center>{character.properties.gender}</center>
                                </td>
                                <td>
                                    <center>{character.properties.hair_color}</center>
                                </td>
                                <td>
                                    <center>{character.properties.height}</center>
                                </td>
                                <td>
                                    <center>{character.properties.mass}</center>
                                </td>
                                <td>
                                    <center>{character.properties.skin_color}</center>
                                </td>
                                <td>
                                    <center>{character.properties.created}</center>
                                </td>
                                <td>
                                    <center>{character.properties.edited}</center>
                                </td>  
                    </tbody>
                </table>
        </div>        
                
    </>
  );
}
export default CharacterDetails;
