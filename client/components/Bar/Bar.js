import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleLink: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Hind",
    fontWeight: 700,
    fontSize: 24,
    color: theme.palette.secondary.main,
    //background: `-webkit-linear-gradient(135deg, #ff921e, #ff921e 85%, #2B9AEA)`,
    //'-webkit-background-clip': 'text',
    //'-webkit-text-fill-color': 'transparent',
  },
  login: {
    fontSize: 16,
    fontWeight: 600,
  },
}));

const Bar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className={classes.titleLink}
          >
            <Typography variant="h2" component="h2" className={classes.title}>
              {"{ Kod Koda }"}
            </Typography>
          </Link>
          {!props.authPage ? (
            props.auth ? (
              <Button color="inherit" onClick={() => props.logOut()}>
                <Typography variant="h4" className={classes.login}>
                  {" "}
                  Çıkış Yap{" "}
                </Typography>
              </Button>
            ) : (
              <>
                <Link href="/auth/standard" className={classes.menuButton}>
                  <Typography variant="h4" className={classes.login}>
                    {" "}
                    Giriş Yap{" "}
                  </Typography>
                </Link>
                <Link href="/auth/standard" className={classes.menuButton}>
                  <Typography variant="h4" className={classes.login}>
                    {" "}
                    Üye Ol{" "}
                  </Typography>
                </Link>
              </>
            )
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
