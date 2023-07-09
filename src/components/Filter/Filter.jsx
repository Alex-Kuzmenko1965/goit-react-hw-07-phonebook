import { useDispatch } from 'react-redux';
import { setFilterContact } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch(setFilterContact);

  const handleChange = event => {
    dispatch(setFilterContact(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name   
      <input
      type="text"
      name="search"      
      onChange={handleChange}          
      />      
    </label>
  );
};