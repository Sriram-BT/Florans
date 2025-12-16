import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Import images
import cleaningHelp from "../Assets/cleaningHelp.jpg";
import handsTogether from "../Assets/HandsTogetherImage.png";
import specialHelp from "../Assets/specialHelp.jpg";

export default function LatestUpdates() {
  const images = [cleaningHelp, handsTogether, specialHelp];

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goBack = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
    <h2         style={{
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "20px",
        }}>Our Mission</h2>
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          marginTop: "10px",
        }}
      >
        <img
          src={images[index]}
          alt="slider"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* ---- TEXT OVERLAY ---- */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            width: "70%",
            zIndex: 10,
          }}
        >
  <p
  style={{
    fontSize: "1.4rem",
    lineHeight: "1.6",
    marginTop: "20px",
    fontWeight: 500,
    color: "#ffffff",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(0, 0, 0, 0.6)",
    backgroundColor: "rgba(74, 68, 68, 0.4)",
    padding: "20px 30px",
    borderRadius: "12px",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    maxWidth: "900px",
    margin: "20px auto",
  }}
>
  Florans Sports Trust empowers young people by using sport,
  mentorship, and life-skills training to build confidence,
  strengthen well-being, and create opportunities for a brighter
  future.
</p>
        </Box>

        {/* Back Button */}
        <IconButton
          onClick={goBack}
          sx={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 20,
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={goNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.6)",
            zIndex: 20,
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
    </>
  );
}
