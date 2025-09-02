const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: { type: [String], required: true },
    steps: { type: [String], required: true },
});

// ✅ Prevent OverwriteModelError
const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
