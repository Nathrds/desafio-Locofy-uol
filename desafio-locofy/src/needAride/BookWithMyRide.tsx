import { Box, Button, IconButton, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'

import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

const StyledFieldPickup = styled(TextField)(() => ({   
  '& .MuiOutlinedInput-root': { 
    color: '#fff',    

    '& fieldset': {       
      borderColor: 'rgba(255, 255, 255, 0.23)',    
    },

    '&:hover fieldset': {       
      borderColor: 'rgba(255, 255, 255, 0.23)',    
    },  
  }, 

  '& .MuiFormLabel-root': {       
    color: 'rgba(255, 255, 255, 0.50)',    
  },

  '& .MuiIconButton-root': {
    color: 'rgba(255, 255, 255, 0.50)',
  },
}));

const StyledFieldDestination = styled(TextField)(() => ({   
  '& .MuiOutlinedInput-root': {
    color: '#fff',

    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },

    '&:hover fieldset': {
      borderColor: '#FBA403',
    },

    '&:focus fieldset': {
      borderColor: '#FBA403',
    },
  },

  '& .MuiFormLabel-root': {
    color: 'rgba(255, 255, 255, 0.50)',
  },

  '&:hover .MuiFormLabel-root': {
    color: '#FBA403',
  },

  '& .MuiInputLabel-shrink': {
    color: '#FBA403 !important',
    borderColor: '#FBA403 !important',
  },

  '& .MuiIconButton-root': {
    color: 'rgba(255, 255, 255, 0.50)',
  },

  '&:hover .MuiIconButton-root': {
    color: '#FBA403',
  },
}));

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
                <IconButton aria-label="Close Icon">
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
              <IconButton aria-label="Close Icon">
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