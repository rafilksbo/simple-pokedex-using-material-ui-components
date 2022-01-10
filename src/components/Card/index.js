import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ExpandMore from "./style";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function RecipeReviewCard({ name, abilities, image }) {
  <ExpandMore></ExpandMore>;
  return (
    <Card sx={{ width: "345px", height: "auto", marginBottom: "20px" }}>
      <CardHeader title={name} />
      <CardMedia component="img" height="auto" width="100%" image={image} />
      <CardContent>
        {abilities &&
          abilities.map((item) => {
            return (
              <Typography
                variant="h6"
                key={item.ability.name}
                color="textSecondary"
                component="p"
              >
                {item.ability.name}
              </Typography>
            );
          })}
      </CardContent>
    </Card>
  );
}
