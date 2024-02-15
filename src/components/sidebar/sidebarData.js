import React from "react";
import * as FaIcons from "react-icons/fa";
import { AttenAssignment } from "../Answer/AttenAssignments";
import Student from "../student/student";
import Assignment from "../assignments/Assignment";
import { PdfConverter } from "../student/pdfDownloader";
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

export const SidebarData = [
  {
    title: "Assignment",
    path: "/Assignment",
    icon: <AssignmentIcon/>,
    element: <Assignment />,
  },
  {
    title: "Student",
    path: "/Student",
    icon: <FaIcons.FaUser />,
    element: <Student />,
  },
   
  {
    title: "Report",
    path: "/downloadpdf",
    icon: <AssessmentTwoToneIcon/>,
    element: <PdfConverter/>,
  },
];

export const SidebarData1 = [
  {
    title: "Student",
    path: "/Student",
    icon: <FaIcons.FaUser />,
    element: <Student />,
  },
  
  {
    title: "Atten Assignment",
    path: "/AttenAssignment",
    icon: <AssignmentTurnedInOutlinedIcon/>,
    element: <AttenAssignment />,
  },    
  {
    title: "Report",
    path: "/downloadpdf",
    icon: <AssessmentTwoToneIcon/>,
    element: <PdfConverter/>,
  },
];