import { styled } from '@mui/material/styles'
import { TextField } from "@mui/material"

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