import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PagesList = () => {
  return (
    <div className="DarkSignInSection">
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          className="SignInMain-Section"
          sx={{
            width: "100%",
            height: "85vh",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* <Link to="login" style={{ textDecoration: "none" }}>
            <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
              <Box className="SignIn-right">
                <Box className="SignInForm-section" style={{ display: "flex" }}>
                 
                  <Box
                    className="SignInForm"
                    style={{ flex: 1, padding: "20px" }}
                  >
                    <Typography className="SignInForm-title4">
                      Page 1
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link> */}
          <Link to="loginDark" style={{ textDecoration: "none" }}>
            <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
              <Box className="SignIn-right">
                <Box className="SignInForm-section" style={{ display: "flex" }}>
                  {/* Box 3 */}
                  <Box
                    className="SignInForm"
                    style={{ flex: 1, padding: "20px" }}
                  >
                    <Typography className="SignInForm-title4">
                      Page 1
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
          <Link to="/accountType" style={{ textDecoration: "none" }}>
            <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
              <Box className="SignIn-right">
                <Box className="SignInForm-section" style={{ display: "flex" }}>
                  {/* Box 3 */}
                  <Box
                    className="SignInForm"
                    style={{ flex: 1, padding: "20px" }}
                  >
                    <Typography className="SignInForm-title4">
                      Page 2
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
          {/* BOX 444 */}
          <Link to="twoStepVerification" style={{ textDecoration: "none" }}>
            <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
              <Box className="SignIn-right">
                <Box className="SignInForm-section" style={{ display: "flex" }}>
                  {/* Box 3 */}
                  <Box
                    className="SignInForm"
                    style={{ flex: 1, padding: "20px" }}
                  >
                    <Typography className="SignInForm-title4">
                      Page 3
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
          <Link to="*" style={{ textDecoration: "none" }}>
            <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
              <Box className="SignIn-right">
                <Box className="SignInForm-section" style={{ display: "flex" }}>
                  {/* Box 3 */}
                  <Box
                    className="SignInForm"
                    style={{ flex: 1, padding: "20px" }}
                  >
                    <Typography className="SignInForm-title4">
                      Page 4
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default PagesList;
