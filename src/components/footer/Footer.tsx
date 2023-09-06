import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import DesktopFooter from "./DesktopFooter";

const DesktopContainer = styled(Box)(({ theme }) => ({
  display: "block",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Footer = () => {
  return (
    <Box>
      <DesktopContainer>
        <DesktopFooter />
      </DesktopContainer>
    </Box>
  );
};

export default Footer;
