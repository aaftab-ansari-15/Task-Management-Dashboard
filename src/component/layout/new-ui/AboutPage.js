import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { changeComponent } from "../../../redux/uiSlice";
import { DASHBOARD } from "../../../constants/componentsName.";
import features from "../../../Data/features.json"
import technologies from "../../../Data/technologies.json"
const AboutPage = () => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(changeComponent(DASHBOARD));
  };
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h2"
        align="left"
        sx={{
          ml: 4,
          color: "#008f25",
          fontWeight: "bold",
          marginBottom: 2,
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        About Compito
      </Typography>
      <Box textAlign={"-webkit-left"}>
        <Typography
          variant="h6"
          align="left"
          sx={{
            ml: 4,
            color: "#333",
            // maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Compito is a dynamic **Task Management Dashboard** designed to help
          users create, update, delete, and manage tasks effortlessly. Whether
          you're a professional, a student, or just someone looking to stay
          organized.
        </Typography>
      </Box>
      {/* Features Section */}
      <Typography
        variant="h4"
        sx={{
          color: "#555",
          fontWeight: "bold",
          textAlign: "left",
          width: "100%",
          paddingLeft: "2rem",
        }}
      >
        Features:
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                padding: "1.5rem",
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#008f25" }}
                >
                  {feature.title}
                </Typography>
                <Divider
                  sx={{ margin: "0.5rem 0", backgroundColor: "#008f25" }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.5 }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Technologies Used Section */}
      <Typography
        variant="h4"
        sx={{
          color: "#555",
          fontWeight: "bold",
          textAlign: "left",
          width: "100%",
          paddingLeft: "2rem",
          marginTop: 4,
        }}
      >
        Built With:
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        {technologies.map((tech, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                padding: "1.5rem",
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#008f25" }}
                >
                  {tech.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", marginTop: "0.5rem" }}
                >
                  {tech.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* CTA Button */}
      <Button
        variant="contained"
        sx={{
          marginTop: 4,
          backgroundColor: "#008f25",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          fontSize: "1.1rem",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#005f19",
          },
        }}
        onClick={handleGoBack} // Replace with your actual dashboard route
      >
        Explore Dashboard
      </Button>
    </Box>
  );
};


export default AboutPage;
