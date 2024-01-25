import {FormHelperText} from '@mui/material'
import ImageError from './ImageSvg'

interface ErrorFormProps {
    label: string;
}

const ErrorsHelperText: React.FC <ErrorFormProps> = ({label = ""}) => {
  return (
    <FormHelperText error
    sx={{
        marginLeft: '0px !important',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '16px'
    }}
    >
        <ImageError/>
        {label}
    </FormHelperText>
  )
}

export default ErrorsHelperText