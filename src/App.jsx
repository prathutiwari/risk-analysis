import { useState } from "react";
import RiskDisplay from "./components/RiskDisplay";
import SearchBar from "./components/SearchBar";
import { fetchRiskData } from './data/riskData';
import { setRiskData } from './features/riskAnalysisSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (address) => {
    setLoading(true);
    const data = fetchRiskData(address);
    dispatch(setRiskData(data));
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-center my-10">Risk Analysis</h1>
      <div className="grid grid-cols-2"></div>
      <SearchBar onSearch={handleSearch} />
      {loading ?
        <p>Loading...</p>
        :
        <>
          <p className="mt-4">Souce Addresses - <b>1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx</b>, <b>Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx</b></p>
          <RiskDisplay />
        </>
      }
    </div>
  );
}

export default App;
