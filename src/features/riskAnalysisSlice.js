
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  riskData: null,
};

const riskAnalysisSlice = createSlice({
  name: 'riskAnalysis',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setRiskData: (state, action) => {
      state.riskData = action.payload;
    },
  },
});

export const { setAddress, setRiskData } = riskAnalysisSlice.actions;

export default riskAnalysisSlice.reducer;
