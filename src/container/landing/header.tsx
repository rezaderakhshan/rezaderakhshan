import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImageContainer from "./image-container";
import ContactUs from "./contact-us";
const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        minHeight: "100svh",
        pt: 8,
      }}
    >
      <Grid2 container sx={{ alignItems: "center", justifyContent: "center" }}>
        <Grid2 xs={12} md={6}>
          <ImageContainer />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              pl: 6,
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: 60, fontWeight: 900, color: "#FD4312" }}
            >
              رضا درخشان
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: 24, fontWeight: 700, color: "#FFFEFEF2" }}
            >
              طراح و توسعه دهنده وب
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "#F2F4F5", fontWeight: 600 }}
            >
              در این قسمت توضیح مختصری درباره خود بنویسید
            </Typography>
            <ContactUs />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Header;
