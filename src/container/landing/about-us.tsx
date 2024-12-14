import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import ImageAboutContainer from "./image-about-container";
import ButtonContainer from "./button-container";

const AboutUs = () => {
  return (
    <Container maxWidth={"lg"} sx={{ mt: 3 }}>
      <Grid2 container sx={{ alignItems: "center", justifyContent: "center" }}>
        <Grid2 xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 6 }}>
            درباره من
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            رضا درخشان متولد سال{" "}
            <Box
              component={"span"}
              sx={{ fontFamily: "dana-fa", fontWeight: 500, fontSize: 16 }}
            >
              79
            </Box>{" "}
            در تبریز و دانش آموخته نرم افزار و طراحی وب هستم. اوایل سال
            <Box
              component={"span"}
              sx={{ fontFamily: "dana-fa", fontWeight: 500, fontSize: 16 }}
            >
              1402
            </Box>
            بود که من (رضا درخشان) تصمیم گرفتم فعالیت در حوزه وب را شروع کنم. با
            شرکت‌های مختلف وارد همکاری شدم تا اینکه رشد کردم و توانستم پروژه های
            بزرگ و ماندگاری را ایجاد کنم. طراحی و توسعه انواع وب سایت های شرکتی
            ، شخصی و فروشگاهی از جمله کارهایی هست که تا به امروز انجام دادم.
          </Typography>
          <ButtonContainer />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <ImageAboutContainer />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AboutUs;
