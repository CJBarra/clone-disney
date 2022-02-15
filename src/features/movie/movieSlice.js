import { createSlice } from "@reduxjs/toolkit";


// init state
const initialState = {
  trending: null,
  recommend: null,
  newToDisney: null,
  original: null,
}

// movie reducer state
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.trending = action.payload.trending;
      state.recommend = action.payload.recommend;
      state.newToDisney = action.payload.newToDisney;
      state.original = action.payload.original;
    },
  },
})


export const { setMovie } = movieSlice.actions;

export const selectTrending = state => state.movie.trending;
export const selectRecommend = state => state.movie.recommend;
export const selectNewToDisney = state => state.movie.newToDisney;
export const selectOriginal = state => state.movie.original;

export default movieSlice.reducer;