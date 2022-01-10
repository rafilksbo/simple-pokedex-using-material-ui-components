import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AppBar from "./style";

export default function PersistentDrawerRight() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={false}>
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
