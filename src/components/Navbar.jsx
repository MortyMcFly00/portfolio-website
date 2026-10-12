{/* Mantine Imports */}
import { Group, Image, Button, Text, Tabs } from "@mantine/core";

{/* Image Imports */}
import logo from "../assets/logo.png";

{/* Font Imports */}
import '@fontsource/assistant/300.css';
import '@fontsource/assistant/400.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/500.css';

import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    
    return (
        <Group 
            justify="space-between" 
            align="center" 
            style={{ 
                height: '100%'            
                }}>

            <Group 
                justify="flex-start" 
                style={{ 
                    paddingLeft: '10px'       
                    }}>
                
                <Link to='/'>
                    <Image 
                        src={logo} 
                        alt="Logo" 
                        w={60} 
                        h={60}  
                    />
                </Link>

            </Group>

            <Group justify="center">
                <Text
                    c={'black'}
                    ff={'"Rubik", sans-serif'}>
                        Matthew McPhail | Software Engineering Student
                </Text>
            </Group>

            <Group 
                justify="flex-end "
                bottom={"5%"} 
                style={{
                    paddingRight: '50px',
                    paddingTop: '24px',
                    display: 'flex',
                    gap: '10px'
                    }}>

                <Tabs 
                    value={location.pathname}
                    variant="unstyled"
                    styles={{
                        tab: {
                            transition: "all 0.2s ease",
                        },

                        tabLabel: {
                            fontFamily: '"Rubik", sans-serif',
                        },

                        tabSection: {
                            margin: 0,
                        },
                    }}    
                >
                    <Tabs.List
                        style={{
                            gap: '0.5rem',
                        }}
                    >
                        <Tabs.Tab 
                            value="/About"
                            component={Link}
                            to="/about"
                            style={{
                                fontFamily: '"Rubik", sans-serif',
                                fontWeight: 500,
                                color: "#1a1a1a",
                                padding: "0.5rem 1rem",
                                borderRadius: "999px",
                            }}
                        >
                            About Me
                        </Tabs.Tab>

                        <Tabs.Tab 
                            value="/Projects"
                            component={Link}
                            to="/projects"
                            style={{
                                fontFamily: '"Rubik", sans-serif',
                                fontWeight: 500,
                                color: "#1a1a1a",
                                padding: "0.5rem 1rem",
                                borderRadius: "999px",
                            }}
                        >
                            Projects
                        </Tabs.Tab>

                        <Tabs.Tab 
                            value="/Contact"
                            component={Link}
                            to="/contact"
                            style={{
                                fontFamily: '"Rubik", sans-serif',
                                fontWeight: 500,
                                color: "#1a1a1a",
                                padding: "0.5rem 1rem",
                                borderRadius: "999px",
                            }}
                        >
                            Contact Me
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs>

            </Group>
        </Group>
    );
}

export default Navbar;