"use client";
import { Box } from "@mui/material";
import { headerImg } from "../../../public/images";
import Image from "next/image";

const ImageContainer = () => {
  return (
    <Box
      sx={{
        "& img": {
          borderRadius: "50%",
          ml: "auto",
        },
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Image
        src={headerImg}
        alt="Photo of Reza Derakhshan"
        placeholder="blur"
        width={600}
        height={600}
      />
    </Box>
  );
};

export default ImageContainer;
