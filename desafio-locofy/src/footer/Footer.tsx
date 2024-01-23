import { Box, Container, IconButton, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box 
    margin={'40px 80px'} 
    display='flex'
    flexDirection={'row'}
    justifyContent={'space-between'}
    >
        <Box sx={{marginRight: '2%'}}>
            <img 
            src="../../public/Logo-white.png" 
            alt="Logo My Ride" 
            width={'43%'}
            />
            <Typography
            sx={{
                color: '#B3B3B3',
                fontSize: '16px',
                fontWeight: '400',
                margin: '16px 0px',
                width: '314px'
            }}
            >
                MyRide Inc., 2nd Floor, New York, NY 10016
            </Typography>
            <Box>
                <IconButton sx={{padding: 0}}>
                    <img 
                    src="../../public/Facebook.png" 
                    alt="Icon Facebook" 
                    />
                </IconButton>
                <IconButton sx={{margin: '0px 24.38px', padding: 0}}>
                    <img 
                    src="../../public/Instagram.png" 
                    alt="Icon Instagram" 
                    />
                </IconButton>
                <IconButton sx={{padding: 0}}>
                    <img 
                    src="../../public/Twitter.png" 
                    alt="Icon Twitter" 
                    />
                </IconButton>
            </Box>
        </Box>
        <Container 
        sx={{
            display: "flex", 
            flexDirection:"row",
            padding: '0px'
            }}
            >
            <Box marginRight={'15%'}>
                <Typography 
                variant="h5"
                color="#fff"
                fontSize='20px'
                fontWeight={500}
                marginBottom={'20.76px'}
                >
                    Company
                </Typography>
                <Box 
                display="flex" 
                flexDirection={"column"}
                color="#fff"
                fontSize='16px'
                fontWeight={400}
                >
                    <Typography
                    marginBottom={'12px'}
                    >
                        About Us
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    >
                        News
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    >
                        Careers
                    </Typography>
                    <Typography
                    >
                        How we work
                    </Typography>
                </Box>
            </Box>
            <Box marginRight={'15%'}>
                <Typography 
                variant="h5"
                color="#fff"
                fontSize='20px'
                fontWeight={500}
                marginBottom={'20.76px'}
                >
                    Support
                </Typography>
                <Box 
                display="flex" 
                flexDirection={"column"}
                color="#fff"
                fontSize='16px'
                fontWeight={400}
                >
                    <Typography
                    marginBottom={'12px'}
                    >
                        FAQ
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    >
                        US Office
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    >
                        Asia Office
                    </Typography>
                    <Typography
                    >
                        Help Center
                    </Typography>
                </Box>
            </Box>
            <Box marginRight={'15%'}>
                <Typography 
                variant="h5"
                color="#fff"
                fontSize='20px'
                fontWeight={500}
                marginBottom={'20.76px'}
                >
                    More
                </Typography>
                <Box 
                display="flex" 
                flexDirection={"column"}
                color="#fff"
                fontSize='16px'
                fontWeight={400}
                >
                    <Typography
                    marginBottom={'12px'}
                    >
                        Become a partner
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    >
                        Partner Support
                    </Typography>
                    <Typography
                    >
                        Mobile app links
                    </Typography>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer