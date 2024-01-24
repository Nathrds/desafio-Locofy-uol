import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, RadioGroup, Select, Switch, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import {useForm, SubmitHandler} from 'react-hook-form'
import axios from "axios"
import CardFormTypeCar from "./CardFormTypeCar"

const StyledForm = styled(TextField)(() => ({   
  '& .MuiOutlinedInput-root': { 
    color: '#fff',    

    '& fieldset': {       
      borderColor: '#fff',    
    },

    '&:hover fieldset': {       
      borderColor: '#fff',    
    },  
  }, 

  '& .MuiFormLabel-root': {       
    color: '#666666DE',    
  }
}));

interface FormData {
  fullName: string;
  emailAddress: string;
  country: string;
  city: string;
  referralCode: string;
  driveMyOwnCar: boolean;
  carType: string;
  carModel: string;
}

const DriveForm: React.FC = () => {

  const carOptions = [
    {title: "Sedan"},
    {title: "SUV/Van"},
    {title: "Semi Luxury"},
    {title: "Luxury Car"}
  ]

  const {
    handleSubmit,
    control,
    register,
    formState: {errors},
    setValue,
  } = useForm <FormData>({
    defaultValues: {
      driveMyOwnCar: false,
      carType: '',
      carModel: '',
    }
  })

  const onSubmit: SubmitHandler <FormData> = async (data) => {
    try {
      await axios.post ("http://localhost:5173/db.json", data)
      
        const response = await axios.get("http://localhost:5173/db.json")
        console.log(response.data)

    } catch (error) {
      console.error("API request error: ", error)
    }
  }

  const handleDriveMyOwnCarCarChange = (checked: boolean) => {
    setValue('driveMyOwnCar', checked);
    setValue('carType', '');
    setValue('carModel', '')
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    style={{
      backgroundColor: '#282828',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '1324px',
      margin: '0px auto 123px auto',
      padding: '30px'
      }}
    >
      <Box display='flex' flexDirection='row' alignItems='center'>
        <img 
        src="../../src/assets/Popup-image-car.png" 
        alt="Driver Registration" 
        style={{maxWidth: '100%', marginRight: '18px'}}
        />

        <Box display='flex' flexDirection='column'>
          <Typography
          variant="h6"
          sx={{
            fontSize: '27px',
            color: '#FBA403',
            fontWeight: '700'
          }}
          >
            Drive with MyRide
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: '16px',
              color: "#fff",
              fontWeight: '400'
            }}
          >
            Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
          </Typography>
        </Box>
      </Box>

      <Box>
        <StyledForm
        label="Full Name"
        fullWidth
        margin="normal"
        {...register('fullName', { required: 'Full Name is required'})}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
        />
        
        <StyledForm
        label="Email Address"
        fullWidth
        margin="normal"
        {...register('emailAddress', { required: 'Email Address is required'})}
        error={!!errors.emailAddress}
        helperText={errors.emailAddress?.message}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}} htmlFor="country">Country</InputLabel>
          <Select 
          label='Country'
          {...register('country', { required: 'Country is required'})}
          error={!!errors.country}
          displayEmpty
          >
            <MenuItem 
            disabled 
            value=""
            >
              Select Country
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}}>City</InputLabel>
          <Select 
          label='City'
          {...register('city', { required: 'City is required'})}
          error={!!errors.city}
          displayEmpty
          disabled={!control.getValues('country')}
          >
            <MenuItem 
            disabled 
            value=""
            >
              Select City
            </MenuItem>
          </Select>
        </FormControl>

        <StyledForm
        label="Referral Code"
        fullWidth
        margin="normal"
        {...register('referralCode', {pattern: /^[A-Z]{3}-\d{3}$/, message: 'Invalid format'})}
        error={!!errors.referralCode}
        helperText={errors.referralCode?.message}
        />

        <FormControlLabel 
        label="I drive my own car"
        control={<Switch {...register("driveMyOwnCar")} color="primary"/>} 
        />

        {control.getValues('driveMyOwnCar') && (
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="carType">Car Type</InputLabel>
          <Select 
          label="Car Type"
          {...register('carType', { required: 'Select a vehicle type' })}
          error={!!errors.carType}
          displayEmpty
          >
            <MenuItem value="" disabled>
              Select Car Type
            </MenuItem>
            {carOptions.map((car) => (
              <MenuItem key={car.title} value={car.title}>
                {car.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        )}

        {control.getValues('driveMyOwnCar') && (
          <FormControl fullWidth>
            <InputLabel htmlFor="carModel">Car Model</InputLabel>
            <Select
            label="Car Model"
            {...register('carModel')} 
            displayEmpty
            >
              <MenuItem value="" disabled>
                Select Car Model
              </MenuItem>
            </Select>
          </FormControl>
        )}

        <RadioGroup
        {...register('carType', { required: 'Select a vehicle type' })}
        error={!!errors.carType}
        >
          {carOptions.map((car) =>(
            <FormControlLabel 
            label={car.title}
            key={car.title}
            value={car.title} 
            control={<Radio />}
            />
          ))}
        </RadioGroup>

        <Button
        type="submit"
        variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default DriveForm