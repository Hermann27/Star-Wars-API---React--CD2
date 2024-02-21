import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, Grid} from 'semantic-ui-react';

const FilmList = () =>{
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://www.swapi.tech/api/films/');
        setFilms(response.data.result);
        console.log("data Films-1:",response.data.result);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Films</h1>
            <Grid columns={3}>
              {films.map((film, index) =>{
                  return (
                      <Grid.Column key={index}>
                          <Card>
                              <Card.Content>
                                  <Card.Header>
                                    <strong>Title </strong>
                                    <p>{film.properties.title}</p> 
                                  </Card.Header>
                                <Card.Description>
                                      <strong>Director</strong>
                                      <p>{film.properties.director }</p>
                                      <strong>Producer</strong>
                                      <p>{film.properties.producer}</p>
                                      <strong>Release Date</strong>
                                      <p>{film.properties.release_date}</p>
                                      <strong>Episode</strong>
                                      <p>{film.properties.episode_id}</p>
                                      <strong>Opening Crawl</strong>
                                      <p>{film.properties.opening_crawl}</p>
                                      <strong>Characters</strong>
                                      <p>{film.properties.characters}</p>                                     
                                  </Card.Description>
                              </Card.Content>
                          </Card>
                      </Grid.Column>
                  )
              })};
            </Grid>
    </>
  );
}

export default FilmList;