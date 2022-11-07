import React from "react";
import { FormControl, Input, Button, Stack } from "@chakra-ui/react";

const SearchForm = () => {
  return (
    <FormControl  maxW="40rem" >
      <Stack direction="row">
        <Input
          bg="#ffffff14"
          color="#ffffff"
          border="none"
          isRequired
          placeholder="Search Photos"
          mb=".5rem"
        />

        <Button type="submit" className="!text-[#333]">
          Search
        </Button>
      </Stack>
    </FormControl>
  );
};

export default SearchForm;
