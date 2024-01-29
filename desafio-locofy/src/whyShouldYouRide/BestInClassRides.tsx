import { Box, CardContent, Typography } from "@mui/material"
import Card from './Card'

const BestInClassRides = () => { //Define um componente funcional 
  // função que recebe o tipo de carro como argumento e abre uma nova janela do navegador para realizar uma pesquisa no Google com base no tipo de carro
  const learnMoreClick = (carType: string) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${carType} car`)}`;
    window.open(googleSearchUrl, '_blank');
  }

  return (
    <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    padding={'59px 58px'}
    >
      <Typography
      variant="h4"
      sx={{
        fontSize: '26px',
        fontWeight: '400',
        color: '#FBA403',
        textTransform: 'uppercase'
      }}
      >
        Why should you ride with us?
      </Typography>

      <Typography
      variant="h2"
      sx={{
        fontSize: '45px',
        fontWeight: '700',
        color: "#fff",
        marginBottom: '60px'
      }}
      >
        Best in class rides
      </Typography>
      <CardContent sx={{display: 'flex'}}>
        <Card
          imageSrc="../assets/card-image-basic.png"
          title="Basic"
          description="The best balance of price and comfort. You will not go wrong with our basic rides."
          buttonText="Learn More"
          onClick={() => learnMoreClick('Basic')}
        />
        <Card
          imageSrc="../assets/card-image-comfort.png"
          title="Comfort"
          description="If comfort is your priority, this is the ride for you. It’s spacious and packed with features."
          buttonText="Learn More"
          onClick={() => learnMoreClick('Comfort')}
        />
        <Card
          imageSrc="../assets/card-image-business.png"
          title="Business"
          description="Do you want to travel around the city in style? Make sure to select or business class rides."
          buttonText="Learn More"
          onClick={() => learnMoreClick('Business')}
        />
        <Card
          imageSrc="../assets/card-image-deluxe.png"
          title="Deluxe"
          description="The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for."
          buttonText="Learn More"
          onClick={() => learnMoreClick('Deluxe')}
        />
      </CardContent>
    </Box>
  )
}

export default BestInClassRides