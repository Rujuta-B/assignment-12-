import React from "react";
import "./AccountType.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { IconButton as ContinueButton } from "@mui/material";
import SnowIcon from "../../utils/images/Snow Icon.png";
import SnowLogo from "../../utils/images/Snow Logo.png";

import { Typography } from "@mui/material";

const AccountType = () => {
  return (
    <div className="DarkSignInSection">
      <div className="HeaderNavBar">
        <Box className="NavBarItem">
          <img src={SnowIcon} alt="" style={{ width: "24px" }} />
          <img
            src={SnowLogo}
            alt=""
            style={{ width: "53px", height: "12px" }}
          />
        </Box>
        <Box className="NavBarItem">
          <Typography>Product</Typography>
          <Typography>Solutions</Typography>
          <Typography>Resources</Typography>
          <Typography>Download</Typography>
          <Typography>Pricing</Typography>
        </Box>
        <Box className="NavBarItem">
          <Typography>Sign In</Typography>
          <Typography
            style={{
              border: "1px solid rgba(255, 255, 255, 0.20)",
              borderRadius: "8px",
              padding: "4px 8px",
            }}
          >
            Login
          </Typography>
        </Box>
      </div>
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
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="SignInMain" sx={{ width: "100%", height: "100%" }}>
            <Box className="SignIn-right">
              <Box className="SignInForm-section">
                <Box className="SignInForm">
                  <Box className="SignInForm-TitleSection">
                    <Typography className="SignInForm-title">
                      Choose Account Type
                    </Typography>
                    <Typography className="SignInForm-title2">
                      If you need more info, please check out
                      <span className="SignInForm-signUpButton">
                        {" "}
                        Help Page
                      </span>
                    </Typography>
                  </Box>

                  <Box className="accountType-section">
                    <Box className="accountType-item">
                      <Box>
                        <AccountCircleOutlinedIcon />
                      </Box>
                      <Box>
                        <Typography className="accountType-Title">
                          Personal Account
                        </Typography>
                        <Typography className="accountType-desc">
                          If you need more info, please check it out.
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="accountType-item">
                      <Box>
                        <WorkOutlineIcon />
                      </Box>
                      <Box>
                        <Typography className="accountType-Title">
                          Corporate Account
                        </Typography>
                        <Typography className="accountType-desc">
                          Create corporate account to many users.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="SignInForm-Submit">
                    <ContinueButton
                      type="submit"
                      color="primary"
                      aria-label="Continue"
                    >
                      Continue
                      <ArrowForwardIosOutlinedIcon />
                    </ContinueButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="SignInBottom">
          <Typography>© 2023 Snow</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default AccountType;
