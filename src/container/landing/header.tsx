import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImageHeaderContainer from "./image-header-container";
import ContactUs from "../../components/contact-us";
const Header = () => {
  return (
    <Box
      component={"header"}
      sx={{
        minHeight: "100svh",
        pt: 8,
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid2
          container
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid2 xs={12} md={6}>
            <ImageHeaderContainer />
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
              <Typography variant="h1">رضا درخشان</Typography>
              <Typography variant="h3">طراح و توسعه دهنده وب</Typography>
              <Typography variant="subtitle2">
                در این قسمت توضیح مختصری درباره خود بنویسید
              </Typography>
              <ContactUs />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Header;
