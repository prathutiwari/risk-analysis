
import { configureStore } from '@reduxjs/toolkit';
import riskAnalysisReducer from '../features/riskAnalysisSlice';

export const store = configureStore({
  reducer: {
    riskAnalysis: riskAnalysisReducer,
  },
});
