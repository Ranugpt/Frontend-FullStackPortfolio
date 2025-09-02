import { Link } from "react-router-dom";
import defaultRecipe from "../assets/default-recipe.jpg";

const Card = ({ recipe }) => {
    if (!recipe) return null; // ✅ guard if recipe is missing

    const recipeId = recipe.id || recipe._id;

    // ✅ safe image check (avoid .trim() crash)
    const imageUrl =
        typeof recipe.image === "string" && recipe.image.trim() !== ""
            ? recipe.image
            : defaultRecipe;

    return (
        <Link
            to={recipeId ? `/recipes/${recipeId}` : "#"}
            className="mr-[3.3%] mb-[3%] text-center w-[30%] p-5 
                       shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] 
                       hover:scale-[1.02] duration-200"
        >
            {/* <img
                className="w-[80%] mx-auto rounded-lg object-cover"
                src={imageUrl}
                alt={recipe.title || "Recipe image"}
                onError={(e) => {
                    if (e.target.src !== defaultRecipe) {
                        e.target.src = defaultRecipe; // ✅ set only once
                    }
                }}
            /> */}

           <img 
  src={recipe.image} 
  alt="test" 
  width="400" 
  height="300" 
/>



            <h1 className="mt-5 mb-3 text-xl font-semibold">
                {recipe.title || "Untitled Recipe"}
            </h1>

            <p>
                {recipe.description
                    ? recipe.description.slice(0, 100) + "..."
                    : "No description available"}
            </p>

            <div className="flex justify-between text-zinc-400 mt-5">
                <p className="text-center">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </p>
            </div>

            {!recipeId && (
                <p className="text-red-500 text-sm mt-2">
                    ⚠️ No ID available for this recipe
                </p>
            )}
        </Link>
    );
};

export default Card;
