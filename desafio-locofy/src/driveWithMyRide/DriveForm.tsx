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
  SelectChangeEvent, 
  Switch, 
  TextField, 
  Typography 
} from "@mui/material"
import { Sheet} from '@mui/joy'

import { styled } from '@mui/material/styles'

import { useForm} from 'react-hook-form'

// import axios from "axios"

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import dataBase from '../utils/db.json'

import { useEffect, useState } from "react"

const StyledForm = styled(TextField)(() => ({   
  '& .MuiOutlinedInput-root': { 
    color: '#fff',    

    '& fieldset': {       
      borderColor: '#fff',    
    },

    '&:hover fieldset': {       
      borderColor: '#FBA403 !important',    
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

  const {
    register,
    formState: {errors},
  } = useForm <FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      driveMyOwnCar: false,
      carType: '',
      carModel: '',
    }
  })

  const [countryCity, setCountryCity] = useState<typeof dataBase>()
  const [allCountry, setAllCountry] = useState<Array<string>>([])
  const [allCity, setAllCity] = useState<Array<string>>([])
  const [selectCountry, setSelectCountry] = useState<string>("")
  const [selectCity, setSelectCity] = useState<string>("")

  useEffect(() => {
    setCountryCity(dataBase)
    const countryKeys = Object.keys(dataBase)
    setAllCountry(countryKeys)
  }, [])

  function handleChangeCountry(event: SelectChangeEvent) {
    const country = event.target.value as string
    setSelectCountry(country) 

      const cities = countryCity[country]
      setAllCity(cities)
  }

  console.log(allCountry)

  function handleChangeCity (event: SelectChangeEvent) {
    const city = event.target.value as string
    setSelectCity(city)
  }

  const [isClickedSedan, setIsClickedSedan] = useState(false)
  const handleClickSedan = () => {
    setIsClickedSedan(!isClickedSedan)
  }

  const [isClickedVan, setIsClickedVan] = useState(false)
  const handleClickVan = () => {
    setIsClickedVan(!isClickedVan)
  }

  const [isClickedSemiLuxury, setIsClickedSemiLuxury] = useState(false)
  const handleClickSemiLuxury = () => {
    setIsClickedSemiLuxury(!isClickedSemiLuxury)
  }

  const [isClickedLuxury, setIsClickedLuxury] = useState(false)
  const handleClickLuxury = () => {
    setIsClickedLuxury(!isClickedLuxury)
  }

  return (
    <form 
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
          error={!!errors.country}
          displayEmpty
          onChange={handleChangeCountry}
          value={selectCountry}
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FBA403 !important",
              color: "white !important",
            },
            "& input": {
              color: "white",
            },
            "& label": {
              color: "secondary.labelColor",
            },
          }}
          > 
            {allCountry.map((country, index) => 
                <MenuItem value={country} key={index}>
                {country}
                </MenuItem>
              )}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}}>City</InputLabel>
          <Select 
          label='City'
          {...register('city')}
          error={!!errors.city}
          displayEmpty
          onChange={handleChangeCity}
          value={selectCity}
          sx={{
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FBA403 !important",
              color: "white !important",
            },
            "& input": {
              color: "white",
            },
            "& label": {
              color: "secondary.labelColor",
            },
          }}
          >
            {allCity.map((city, index) => 
                <MenuItem value={city} key={index}>
                {city}
                </MenuItem>
              )}
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
        control={<Switch {...register("driveMyOwnCar")} color="primary" />}
        labelPlacement="start"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: '10px 0 20px 0',
          color: "#fff",
          "& .MuiSwitch-switchBase": {
            "&.Mui-checked": {
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 0.3,
                backgroundColor: "orange",
              },
            },
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "orange",
          },
          "& .MuiFormControlLabel-label": {
            color: "white",
          },
        }}
        />

        <Typography
        variant="h5"
        sx={{
          color: '#FBA403',
          fontSize: '20px',
          fontWeight:'500',
          marginBottom: '16px'
        }}
        >
          Select your car type
        </Typography>
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
              background: 'transparent',
              border: isClickedSedan ? '1px solid #FBA403' : '1px solid "#fff',
              backgroundColor: isClickedSedan ? '#FBA403' : 'transparent'
            }}
            onClick={handleClickSedan}
          >
            <Box>
              <img 
              src={isClickedSedan ? "../../src/assets/sedan-black.png" : "../../src/assets/Card Image-sedan.png"} 
              alt="Sedan Car" 
              />
              </Box>
            <FormLabel style={{color:"#fff"}} htmlFor={value}>{value}</FormLabel>
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
              background: 'transparent',
              border: isClickedVan ? '1px solid #FBA403' : '1px solid "#fff',
              backgroundColor: isClickedVan ? '#FBA403' : 'transparent'
            }}
            onClick={handleClickVan}
          >
            <Box>
              <img 
              src={isClickedVan ? "../../src/assets/van-black.png" : "../../src/assets/Card Image-van.png"} 
              alt="SUV/Van Car" 
              />
            </Box>
            <FormLabel style={{color:"#fff"}} htmlFor={value}>{value}</FormLabel>
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
              background: 'transparent',
              border: isClickedSemiLuxury ? '1px solid #FBA403' : '1px solid "#fff',
              backgroundColor: isClickedSemiLuxury ? '#FBA403' : 'transparent'
            }}
            onClick={handleClickSemiLuxury}
          >
            <Box>
              <img 
              src={isClickedSemiLuxury ? "../../src/assets/semiLuxury-black.png" : "../../src/assets/Card Image-semiLuxury.png"}
              alt="Semi Luxury Car" 
              />
              </Box>
            <FormLabel style={{color:"#fff"}} htmlFor={value}>{value}</FormLabel>
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
              background: "transparent",
              border: isClickedLuxury ? '1px solid #FBA403' : '1px solid "#fff',
              backgroundColor: isClickedLuxury ? '#FBA403' : 'transparent'
            }}
            onClick={handleClickLuxury}
          >
            <Box>
              <img 
              src={isClickedLuxury ? "../../src/assets/luxury-black.png" : "../../src/assets/Card Image-luxury.png"}
              alt=" Luxury Car" 
              />
            </Box>
            <FormLabel style={{color:"#fff"}} htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}
      </RadioGroup>

        <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#FBA403 !important",
          width: '200px',
          height: '56px', 
          marginTop: '24px'
        }}
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default DriveForm