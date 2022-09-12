import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('meals/getCategories', async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.data.categories;
});

export const getMeals = createAsyncThunk('meals/getMeals', async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=A');
  return response.data.meals;
});

export const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    categories: [],
    loadingCategoris: 'idle',
    errorCategoris: null,
    meals: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      if (state.loadingCategoris === 'idle') {
        state.loadingCategoris = 'pending';
      }
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      if (state.loadingCategoris === 'pending') {
        state.categories = action.payload;
        state.loadingCategoris = 'idle';
      }
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      if (state.loadingCategoris === 'pending') {
        state.loadingCategoris = 'idle';
        state.errorCategoris = 'error occured';
      }
    });

    builder.addCase(getMeals.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(getMeals.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.meals = action.payload;
        state.loading = 'idle';
      }
    });

    builder.addCase(getMeals.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = 'error occured';
      }
    });
  },
});

export default mealSlice.reducer;
