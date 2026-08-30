{/* Mantine Imports */}
import { Image, Overlay, Title, Text, Button, Box } from "@mantine/core";

{/* Image Imports */}
import me from "../../assets/me.jpg";

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

    function AboutSlide() {
        return (
            <Box 
                pos={"relative"}
                h="100%"
                w="100%"
            >

            <Box
                pos={'absolute'}
                w={'93%'}
                h={'96%'}
                top={'2%'}
                left={'3.55%'}
                style={{
                    background: '#ffffff',
                    borderRadius: '25px',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                }}
            />
                
            <Image 
                src={me} 
                alt="me" 
                fit="cover"
                radius={'xl'}
                style={{ 
                    height: '100%', 
                    width: '100%',
                    transform: 'scale(.9)',
                }} 
            />
            
            <Title 
                pos={"absolute"}
                top={"9%"}
                left={"9%"}
                c={'white'}
                ff={'"Rubik", sans-serif'}
                fw={500}
                maw={'950px'}
                fz={'4rem'}
                style={{ 
                    zIndex: 2,
                    lineHeight: 1.1,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.45)',
                }}
            >
                Software Engineering Student & Junior Developer
            </Title>
                                                
            <Text
                pos={'absolute'}
                top={'30%'}
                left={'11%'}
                c={'white'}
                fw={400}
                style={{
                    zIndex: 2,
                    fontFamily: '"Assistant", sans-serif',
                    fontSize: '2rem',
                    textShadow: 
                    '0 2px 4px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.45)',
                }}
            >
                I build practical software projects that solve<br/>real-world
                problems while continuing to expand<br/>my skills across web
                development,<br/>full-stack systems, and AI.
            </Text>
                                                
            <Button
                pos="absolute"
                top="65%"
                left="20%"
                variant="white"
                color="dark"
                w={300}
                h={40}
                radius="xl"
                style={{
                    zIndex: 2,
                    fontFamily: '"Rubik", sans-serif',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                }}
            >
                About Me
            </Button>
        </Box>
    );
}

export default AboutSlide;