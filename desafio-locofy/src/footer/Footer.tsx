import { Box, Container, IconButton, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box 
    margin={'40px 80px'} 
    display='flex'
    flexDirection={'row'}
    justifyContent={'space-between'}
    >
        <Box sx={{marginRight: '6%'}}>
            <img 
            src="../../public/Logo-white.png" 
            alt="Logo My Ride" 
            width={'43%'}
            />
            <Typography
            variant="h3"
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
                variant="h2"
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
                    variant="h3"
                    marginBottom={'12px'}
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        About Us
                    </Typography>
                    <Typography
                    variant="h3"
                    marginBottom={'12px'}
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        News
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        Careers
                    </Typography>
                    <Typography
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        How we work
                    </Typography>
                </Box>
            </Box>
            <Box marginRight={'15%'}>
                <Typography 
                variant="h2"
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
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        FAQ
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        US Office
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        Asia Office
                    </Typography>
                    <Typography
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        Help Center
                    </Typography>
                </Box>
            </Box>
            <Box marginRight={'15%'}>
                <Typography 
                variant="h2"
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
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        Become a partner
                    </Typography>
                    <Typography
                    marginBottom={'12px'}
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
                    >
                        Partner Support
                    </Typography>
                    <Typography
                    variant="h3"
                    sx={{fontSize: '16px', fontWeight: '400'}}
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