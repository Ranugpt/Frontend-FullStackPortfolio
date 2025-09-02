const express = require('express');
const mongoose = require('mongoose');
require('./DB/connection'); 
const Recipe = require("./model/recipeModel.js");  // ✅ Only use this model
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ======================== ROUTES ========================

// READ all
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE
app.post("/api/recipes", async (req, res) => {
  try {
    const { title, ingredients, description, image } = req.body;
    const newRecipe = new Recipe({ title, ingredients, description, image });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
app.put("/api/recipes/:id", async (req, res) => {
  try {
    const { title, ingredients, description, image } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, description, image },
      { new: true }
    );
    if (!updatedRecipe) return res.status(404).json({ message: "Not found" });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
app.delete("/api/recipes/:id", async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});
