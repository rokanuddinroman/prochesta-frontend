"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { CustomContainer } from "@/ui-kit/container/customContainer";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const PosterContainer = styled(Box)(({ theme }) => ({
  height: 400,
  width: "100%",
  background: "#08C17C",
  borderRadius: "8px",
  position: "relative",

  [theme.breakpoints.down("sm")]: {},
}));
export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Header />
        <CustomContainer>
          <PosterContainer sx={{ marginBlock: "16px" }}>
            <Image
              style={{ objectFit: "cover", borderRadius: 8 }}
              src="https://wiingy.com/blog/wp-content/uploads/2023/04/Python-Tutorial-Featured-Images-10-1024x576.jpg"
              alt=""
              fill={true}
            />
          </PosterContainer>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography>Explore Courses</Typography>
          </Box>
        </CustomContainer>
      </Box>
      <Footer />
    </Box>
  );
}
