{/* Mantine Imports */}
import { Group, Image, Button, Text } from "@mantine/core";

{/* Image Imports */}
import logo from "../assets/logo.png";

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

function Navbar() {
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

                <Image 
                    src={logo} 
                    alt="Logo" 
                    w={60} 
                    h={60}  
                    />

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
                style={{
                    paddingRight: '15px',
                    display: 'flex',
                    gap: '10px'
                    }}>

            <Button variant="default">About Me</Button>
            <Button variant="default">Projects</Button>
            <Button variant="default">Contact</Button>

            </Group>
        </Group>
    );
}

export default Navbar;