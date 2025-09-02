    import React, { useEffect } from "react";
    import Nav from "./components/Nav";
    import './index.css';
    import { Route, Routes } from "react-router-dom";
    import axios from "axios";
    import Layout from "./components/Layout";
    import Recipes from "./components/Recipes";
    import Details from "./components/Details";
    import Create from "./components/Create";
    import About from "./components/About";
    import Contact from "./components/Contact";
    import Update from "./components/Update";
    import Login from "./components/Login";
    import { useDispatch } from "react-redux";   // doubt what is react redux
    import { asyncgetrecipies } from "./store/actions/recipeActions";
    import Profile from "./components/Profile";
    import Registration from "./components/Registeration";
    import ForgotPassword from "./components/ForgeotPassword";
    const App = () => {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(asyncgetrecipies());
        }, []);

        return (
            <div className="">
                <Nav />

                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/create-recipe" element={<Create />} />
                    <Route path="/update-recipe/:id" element={<Update />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<Details />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/"/>
                </Routes>
            </div>
        );
    };

    export default App;
