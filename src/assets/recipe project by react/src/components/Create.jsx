import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";
import axios from "axios";
import { API_URL } from "../config";   // ✅ backend URL

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const newRecipe = {
      id: nanoid(),
      image: image || "https://placehold.co/300x300", // ✅ fallback image
      title,
      description,
      ingredients: ingredients
        ? ingredients.split(",").map((i) => i.trim())
        : [],
      instructions: instructions
        ? instructions.split(",").map((s) => s.trim())
        : [],
    };

    console.log("📌 Sending Recipe:", newRecipe);

    try {
      // ✅ Save to backend
      await axios.post(`${API_URL}/api/recipes`, newRecipe);

      // ✅ Reload updated recipes into Redux
      dispatch(asyncgetrecipies());

      toast.success("Recipe Created Successfully!");
      navigate("/recipes");
    } catch (error) {
      console.error("❌ Error creating recipe:", error);
      toast.error("Failed to create recipe. Please try again.");
    }
  };

  return (
    <form onSubmit={SubmitHandler} className="w-[70%] m-auto pb-5">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create <br /> New Recipe
      </h1>

      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL (optional)"
      />

      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
        required
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe description..."
        required
      ></textarea>

      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe ingredients (comma-separated)..."
      ></textarea>

      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe instructions (comma-separated)..."
      ></textarea>

      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; →
        </button>
      </div>
    </form>
  );
};

export default Create;
