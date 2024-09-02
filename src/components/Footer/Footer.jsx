import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.sponsorRow}></div>
        <div className={css.copyright}>
          &copy; 2024 Lilia Levchenko. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
