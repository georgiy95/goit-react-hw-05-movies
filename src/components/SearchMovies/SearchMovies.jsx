import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchMovies.styled'; 


const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault(); 
  const query = e.target.elements.query.value; 

   if (!query) {
      alert('Please enter something');
      return;
    }

    onSubmit(query); 
    e.target.reset(); 
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Please enter your request" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
