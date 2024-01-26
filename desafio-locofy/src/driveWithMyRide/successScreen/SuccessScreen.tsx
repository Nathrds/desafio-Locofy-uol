import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import ModalError from "../modal/Modal";

interface SuccessScreenProps {
  onClick: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onClick }) => {
  const [data, setData] = useState<FormData>();

  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDriverData() {
      async function fetchData() {
        const response = await fetch("http://localhost:3000/cars/1");
        if (!response.ok) {
          setError(true);
        }
        const data = await response.json();
        return data;
      }
      const driverData = await fetchData();
      setData(driverData);
    }
    fetchDriverData();
  }, []);

  useEffect(() => {
    if (data) {
      fetch("http://localhost:3000/cars/1", {
        method: "delete",
      });
    }
  }, [data]);

  return (
    <Box
      style={{
        backgroundColor: "#282828",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1324px",
        margin: "0px auto 123px auto",
        padding: "30px",
      }}
    >
      {error && (
        <ModalError
          open={true}
          errorMessage="Failed to submit the form. Please try again later."
          onClose={() => setError(false)}
        />
      )}
      {data && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="3%"
          >
            <Box display="flex" alignItems="center" justifyContent="center">
              <CheckCircleIcon style={{ color: "#4baf4f", fontSize: "50" }} />
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontSize: "45px",
                  fontWeight: "700",
                }}
              >
                Welcome, {data.fullName.split(" ")[0]}
              </Typography>
            </Box>
            <Typography variant="h6" color={"#fff"} marginTop="2%">
              Great, successfully submitted!
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" marginBottom="3%">
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box display="flex" flexDirection="column" marginRight="3%">
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="5% 0"
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Full Name:
                  </span>{" "}
                  {data.fullName}
                </Typography>
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="5% 0"
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Email Address:
                  </span>{" "}
                  {data.emailAddress}
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column" marginRight="3%">
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="8% 0"
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Country:
                  </span>{" "}
                  {data.country}
                </Typography>
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="15% 0"
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    City:
                  </span>{" "}
                  {data.city}
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column">
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="5% 0"
                  width={"120px"}
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Referral Code:
                  </span>{" "}
                  {data.referralCode}
                </Typography>
                <Typography
                  variant="body2"
                  color="#fff"
                  fontSize="16px"
                  margin="5% 0"
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#FBA403",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Car Type:
                  </span>{" "}
                  {data.carType}
                </Typography>
              </Box>
              <Box>
                <img
                  src="../../src/assets/Popup-image-car.png"
                  alt="Well Done"
                  style={{ maxWidth: "100%" }}
                />
              </Box>
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Button
              onClick={onClick}
              variant="contained"
              aria-label="Submit a New Car"
              disableElevation
              sx={{
                backgroundColor: "#FBA403 !important",
                width: "200px",
                height: "56px",
                marginTop: "24px",
              }}
            >
              Submit a New Car
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SuccessScreen;
