import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Import images
import handsTogether from "../Assets/HandsTogetherImage.png";
import specialHelp from "../Assets/specialHelp.jpg";
import cleaning from "../Assets/cleaning.jpg";
import specialSport from "../Assets/specialSport.jpg";

export default function LatestUpdates() {
  const images = [specialHelp, handsTogether, cleaning, specialSport];
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goBack = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* ----------- HEADING ----------- */}
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Our Mission
      </h2>

      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "70vh",
            overflow: "hidden",
            borderRadius: "12px",
          }}
        >
          {/* ----------- IMAGE ----------- */}
          <img
            src={images[index]}
            alt="Mission"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* ----------- DARK OVERLAY (for readability) ----------- */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35))",
              zIndex: 5,
            }}
          />

          {/* ----------- TEXT OVERLAY ----------- */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "85%",
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontSize: "1.4rem",
                lineHeight: "1.6",
                fontWeight: 500,
                color: "#ffffff",
                padding: "24px 32px",
                borderRadius: "12px",
                maxWidth: "900px",
                margin: "0 auto",
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
                textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
              }}
            >
              Florans Sports Trust empowers young people by using sport,
              mentorship, social activities, and life-skills training to build
              confidence, strengthen well-being, and create opportunities for a
              brighter future.
            </p>
          </Box>

          {/* ----------- BACK BUTTON ----------- */}
          <IconButton
            onClick={goBack}
            sx={{
              position: "absolute",
              top: "50%",
              left: "20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              zIndex: 20,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* ----------- NEXT BUTTON ----------- */}
          <IconButton
            onClick={goNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.7)",
              zIndex: 20,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
