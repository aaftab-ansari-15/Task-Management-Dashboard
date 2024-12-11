import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
    // background: "linear-gradient(135deg, rgba(51, 248, 147, 0.6), rgba(255, 155, 255, 0.4))",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    backdropFilter: "blur(10px)", 
    WebkitBackdropFilter: "blur(10px)", 
    borderRadius: 2,
    border: `1px solid ${theme.palette.divider}`, 
  }));