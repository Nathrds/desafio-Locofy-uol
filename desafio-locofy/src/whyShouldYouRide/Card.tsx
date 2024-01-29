import {Box, Button, CardActions, CardContent, CardMedia, Card as MuiCard, Typography} from '@mui/material'

//  propriedades que incluem title (título), description (descrição), imageSrc (caminho da imagem), buttonText (texto do botão) e onClick (função de clique)
interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    onClick: () => void;
}

// Define o componente Card como uma função de componente React, recebendo as propriedades especificadas na interface CardProps
const Card: React.FC <CardProps> = ({title, description, imageSrc, buttonText, onClick}) => {
  return (
    <Box 
    width='344px'
    >
        <MuiCard sx={{backgroundColor: '#383838', margin: '12px'}}>
            <CardMedia 
            component="img"
            image={(`../../src/assets/${imageSrc}`)} // imagem dinâmica
            title={title} // título dinâmico
            sx={{height: '200px'}}
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
            <CardActions sx={{display: 'flex', justifyContent: 'right'}}>
                <Button
                variant='text'
                aria-label={`Learn More about ${title} car`}
                sx={{color: '#FBA403 !important', ":hover": {background: 'transparent'}}}
                onClick={onClick}
                >
                    {buttonText}
                </Button>
            </CardActions>
        </MuiCard>
    </Box>
  )
}

export default Card
