import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    backdropFilter: "blur(10px)", 
    WebkitBackdropFilter: "blur(10px)", 
    borderRadius: 2,
    border: `1px solid ${theme.palette.divider}`, 
  }));