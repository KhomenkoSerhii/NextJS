
import classes from "./footer.module.scss";

const Footer = () => {

  return (
    <footer className={classes.footer}>
      <div className={classes.leftBlock}>
        <div className={classes.mainBlock}>
          <p style={{ marginBottom: 0 }}>
            Have questions? <a>Talk to us.</a>
          </p>
          <p style={{ marginBottom: 48 }}>
            Want to see our public research? Read our <a>Twitter feed.</a>
          </p>
          <p style={{ marginBottom: 40 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
          <p className={classes.Copyright}>Copyright &copy; 2020 </p>
        </div>

      </div>

      <div className={classes.rightBlock}>
        <div className={classes.googleBlock}>
          <p>In partnership with</p>
          <img src='/Google2.svg' alt="" className={classes.googleImg} />

        </div>
        <div>
          <ul>
            <span>Connect</span>
            <li style={{ paddingTop: 20 }}>Twitter</li>
            <li>Email</li>
            <li>Phone (US)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
