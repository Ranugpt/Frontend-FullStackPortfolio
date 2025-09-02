// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     recipes: [],
// };

// export const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         addrecipe: (state, action) => {
//             state.recipes = action.payload;
//         },
//     },
// });

// export const { addrecipe } = counterSlice.actions;

// export default counterSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
};

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        addrecipe: (state, action) => {
            state.recipes = action.payload;  // ✅ now correctly updates with backend data
        },
    },
});

export const { addrecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
