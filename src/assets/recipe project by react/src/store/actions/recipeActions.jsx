import { toast } from "react-toastify";
import { addrecipe } from "../reducers/recipeSlice";
import axios from "axios";

export const asyncgetrecipies = () => async (dispatch) => {
    try {
        // ✅ Fetch from backend API instead of localStorage
        const res = await axios.get("http://localhost:3000/api/recipes");
        dispatch(addrecipe(res.data));
    } catch (error) {
        console.error("Error fetching recipes:", error);
        toast.error("Failed to load recipes");
    }
};
