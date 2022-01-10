import { TextField, Button, Box } from "@mui/material";

function SearchItem({ searchPokemon, setSearchPokemon, handleFindPokemon }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "350px",
          height: "100px",
        }}
      >
        <TextField
          label="Search new Pokemon"
          variant="outlined"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "auto", marginTop: "10px" }}
          onClick={handleFindPokemon}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

export default SearchItem;
