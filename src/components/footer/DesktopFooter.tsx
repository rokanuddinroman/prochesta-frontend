import { CustomContainer } from "@/ui-kit/container/customContainer";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "#F7F7F7",
  paddingTop: "48px",
  [theme.breakpoints.down("sm")]: {},
}));

const FOOTERLINK = {
  fontSize: "14px",
  marginBottom: "12px",
  textDecoration: "none",
  color: "black",
};

const LogoContainer = styled(Box)(({ theme }) => ({
  height: 45,
  width: 200,
  position: "relative",

  [theme.breakpoints.down("sm")]: {},
}));

const DesktopFooter = () => {
  return (
    <FooterContainer>
      <CustomContainer sx={{ display: "flex", gap: "90px" }}>
        <Box
          style={{
            width: "500px",
          }}
        >
          <LogoContainer>
            <Image
              style={{ objectFit: "contain" }}
              // src="https://i.ibb.co/HDvRKw0/Prochesta.png"
              src="https://i.ibb.co/M6Qcwks/Prochesta-1.png"
              alt=""
              fill={true}
            />
          </LogoContainer>
          <Typography style={{ fontSize: "14px", marginTop: "16px" }}>
            Unlocking Knowledge, Empowering Futures.
          </Typography>
        </Box>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
            width: "100%",
          }}
        >
          <Box>
            <Typography style={{ ...FOOTERLINK, fontWeight: 600 }}>
              Company
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                About us
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Contact us
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Careers
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography style={{ ...FOOTERLINK, fontWeight: 600 }}>
              Resources
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Class Notes
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Books
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Giveways
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography style={{ ...FOOTERLINK, fontWeight: 600 }}>
              Courses
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                HSC 2024
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                Admission DU
              </Link>
            </Typography>
            <Typography style={FOOTERLINK}>
              <Link style={FOOTERLINK} href="">
                CUET Admission Prep
              </Link>
            </Typography>
          </Box>
        </Box>
      </CustomContainer>
      <CustomContainer>
        <Box
          style={{
            marginTop: "48px",
            paddingBlock: "16px",
            borderTop: "1px solid #CDCDCD",
          }}
        >
          <Typography style={{ fontSize: "14px" }}>
            © 2023.Prochesta.com. All rights reserved
          </Typography>
        </Box>
      </CustomContainer>
    </FooterContainer>
  );
};

export default DesktopFooter;
