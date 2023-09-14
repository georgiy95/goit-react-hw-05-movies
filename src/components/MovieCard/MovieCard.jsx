import { useLocation } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import {
  MovieCardImg,
  List,
  ListItem,
  InfoHeader,
  InfoWrapper,
  MovieCardContainer,
  MovieInfo,
  MovieInfoText,
  MovieInfoTextBold,
  MovieName,
  StyledLink,
} from './MovieCard.styled'; 

const MovieCard = ({ movie }) => {
const { title, release_date, poster_path, vote_average, overview, genres } =
  movie;
  const location = useLocation(); 
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg';

 const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

 if (!title) {
    return <Loader />;
  }

  return (
    <>
      <MovieCardContainer>
        <MovieCardImg src={posterUrl} alt={`${title} poster`} />
        <MovieInfo>
          <MovieName>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieName>
          <MovieInfoText>User Score: {userScore}</MovieInfoText>
          <MovieInfoText>
            <MovieInfoTextBold>Overview:</MovieInfoTextBold> {overview}
          </MovieInfoText>
         {genres && genres.length > 0 && (
            <MovieInfoText>
              <MovieInfoTextBold>Genres:</MovieInfoTextBold>
              {genres.map(genre => genre.name).join(', ')}
            </MovieInfoText>
          )}
        </MovieInfo>
     </MovieCardContainer>

      <InfoWrapper>
        <InfoHeader>Additional information</InfoHeader>
        <List>
          <ListItem>
            <StyledLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }} 
            >
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </ListItem>
        </List>
      </InfoWrapper>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};


export default MovieCard;






