{/* Mantine Imports */}
import { Group, Image, Button, Text, Box, Title, Overlay } from "@mantine/core";

{/* React-Router Imports */}
import { Link } from "react-router-dom";

{/* Image Imports */}


{/* Font Imports */}
import '@fontsource/assistant/300.css';
import '@fontsource/assistant/400.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/500.css';

function SmartGarden() {
    return (

                <Box 
                    pos={"relative"}
                    h="100vh"
                    w="100%"
                >
    
                    <Box
                        pos="absolute"
                        w="93%"
                        h="96%"
                        top="2%"
                        left="3.5%"
                        style={{
                            zIndex: 0,
                            background: "#ffffff",
                            borderRadius: "25px",
                            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.22)",
                        }}
                    />
                
                    {/* Main White Card */}
                    <Box
                        pos="absolute"
                        w="90%"
                        h="90%"
                        top="5%"
                        left="5%"
                        style={{
                            backgroundColor: "#ffffff",
    
                            backgroundImage: `
                                linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
                            `,
    
                            backgroundSize: "40px 40px",
    
                            borderRadius: "25px",
                            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                        }}
                    />
                </Box>
            )
}

export default SmartGarden;