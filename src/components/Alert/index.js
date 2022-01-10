import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function CustomAlert() {
  return (
    <Stack sx={{ width: "17%", marginTop:'-80px', borderRadius:'12px', marginLeft:'auto', marginRight:"auto" }} spacing={2}>
      <Alert sx={{backgroundColor:'black', color:'white'}} severity="error">Pokemon não encontrado</Alert>
    </Stack>
  );
}
