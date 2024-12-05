"use client";
import ButtonMain from "@/components/button-main";

const ButtonContainer = () => {
  const handleDownload = async () => {
    const response = await fetch("/api/download");
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "RezaDerakhshan_CV.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return (
    <ButtonMain variant="contained" type="button" onClick={handleDownload}>
      دانلود رزومه
    </ButtonMain>
  );
};

export default ButtonContainer;
