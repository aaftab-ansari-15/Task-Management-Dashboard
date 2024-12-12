
import PendingIcon from "@mui/icons-material/Pending";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportIcon from '@mui/icons-material/Report';
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
export const renderStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return (
            <AssignmentTurnedInIcon color="success" />
        );
  
      case "In-progress":
        return (
            <EventRepeatIcon color="warning" />
        );
      case "Pending":
        return (
            <PendingIcon color="error" />
        );
      default:
        return <span>!</span>; // Return null or a default icon if status is unknown
    }
  };
  export const renderPriorityIcon = (priority) => {
    switch (priority) {
      case "Low":
        return <LowPriorityIcon sx={{ color: "#009900" }} />;
      case "Medium":
        return <PriorityHighIcon sx={{ color: "#004bad" }} />
      case "High":
        return <ReportIcon sx={{color:"#c50000"}} />;
      default:
        return <span>!</span>;
    }
  };
  export const renderCategoryIcon = (category) => {
    switch (category) {
      case "Work":
        return <WorkIcon />;
      case "Study":
        return <SchoolIcon />;
      case "Personal":
        return <PersonIcon />;
      default:
        return <AddCircleOutlineIcon />;
    }
  };