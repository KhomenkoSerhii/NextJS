import Link from "next/link";


import classes from './header.module.scss'

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.mainBlock}>
          <div className={classes.section}>

            <div key="About">
              <Link href="/About">
                <h5>About</h5>
              </Link>
            </div>

            <div key="sign-in">
              <Link
                href="/SignIn"
              >
                <h5>Sign In</h5>
              </Link>
            </div>

            <div key="sign-up">
              <h5>Sign up</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
