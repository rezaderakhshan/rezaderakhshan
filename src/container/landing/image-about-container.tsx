import Image from "next/image";
import { Box } from "@mui/material";
const ImageAboutContainer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{
          position: "relative",
          width: 1,
          maxWidth: 415,
          minWidth: 280,
          height: 415,
          "& img": {
            borderRadius: 3,
            transform: "scale(1)",
            transition: "transform .3s",
            objectFit: "cover",
            objectPosition: "top",
          },
          "& img:hover": { transform: "scale(1.02)" },
        }}
      >
        <Box
          component={"div"}
          sx={{
            position: "absolute",
            border: "4px solid rgb(253 67 18)",
            width: 1,
            height: 1,
            borderRadius: 3,
            left: "20px",
            top: "-20px",
          }}
        />
        <Image
          src="/images/about-me.jpeg"
          alt="Photo of Reza Derakhshan"
          fill
        />
      </Box>
    </Box>
  );
};

export default ImageAboutContainer;
