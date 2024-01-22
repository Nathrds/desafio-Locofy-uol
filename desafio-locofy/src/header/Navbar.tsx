import {AppBar, Avatar, Box, Button, IconButton, Toolbar} from '@mui/material'

const useStyles = {
    logo: {
        maxWidth: '100%'
    },
    notificationIcon: {
        maxWidth:'100%'
    },
    avatar: {
        marginLeft: '5px',
        maxWidth: '100%'
    }
}

const Navbar: React.FC = () => {
  return (
        <AppBar sx={{boxShadow: 0, bgcolor:'#242424'}}>
            <Toolbar 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
                }}>
                <Box>
                    <img 
                    src="../../public/Logo-myride.png" 
                    alt="Logo My Ride"
                    style={useStyles.logo} 
                    />
                </Box>
                <Box>
                    <Button 
                    sx={{color: '#fff', 
                    ":hover": {color: '#FBA403'},
                    paddingRight: '30px'
                    }}
                    >
                        Home
                    </Button>
                    <Button 
                    sx={{color: '#fff',
                    ":hover": {color: '#FBA403'},
                    paddingRight: '30px'
                    }}
                    >
                        Getting a Taxi
                    </Button>
                    <Button sx={{color: '#fff',
                    ":hover": {color: '#FBA403'},
                    paddingRight: '30px'
                    }}
                    >
                        Mobile App
                    </Button>
                    <Button sx={{color: '#fff',
                    ":hover": {color: '#FBA403'}
                    }}
                    >
                        Contact Us
                    </Button>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <IconButton>
                        <img src="../../public/bell-icon.png" alt="Icon bell notification" style={useStyles.notificationIcon}/>
                    </IconButton>
                    <Box margin="0px 20px">
                        <img src="../../public/seperator.png" alt="Seperator image"/>
                    </Box>
                    <Avatar
                        alt='User Avatar'
                        src='../../public/user-avatar.png'
                        style={useStyles.avatar}
                    />
                </Box>
            </Toolbar>
        </AppBar>
  )
}

export default Navbar