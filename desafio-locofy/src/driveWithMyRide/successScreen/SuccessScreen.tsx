import { Box, Button, Typography } from "@mui/material"
import { useEffect } from "react"
import {useHistory} from "react-router-dom"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface SuccessProps {
    data: {
        fullName: string;
        emailAddress: string;
        country: string;
        city: string;
        referralCode: string;
        driveMyOwnCar: boolean;
        carType: string;
    }
}

const SuccessScreen: React.FC <SuccessProps> = ({data}) => {
    const history = useHistory()

    const clearFormData = () => {
        fetch ("http://localhost:3000/cars", {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then(() => {
            console.log("Data clared successfully")
        })
        .catch((error) => {
            console.log("Error clearing data: ", error)
        })
    }

    useEffect(() => {
        clearFormData()
    }, [])

    const handleNewCarSubmit = () => {
        history.push("/drive-form")
    }

  return (
    <Box>
        <Box>
            <CheckCircleIcon/>
            <Typography variant="h6">
                Welcome, {data.fullName.split(" "[0])}
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

        <Button
        onClick={handleNewCarSubmit}
        >
            Submit a New Car
        </Button>
    </Box>
  )
}

export default SuccessScreen