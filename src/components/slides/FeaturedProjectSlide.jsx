{/* Mantine Imports */}
import { Image, Box, Group, Title, Text, Button } from "@mantine/core";

{/* Image Imports */}
import samplePad from "../../assets/sample-pad.png";

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

function FeaturedProjectSlide() {
    return(
        <Group
            h="100%"
            justify='space-between'
            align= 'center'
            px='xl'
        >
        
            <Box 
                style={{
                    position: 'relative',
                    width: '55%',
                }}>
        
            <Box
                style={{
                    position: 'absolute',
                    width: '105%',
                    height: '109%',
                    top: -35,
                    left: 658,
                    background: '#ffffff',
                    borderRadius: '25px',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                }}
            />
        
            <Image 
                src={samplePad} 
                alt="Featured Project"
                bottom='.9rem'
                left='42.5rem'
                radius={'xl'}
                style={{ 
                    position: 'relative',
                    width: '100%', 
                }} />
        
            <Title
                pos={'absolute'}
                top={'-3rem'}
                left={'3.5rem'}
                fw={300}
                style={{
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '1.1rem',
                    color: '#b8b8b8',              
                }}
            >                        
                FEATURED PROJECT:
            </Title>
                                                    
            <Title
                pos={'absolute'}
                top={'-1rem'}
                left={'3rem'}
                fw={400}
                style={{
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '3.4rem',
                    maxWidth: '600px',
                    color: '#070707',
                }}
            >              
                Children's Church Production Sound Pad
            </Title>
        
            <Text
                pos='absolute'
                left='3.9rem'
                top='10rem'
                fw={300}
                ff='"Assistant", sans-serif'
                fz='1.8rem'
                maw='600px'>
                    A web-based audio application built to<br/>streamline live children's
                    ministry<br/>production while strengthening my React<br/>and UI development
                    fundamentals.
            </Text>
        
            <Button
                pos="absolute"
                bottom="3rem"
                left="14rem"
                variant="white"
                color="dark"
                w={200}
                h={40}
                radius="xl"
                style={{
                    fontFamily: '"Rubik", sans-serif',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                }}
            >
                View Project
            </Button> 
        </Box>
    </Group>
    );
}

export default FeaturedProjectSlide;