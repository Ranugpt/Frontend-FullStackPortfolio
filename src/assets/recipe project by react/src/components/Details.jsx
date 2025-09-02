import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  // ✅ Delete handler
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      await axios.delete(`/api/recipes/${id}`);
      alert("Recipe deleted successfully!");
      navigate("/Recipes"); // redirect after delete
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to delete recipe.");
    }
  };

  if (!recipe) {
    return <p className="text-center text-xl mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* TITLE */}
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        {recipe.title}
      </h1>

      {/* IMAGE */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
        />
      )}

      {/* DESCRIPTION */}
      <p className="text-lg text-zinc-700 mb-6">{recipe.description}</p>

      {/* INGREDIENTS */}
      <h2 className="text-3xl border-b border-green-600 text-green-600 mb-2">
        Ingredients
      </h2>
      <ul className="text-zinc-600 list-disc pl-6 mb-6">
        {Array.isArray(recipe.ingredients)
          ? recipe.ingredients.map((d, i) => (
              <li className="text-sm mb-2" key={i}>
                {d}
              </li>
            ))
          : (recipe.ingredients || "")
              .split(",")
              .map((d, i) =>
                d.trim() ? (
                  <li className="text-sm mb-2" key={i}>
                    {d.trim()}
                  </li>
                ) : null
              )}
      </ul>

      {/* INSTRUCTIONS */}
      <h2 className="text-3xl border-b border-green-600 text-green-600 mb-2">
        Instructions
      </h2>
      <ol className="text-zinc-600 list-decimal pl-6 mb-6">
        {Array.isArray(recipe.instructions)
          ? recipe.instructions.map((d, i) => (
              <li className="text-sm mb-2" key={i}>
                {d}
              </li>
            ))
          : (recipe.instructions || "")
              .split(".")
              .map((d, i) =>
                d.trim() ? (
                  <li className="text-sm mb-2" key={i}>
                    {d.trim()}
                  </li>
                ) : null
              )}
      </ol>

      {/* ✅ ACTION BUTTONS */}
      <div className="flex gap-4 mt-6">
        <Link
          to={`/update-recipe/${id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          ✏️ Update
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default Details;
