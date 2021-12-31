import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import useStyles from "../../utils/style";
import Image from "next/image";

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product not fount</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Card>
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={500}
                layout="responsive"
              ></Image>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <List>
              <ListItem>
                <Typography>Category : {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand : {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating : {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Description : {product.description}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Price : ${product.price}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  {product.countInStock > 0 ? "In Stock " : "Unavailable"}
                </Typography>
              </ListItem>
              <div className={classes.margin}>
                <Button
                  className={classes.marginleftt}
                  variant="outlined"
                  color="primarty"
                >
                  <NextLink href="/" passHref>
                    <Link>back to product</Link>
                  </NextLink>
                </Button>

                <Button
                  className={classes.marginleft}
                  variant="contained"
                  color="primary"
                >
                  ADD TO CART
                </Button>
              </div>
            </List>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
