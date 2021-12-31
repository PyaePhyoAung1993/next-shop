import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";
import Layout from "../components/Layout";
import NextLink from "next/link";
import useStyles from "../utils/style";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import data from "../utils/data";
import Test from "./test";

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item md={6}>
            <h1>Online Ecommerce Vegetable Shooping Website</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid>
          <Grid item md={6}>
            <Image
              src={data.products[0].image}
              width={640}
              height={500}
              layout="responsive"
              alt="img"
            ></Image>
          </Grid>
        </Grid>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card className={classes.root}>
                <NextLink href={`product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>

                  <Button variant="outlined" color="primary">
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <Test></Test> */}
    </Layout>
  );
}
