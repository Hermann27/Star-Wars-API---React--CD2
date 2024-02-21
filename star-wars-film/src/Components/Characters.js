import React, { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react';
import axios from 'axios';
import CharacterDetails from './CharacterDetails';

function Characters({ characterUrl }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(characterUrl);
        setCharacter(response.data.results);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [characterUrl]);

  if (!character) {
    return <p>Loading character...</p>;
  }

  return (
    <>
      <h1>Characters</h1>
      <Grid columns={3}>
        {character.map((characters,i) =>{
            return (
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                            <p> <strong>Name : </strong>  {characters.name}</p>
                            </Card.Header>
                            <Card.Description>
                                 <p><strong>Url :</strong>
                                 <a href={characters.url}>{characters.url}</a></p>  
                               <CharacterDetails characterUrl={characters.url}/>                              
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })}
      </Grid>
    </>
  );
}

export default Characters;
