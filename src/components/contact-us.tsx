import { Box } from "@mui/material";
import Link from "next/link";
import { LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";
import ButtonMain from "./button-main";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        "& a": {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& a:first-child": {
          bgcolor: "#FD4312",
          color: "#fff",
          padding: "10px 28px 10px 28px",
          borderRadius: 2,
          fontWeight: 700,
        },
        "& a:not(:first-child)": {
          transform: "scale(1)",
          transition: "all 0.3s",
          opacity: 1,
          "&:hover": {
            transform: "scale(0.9)",
            opacity: "0.8",
          },
        },
        "& a:not(:first-child) svg": {
          fill: "#FD4312",
          width: 26,
          height: 26,
        },
      }}
    >
      <ButtonMain type="link">ارتباط با من</ButtonMain>

      <Link
        href={
          "https://www.linkedin.com/in/reza-derakhshan-22a58b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
        target="_blank"
      >
        <LinkedIn />
      </Link>
      <Link href="https://t.me/RezaDerakhshanG" target="_blank">
        <Telegram />
      </Link>
      <Link href="https://wa.me/+989227960710" target="_blank">
        <WhatsApp />
      </Link>
    </Box>
  );
};

export default ContactUs;
