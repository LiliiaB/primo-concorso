import css from "./HomePage.module.css";
import cane from "../images/cane.jpg";

export default function HomePage() {
  return (
    <div>
      <div className={css.main}>
        <h1 className={css.title}>IL MONDO DEI COLORI DEI BAMBINI</h1>
        <h2>ISPIRAZIONE E CREATIVITA</h2>
        <h3>01-16 GIUGNO 2024</h3>
      </div>
      <div className={css.author}>
        <h3>artista Nadia Kuzina</h3>
        <img src={cane} alt="dog-image" className={css.cane} />
      </div>
    </div>
  );
}
