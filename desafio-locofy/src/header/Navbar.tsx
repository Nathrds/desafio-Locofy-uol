import {AppBar, Box, IconButton, Tab, Tabs, Toolbar} from '@mui/material'

const Navbar = () => {
  return (
        <AppBar 
        sx={{
            boxShadow: 0, 
            bgcolor:'#242424',
            position:'sticky'
            }}
            >
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
                    width={'100%'} 
                    />
                </Box>
                <Box>
                    <Tabs>
                        <Tab 
                        sx={{color: '#fff', 
                        ":hover": {color: '#FBA403'},
                        paddingRight: '30px'
                        }}
                        label="Home"
                        />
                        <Tab 
                        sx={{color: '#fff',
                        ":hover": {color: '#FBA403'},
                        paddingRight: '30px'
                        }}
                        label="Getting a Taxi"
                        />
                        <Tab 
                        sx={{color: '#fff',
                        ":hover": {color: '#FBA403'},
                        paddingRight: '30px'
                        }}
                        label="Mobile App"
                        />
                        <Tab 
                        sx={{color: '#fff',
                        ":hover": {color: '#FBA403'}
                        }}
                        label="Contact Us"
                        />
                    </Tabs>
                </Box>
                <Box 
                display="flex" 
                flexDirection="row" 
                alignItems="center"
                >
                    <IconButton>
                        <img 
                        src="../../public/bell-icon.png" 
                        alt="Icon bell notification" 
                        width={'100%'}
                        />
                    </IconButton>
                    <Box margin="0px 20px">
                        <img 
                        src="../../public/seperator.png" 
                        alt="Seperator image"
                        />
                    </Box>
                    <IconButton>
                        <img 
                        src="../../public/user-avatar.png" 
                        alt="Image User Avatar" 
                        width={'100%'}
                        />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
  )
}

export default Navbar