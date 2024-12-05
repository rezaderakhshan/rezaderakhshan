import { Button } from "@mui/material";
import Link from "next/link";
type ButtonMainProps = {
  children: React.ReactNode;
  variant?: "contained" | "text" | "outlined";
  onClick?: () => void;
  type: "link" | "button";
};
const ButtonMain = ({ children, variant, onClick, type }: ButtonMainProps) => {
  if (type === "link")
    return (
      <Link
        href="tel:+989227960710"
        style={{
          backgroundColor: "#FD4312",
          color: "#fff",
          padding: "10px 28px 10px 28px",
          borderRadius: "8px",
          fontWeight: 700,
        }}
      >
        ارتباط با من
      </Link>
    );
  if (type === "button")
    return (
      <Button
        variant={variant}
        sx={{
          bgcolor: "#FD4312",
          color: "#fff",
          padding: "10px 28px 10px 28px",
          borderRadius: 2,
          fontWeight: 700,
          "&:hover": { bgcolor: "#FD4312" },
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    );
};

export default ButtonMain;
