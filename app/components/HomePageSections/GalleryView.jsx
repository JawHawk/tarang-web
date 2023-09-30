"use client";
import {
  Button,
  Center,
  Container,
  Group,
  Image,
  ScrollArea,
  Text,
  Box,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const galleryImages = [
  "https://res.cloudinary.com/prajjwalcdn/image/upload/v1695845772/GalleryImage1_ugrcm8.webp",
  "https://res.cloudinary.com/prajjwalcdn/image/upload/v1695845771/GalleryImage2_g27kpb.webp",
  "https://res.cloudinary.com/prajjwalcdn/image/upload/v1695845772/GalleryImage3_wurhne.webp",
  "https://res.cloudinary.com/prajjwalcdn/image/upload/v1695845771/GalleryImage4_gferzi.webp",
  "https://res.cloudinary.com/prajjwalcdn/image/upload/v1695845772/GalleryImage5_gq2if8.webp",
];

const ImageAccordion = ({ isMobileView }) => {
  const initialWidth = "13.75rem";
  const hoverWidth = "20.75rem";
  return (
    <Group
      mt="4"
      gap={"0"}
      wrap={"no"}
      w={isMobileView ? "fit-content" : "100%"}
      justify="center"
    >
      {galleryImages.map((Img, index) => (
        <Box
          key={index}
          style={{
            width: initialWidth,
            height: "28.125rem",
            overflow: "hidden",
            transition: "width 0.5s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = hoverWidth;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = initialWidth;
          }}
        >
          <Image
            alt="Images"
            w={"100%"}
            h={"100%"}
            src={Img}
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "filter 0.6s",
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)";
            }}
          />
        </Box>
      ))}
    </Group>
  );
};

function GalleryView() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container maw="100%">
      <Box p={isMobileView ? "3rem" : "4rem"}>
        <Group justify="center" align="center">
          <Text
            fz={isMobileView ? "2rem" : "3rem"}
            bg={"#D0EB4C"}
            px={"2.5rem"}
            py={"0.75rem"}
            style={{
              borderRadius: "4rem",
            }}
          >
            Gallery
          </Text>
        </Group>
      </Box>
      <ScrollArea mr={isMobileView ? "-20px" : ""}>
        <ImageAccordion isMobileView={isMobileView} />
      </ScrollArea>
      <Center p={"4rem"}>
        <Button
          rightSection={<IconArrowRight />}
          size="lg"
          style={{ border: "2px solid black" }}
          bg="white"
          c={"black"}
          radius={0}
        >
          View more
        </Button>
      </Center>
    </Container>
  );
}

export default GalleryView;
