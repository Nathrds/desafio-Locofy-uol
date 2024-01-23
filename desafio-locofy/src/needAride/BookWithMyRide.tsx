import { Box, Button, IconButton, Typography } from "@mui/material"

import {StyledFieldPickup, StyledFieldDestination} from './StylesField'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'



const BookWithMyRide = () => {
  return (
    <Box
    display='flex'
    alignItems='center'
    flexDirection='row'
    justifyContent='center'
    margin={'74px 89px'}
    >
      <img 
      src="../../src/assets/Image-needAride.png" 
      alt="Image of a yellow car on a street with the My Ride logo"
      style={{maxWidth:'100%'}} 
      />
      <Box
      display='flex'
      flexDirection='column'
      marginLeft='42px'
      >
        <Typography
        variant="h4"
        sx={{
          fontSize: '26px',
          textTransform: 'uppercase',
          color: '#fff'
        }}
        >
          Need a ride?
        </Typography>

        <Typography
        variant="h2"
        sx={{
          fontSize: '50px',
          color: "#fff",
          fontWeight: 700
        }}
        >
            Book with 
          <span style={{color:"#FBA403", fontWeight: 500, padding: '0px 10px'}}>
            <span style={{fontStyle: 'italic'}}>
                my
            </span>
                RIDE
          </span> 
                now!
        </Typography>
        <Box
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        bgcolor='#2C2C2C'
        borderRadius='4px'
        padding='30px 33px'
        width='100%'
        marginTop='30px'
        >
          <Typography 
          variant="h5"
          color='#fff'
          fontSize='24px'
          fontWeight='700'
          >
            Find a ride now
          </Typography>

          <StyledFieldPickup
            label="Your Pickup"
            defaultValue="Current Location"
            fullWidth
            InputProps={{
              readOnly: true,
              endAdornment: (
                <IconButton>
                  <CloseIcon 
                  fontSize="small" 
                  />
                </IconButton>
              )
            }}
            margin="normal"
          />
          <StyledFieldDestination
          label="Your Destination" 
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <CloseIcon 
                fontSize="small" 
                />
              </IconButton>
            )
          }}
          />

          <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: '16px', 
            height: '56px', 
            backgroundColor: "#FBA403 !important"
          }}
          startIcon={<SearchIcon/>}
          disableElevation
          >
            Find a driver
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BookWithMyRide