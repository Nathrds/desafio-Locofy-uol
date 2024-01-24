import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  InputLabel, 
  MenuItem,  
  RadioGroup,
  Select, 
  Switch, 
  TextField, 
  Typography 
} from "@mui/material"
import { Sheet} from '@mui/joy'

import { styled } from '@mui/material/styles'

import { useForm, SubmitHandler} from 'react-hook-form'
// import {useState} from 'react'
// import axios from "axios"
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import dataBase from '../utils/db.json'

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

const schema = yup.object().shape({
  fullName: yup.string().required('Invalid Full Name').matches(/^[^\d]+ [^\d]+$/, 'Invalid format'),
  emailAddress: yup.string().email('Invalid email address').required('Email Address is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  referralCode: yup.string().matches(/^[A-Z]{3}-\d{3}$/, 'Invalid format'),
  driveMyOwnCar: yup.boolean(),
  carType: yup.string().required('Select a vehicle type'),
})

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
  // const [loading, setLoading] = useState(false)
  // const [apiError, setApiError] = useState<string | null>(null)

  const {
    register,
    formState: {errors},
    // setValue,
  } = useForm <FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      driveMyOwnCar: false,
      carType: '',
      carModel: '',
    }
  })

  // const onSubmit: SubmitHandler <FormData> = async (data) => {
  //   setApiError(null);
  //   setLoading(true);

  //   try {
  //     const response = await axios.get('http://localhost:3000')
  //     const countryList = response.data

  //     Object.keys(countryList).forEach((country) => {
  //       console.log(country)
  //       const cities = countryList[country]
  //       cities.forEach((city) => {
  //         console.log(city)
  //       })
  //     })

  //       setLoading(false)
  //   } catch (error) {
  //     console.error("API request error: ", error)
  //     setApiError('Error connecting to the server. Please try again later')
  //     setLoading(false)
  //   }
  // }


  return (
    <form 
    // onSubmit={handleSubmit(onSubmit)}
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
        {...register('fullName')}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
        />
        
        <StyledForm
        label="Email Address"
        fullWidth
        margin="normal"
        {...register('emailAddress')}
        error={!!errors.emailAddress}
        helperText={errors.emailAddress?.message}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}} htmlFor="country">Country</InputLabel>
          <Select 
          label='Country'
          {...register('country')}
          error={!!errors.country}
          displayEmpty
          >
            <MenuItem 
            disabled 
            value=""
            >
              Select Country
            </MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}}>City</InputLabel>
          <Select 
          label='City'
          {...register('city')}
          error={!!errors.city}
          displayEmpty
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
        {...register('referralCode')}
        error={!!errors.referralCode}
        helperText={errors.referralCode?.message}
        />

        <FormControlLabel 
        label="I drive my own car"
        control={<Switch {...register("driveMyOwnCar")} color="primary"/>} 
        />

        <RadioGroup
        aria-label="Car Type"
        defaultValue="Sedan"
        name="CarType"
        sx={{
          flexDirection: 'row',
          gap: 2,
        }}
        {...register('carType')}
        error={!!errors.carType}
      >
        {['Sedan'].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
              background: 'transparent'
            }}
          >
            <Box><img src="../../src/assets/Card Image-sedan.png" alt="Sedan Car" /></Box>
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}

        {['SUV/Van'].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
              background: 'transparent'
            }}
          >
            <Box><img src="../../src/assets/Card Image-van.png" alt="SUV/Van Car" /></Box>
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}

        {['Semi Luxury'].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
              background: 'transparent'
            }}
          >
            <Box><img src="../../src/assets/Card Image-semiLuxury.png" alt="Semi Luxury Car" /></Box>
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}

      {['Luxury Car'].map((value) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
              background: 'transparent'
            }}
          >
            <Box><img src="../../src/assets/Card Image-luxury.png" alt=" Luxury Car" /></Box>
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
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