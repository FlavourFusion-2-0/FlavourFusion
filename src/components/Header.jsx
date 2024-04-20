import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import classes from "./styles/Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link to="/recipes" className={classes.logo}>
        <img src={logo} alt="" />
      </Link>
      <nav className={classes.nav}>
      <a href="https://javascriptbear.github.io/todo_react_app/" className={classes.link}>
        <button className={classes.button}>Upload Your Recipe!</button>
      </a>  

        <a href="https://jebasuthan.github.io/React-form-registration/" className={classes.link}>
        <button className={classes.button}>Login </button>
        </a>
        <button className={classes.button}>About Us</button>
        <button className={classes.button}>Contact Us</button>
        <a href="Login-Page-React-main" className={classes.link}>
        <button className={classes.button}>Login</button>
        </a>
        <button className={classes.button}>About Us</button>
        <button className={classes.button}>Contacts</button>

      </nav>
    </header>
  );
}
