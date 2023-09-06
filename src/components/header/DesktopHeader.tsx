import { CustomContainer } from "@/ui-kit/container/customContainer";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MainContainer = styled(Box)(({ theme }) => ({
  height: 75,
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #f0f0f0",

  [theme.breakpoints.down("sm")]: {},
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: 75,
  gap: "32px",
  [theme.breakpoints.down("sm")]: {},
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  height: 45,
  width: 160,
  position: "relative",

  [theme.breakpoints.down("sm")]: {},
}));

const NavigationItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",

  [theme.breakpoints.down("sm")]: {},
}));

const NAVIGATIONLINKS = [
  {
    title: "Live Classes",
    link: "/live",
  },
  {
    title: "Free Resources",
    link: "/free",
  },
  {
    title: "Students Feedback",
    link: "/feedback",
  },
];

const DesktopHeader = () => {
  const [isHovered, setIsHovered] = useState(-1);
  return (
    <Box>
      <MainContainer>
        <CustomContainer
          sx={{
            height: 75,
          }}
        >
          <HeaderContainer>
            <LogoContainer>
              <Image
                style={{ objectFit: "contain" }}
                // src="https://i.ibb.co/HDvRKw0/Prochesta.png"
                src="https://i.ibb.co/M6Qcwks/Prochesta-1.png"
                alt=""
                fill={true}
              />
            </LogoContainer>
            <NavigationItems>
              <Button
                startIcon={<List size={16} color="#fff" weight="bold" />}
                style={{
                  background: "#08C17C",
                  color: "white",
                  textTransform: "capitalize",
                  height: "33px",
                  paddingInline: "20px",
                  border: "0",
                }}
              >
                Courses
              </Button>
              {NAVIGATIONLINKS.map((item, index) => (
                <Box
                  style={{
                    position: "relative",
                    height: 75,
                  }}
                >
                  <Box
                    style={{
                      ...(isHovered === index && {
                        position: "absolute",
                        content: "' '",
                        height: "4px",
                        width: "100%",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "#08C17C",
                        borderRadius: "4px 4px 0px 0px",
                      }),
                    }}
                  ></Box>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      height: 75,
                      fontSize: "14px",
                    }}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </Box>
              ))}
            </NavigationItems>
            <Button
              style={{
                marginLeft: "auto",
                background: "white",
                color: "black",
                textTransform: "capitalize",
                height: "33px",
                paddingInline: "24px",
                border: "1px solid #eceaea",
              }}
            >
              Sign in
            </Button>
          </HeaderContainer>
        </CustomContainer>
      </MainContainer>
    </Box>
  );
};

export default DesktopHeader;
