import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import { menuList } from "../data/data";

const Menu = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {menuList.map((menu) => (
            <Card sx={{ maxWidth: "390px", m: 5 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                  <Typography sx={{ mt: 2, fontWeight:"bold" }}>₹ {menu.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default Menu;
