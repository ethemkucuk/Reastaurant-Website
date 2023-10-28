import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
     <Box sx={{textAlign:"center", bgcolor:"black", color:"white", p:3}}>
      <Box sx={{my:3, "& svg":{
        fontSize:"55px",
        cursor: "pointer",
        mr: 3
      },
      "& svg:hover":{
        color: "blue",
        transform:"translateX(5px)",
        transition: "all 1s ease"
      }
      }}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
      </Box>
      <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:"1.1rem"}}}>
        All rights reserved &copy; Pankaj Kumbhare ❤️
      </Typography>
     </Box>
    </>
  )
}

export default Footer
