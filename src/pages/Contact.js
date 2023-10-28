import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{ my: 10, ml: 5, mr: 10, "& h4": { fontWeight: "bold", mb: 2 }, "& p":{textAlign:"justify"}}}
        >
          <Typography variant="h4">Contact My Restaurant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            harum corrupti officiis officia libero reiciendis accusamus
            excepturi, quidem vitae possimus, inventore ipsam iste provident
            rerum cumque debitis aperiam consequuntur doloremque!
          </p>
        </Box>
        <Box sx={{m:3, width:"600px", ml:6,
      "@media (max-width:600px)":{width:"300px"}
      }}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white", fontSize: "25px" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />{" "}
                    1800-0000-00 (TollFree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                    help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <LocalPhoneIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
}

export default Contact
