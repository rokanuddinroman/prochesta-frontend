"use client";
import { Box } from "@mui/material";
import React from "react";
import DesktopHeader from "./DesktopHeader";
import { styled } from "@mui/system";

const DesktopContainer = styled(Box)(({ theme }) => ({
  display: "block",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  return (
    <Box>
      <DesktopContainer>
        <DesktopHeader />
      </DesktopContainer>
    </Box>
  );
};

export default Header;
