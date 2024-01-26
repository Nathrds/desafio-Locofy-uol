import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";

interface SuccessScreenProps {
    onClick: () => void
}

const SuccessScreen = ({onClick}) => {
  const [data, setData] = useState<FormData>();

  useEffect(() => {
    async function fetchDriverData() {
      async function fetchData() {
        const response = await fetch("http://localhost:3000/cars/1");
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
        fetch ("http://localhost:3000/cars/1", {
            method: "delete"
        })
    }
  }, [data])

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
      {data && (
        <>
          <Box>
            <CheckCircleIcon />
            <Typography variant="h6">
              Welcome, {data.fullName.split(" ")[0]}
            </Typography>
          </Box>

          <Typography variant="body2">
            Full Name: {data.fullName}
            Email Address: {data.emailAddress}
            Country: {data.country}
            City: {data.city}
            Referral Code: {data.referralCode}
            Drive My Own Car: {data.driveMyOwnCar ? true : false}
            Car Type: {data.carType}
          </Typography>

          <Button onClick={onClick}>Submit a New Car</Button>
        </>
      )}
    </Box>
  );
};

export default SuccessScreen;

// import { useEffect } from "react"

// interface SuccessProps {
//     onClick?: () => void
// }

// const SuccessScreen: React.FC<SuccessProps> = ({onClick}) => {

//     const clearFormData = () => {
//         fetch ("http://localhost:3000/cars", {
//             method: "DELETE"
//         })
//         .then((response) => response.json())
//         .then(() => {
//             console.log("Data clared successfully")
//         })
//         .catch((error) => {
//             console.log("Error clearing data: ", error)
//         })
//     }

//     useEffect(() => {
//         clearFormData()
//     }, [])
//     }

//   return <p>Aqui</p>

// export default SuccessScreen
