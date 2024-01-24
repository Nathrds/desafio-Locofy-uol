import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'

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

const DriveForm = () => {
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
        />
        
        <StyledForm
        label="Email Address"
        fullWidth
        margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}}>Country</InputLabel>
          <Select label='Country'>
            <MenuItem disabled value="">Select Country</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{color: '#666666DE'}}>City</InputLabel>
          <Select label='Country'>
            <MenuItem disabled value="">Select City</MenuItem>
          </Select>
        </FormControl>

        <StyledForm
        label="Referral Code"
        fullWidth
        margin="normal"
        />

        {/* <FormControlLabel label="I drive my own car" /> */}

        <FormControl fullWidth margin="normal">
          <InputLabel>Car Type</InputLabel>
        </FormControl>
      </Box>
    </form>
  )
}

export default DriveForm