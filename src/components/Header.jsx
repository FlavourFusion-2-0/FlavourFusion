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
        <button className={classes.button}>Button 1</button>
        <button className={classes.button}>Button 2</button>
        <button className={classes.button}>Button 3</button>
        <button className={classes.button}>Button 4</button>
      </nav>
    </header>
  );
}