import { useDispatch } from 'react-redux';
import { setAddress } from '../features/riskAnalysisSlice';
import { Input } from './ui/input'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {

     const dispatch = useDispatch();

     const handleSearch = (e) => {
          const address = e.target.value;
          dispatch(setAddress(address));
          if (address.length >= 3) {  // Start searching after 3 characters
               onSearch(address);
          }
     };

     return (
          <Input className='px-3 py-2 border border-black shadow-md' type='text' placeholder='Enter Source Address' onChange={handleSearch} />
     );
};

export default SearchBar;
