import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchMovieCast } from '../../services/Api'; 
import {
  CastTitle,
  CastInfo,
  CastList,
  CastItem,
  CastName,
  NoCast,
  Container,
} from './Cast.styled'; 

const Cast = () => {
const { movieId } = useParams();
const [cast, setCast] = useState([]);

useEffect(() => {
const fetchCast = async () => {
  try {
  const { cast } = await fetchMovieCast(movieId);
  setCast(cast);
  } catch (error) {
  console.log(error);
  }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Container>
      <CastTitle>Cast</CastTitle>
    {cast.length ? (
        <CastList>
          {cast.map(actor => (
            <CastItem className="cast-card" key={actor.id}>
      {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg`}
                  alt={`${actor.name} profile`}
                />
              )}
              <CastInfo>
                <CastName>{actor.name}</CastName>
                <p>Character: {actor.character}</p>
              </CastInfo>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <NoCast>
          We don't have any information about the cast.
        </NoCast>
      )}
    </Container>
  );
};

export default Cast;
