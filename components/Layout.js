import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "../utils/style";

export default function Layout({ title, descripton, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next amazona` : "Next amazona"}</title>
        {descripton && <meta name="description" content={descripton}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Shopping Cart</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart">
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login">
              <Link>login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved next amazon</Typography>
      </footer>
    </div>
  );
}
