{/* Mantine Imports */}
import { Image, Box, Group, Title, Text, Button } from "@mantine/core";

{/* Image Imports */}
import samplePad from "../../../../assets/sample-pad.png";

{/* Font Imports */}
import '@fontsource/assistant/300.css';
import '@fontsource/assistant/400.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/500.css';

function FeaturedProjectSlide() {
    return(
        <Group
            h="100%"
            justify='space-between'
            align= 'center'
            px='xl'
        >
        
            <Box
                pos={'relative'}
                w={'55%'} 
                h={'55%'}
            >
        
                <Box
                    pos={'absolute'}
                    w={'105%'}
                    h={'114%'}
                    top={'-5%'}
                    left={'74%'}
                    style={{
                        background: '#ffffff',
                        borderRadius: '25px',
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                    }}
                />
        
                <Image 
                    src={samplePad} 
                    alt="Featured Project"
                    left={'76.5%'}
                    top={'-0.5%'}
                    radius={'xl'}
                    style={{ 
                        position: 'relative',
                        width: '100%', 
                    }} />
            
                <Title
                    pos={'absolute'}
                    top={'-8%'}
                    left={'9%'}
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
                    top={'-1%'}
                    left={'7%'}
                    fw={400}
                    style={{
                        fontFamily: '"Rubik", sans-serif',
                        fontSize: '3.4rem',
                        maxWidth: '500px',
                        color: '#070707',
                    }}
                >              
                    Children's Church Production Sound Pad
                </Title>
            
                <Text
                    pos='absolute'
                    left='9%'
                    top='50%'
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
                    left="22%"
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