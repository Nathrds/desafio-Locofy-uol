import {Box, Button, CardActions, CardContent, CardMedia, Card as MuiCard, Typography} from '@mui/material'

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
}

const Card: React.FC <CardProps> = ({title, description, imageSrc, buttonText}) => {
  return (
    <Box 
    width='307px'
    >
        <MuiCard sx={{backgroundColor: '#383838', margin: '12px'}}>
            <CardMedia 
                image={imageSrc}
                title={title}
                sx={{
                    maxWidth: '100%'
                }}
            />
            <CardContent>
                <Typography
                variant='h6'
                component="div"
                color='#fff'
                fontSize='16px'
                fontWeight='500'
                >
                    {title}
                </Typography>
                <Typography
                variant='body2'
                color='#B3B3B3'
                fontSize='16px'
                fontWeight='400'
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                variant='text'
                sx={{
                    color: '#FBA403 !important'
                }}
                >
                    {buttonText}
                </Button>
            </CardActions>
        </MuiCard>
    </Box>
  )
}

export default Card
