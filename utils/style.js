import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 300,
  },

  navbar: {
    backgroundColor: "#ffffff",
    "& a": {
      color: "#424242",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
  },
  margin: {
    marginTop: 180,
  },
  marginleft: {
    marginLeft: 150,
  },
  marginleftt: {
    marginLeft: 20,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default useStyles;