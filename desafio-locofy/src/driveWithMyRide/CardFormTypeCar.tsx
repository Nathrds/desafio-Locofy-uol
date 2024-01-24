import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface CardFormProps {
    imageSrc: string;
    title: string;
}

const CardFormTypeCar: React.FC <CardFormProps> = ({imageSrc, title}) => {
  return (
    <Card
    variant='outlined'
    style={{
        border: '1px solid white'
    }}
    >
        <CardMedia 
        component="img"
        alt={title}
        image={(`../../src/assets/${imageSrc}`)}
        />
        <CardContent>
            <Typography
            variant='caption'
            >
                {title}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default CardFormTypeCar