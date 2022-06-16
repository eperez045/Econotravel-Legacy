
import React, { useState } from "react";
import { Button, Container, Chip } from "@mui/material";
import { Grid, Box } from "@mui/material";

const BarraSearch = (props) => {
  const [filterValue, setFilterValue] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = props.Data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div>
      <div classname="searchBox">
      <input style={{backgroundColor: '#b5bea7', border: "2px solid #2e5137", borderRadius: '50px', minWidth: '40rem', height: "2.5rem", paddingLeft: "1%"}}
        type="text"
        placeholder={props.Placeholder}
        onChange={handleSearch}
      />

      </div>
      <div>
        {filterValue.length !== 0 &&
          filterValue.map((e) => {
            return (
                <Grid container style={{ backgroundColor: "#fbf1e3", }} >
                    <Container style={{ marginTop: "6em"}} >
                      <img src={e.img} width="249" alt="bike"></img>
                      <Box style={{ marginTop: "0.5em" }}>
                        <Chip
                          label={e.tag1}
                          variant="outlined"
                          style={{ width: "80px", height: "25px" }}
                        />
                        <Chip
                          label={e.tag2}
                          variant="outlined"
                          style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
                        />
                        <Chip
                          label={e.tag3}
                          variant="outlined"
                          style={{ width: "80px", height: "25px", marginLeft: "0.5em" }}
                        />
                        <h1
                          style={{ fontSize: "1.2em", color: "#2e5137", marginTop: "1em" }}
                        >
                          {e.title}
                        </h1>
                        <h2
                          style={{ fontSize: "1em", fontWeight: "200", color: "#2e5137" }}
                        >
                          {e.price}€/persona
                        </h2>
                      </Box>
                      <Button
                        style={{
                          backgroundColor: "#2e5137",
                          borderRadius: "50px",
                          color: "white",
                          marginLeft: "15em",
                          marginTop: "-1em",
                          textTransform: "none",
                        }}
                        size="small"
                      >
                        Reserva ahora
                      </Button>
                    </Container>
                  
                </Grid>
              );
          })}
      </div>
    </div>
  );
};
export default BarraSearch;
