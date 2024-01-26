import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: "#242424",
        position: "sticky",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src="../../public/Logo-myride.png"
            alt="Logo My Ride"
            width={"100%"}
          />
        </Box>

        <Box aria-label="navigation menu">
          <Button
            variant="text"
            aria-label="Home"
            sx={{
              color: "#fff",
              ":hover": { color: "#FBA403", backgroundColor: "transparent" },
              paddingRight: "30px",
            }}
          >
            Home
          </Button>
          <Button
            variant="text"
            aria-label="Getting a Taxi"
            sx={{
              color: "#fff",
              ":hover": { color: "#FBA403", backgroundColor: "transparent" },
              paddingRight: "30px",
            }}
          >
            Getting a Taxi
          </Button>
          <Button
            variant="text"
            aria-label="Mobile App"
            sx={{
              color: "#fff",
              ":hover": { color: "#FBA403", backgroundColor: "transparent" },
              paddingRight: "30px",
            }}
          >
            Mobile App
          </Button>
          <Button
            variant="text"
            aria-label="Contact Us"
            sx={{
              color: "#fff",
              ":hover": { color: "#FBA403", backgroundColor: "transparent" },
            }}
          >
            Contact Us
          </Button>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton>
            <img
              src="../../public/bell-icon.png"
              alt="Icon bell notification"
              width={"100%"}
            />
          </IconButton>
          <Box margin="0px 20px">
            <img src="../../public/seperator.png" alt="Seperator image" />
          </Box>
          <IconButton>
            <img
              src="../../public/user-avatar.png"
              alt="Image User Avatar"
              width={"100%"}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
