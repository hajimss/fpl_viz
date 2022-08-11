import { Button, Container, FormLabel, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { inputID } from "../../fpl_api/ManagerSlice";
import { useState } from "react";
import StandardPaper from "../../utils/components/StandardPaper";

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(inputID(searchTerm));
  };
  return (
    <Container sx={{ mb: 2 }}>
      <StandardPaper>
        <form onSubmit={handleSubmit}>
          <div>
            <FormLabel>Type in your ID:</FormLabel>
            <br />
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
            />
          </div>
          <Button sx={{ mt: 1 }} variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </StandardPaper>
    </Container>
  );
};

export default Form;
