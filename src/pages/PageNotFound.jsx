import { RedirectButton } from "../components/UI/RedirectButton";

import classes from "./styles/PageNotFound.module.css";

export function PageNotFound() {
  return (
    <section className={classes.container}>
      <h2>Page Not Found</h2>
      <p>We're sorry, the page you've requested could not be found</p>
      <p>Please go back to the homepage.</p>
      <RedirectButton />
    </section>
  );
}
