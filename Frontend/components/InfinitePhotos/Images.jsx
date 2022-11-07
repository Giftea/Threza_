import React from "react";
import { nanoid } from "nanoid";
import {
  Image,
  Flex,
  Box,
  IconButton,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import { DownloadIcon } from "@chakra-ui/icons";

const Images = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1500: 3,
    800: 2,
  };

  const columnClassName = "my-masonry-grid_column";

  const gutterSpace = "20px";

  const masonryStyles = {
    ml: `-${gutterSpace}`,
  };

  const selector = `& .${columnClassName}`;

  masonryStyles[selector] = {
    pl: gutterSpace,
    backgroundClip: "padding-box",
  };

  return (
    <Flex
      columnClassName={columnClassName}
      as={Masonry}
      breakpointCols={breakpointColumnsObj}
      sx={masonryStyles}
      mt="2rem"
    >
      {images.map((image) => (
        <CustomImage key={nanoid()} mb={gutterSpace} src={image} />
      ))}
    </Flex>
  );
};

export default Images;

const CustomImage = ({ key, mb, src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box key={key} onClick={onOpen} className="custom-image">
        <Image w="100%" mb={mb} src={src} alt="" />
        <div class="custom-image-overlay"></div>
        <Stack direction={"row"} className="custom-image-more">
          <IconButton border={"none"} icon={<DownloadIcon />} />{" "}
          <IconButton border={"none"} icon={<>♡</>} />
        </Stack>
      </Box>
      <CustomImageModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

function CustomImageModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='6xl' >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            dicta!
          </ModalBody>


        </ModalContent>
      </Modal>
    </>
  );
}
