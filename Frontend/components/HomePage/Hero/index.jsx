import { heroText } from "../../../data";
import SearchForm from "../../InfinitePhotos/SearchForm";
import { Text, Stack, Box } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Stack
      justifyContent="center"
      px={{ base: 6, md: 20 }}
      className="hero-section"
    >
      <Box w={{ md: "80%" }}>
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight={"bold"}
          color="#fff"
        >
          {heroText.title}
        </Text>
        <Text
          color="#fff"
          fontWeight={"light"}
          py={6}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatum explicabo libero obcaecati dolore quaerat molestiae
          debitis, quisquam cum corporis omnis, repudiandaequam porro! Quis
          eligendi officiis itaque assumenda accusantium?
        </Text>
        <SearchForm />
      </Box>
    </Stack>
  );
};

export default Hero;
