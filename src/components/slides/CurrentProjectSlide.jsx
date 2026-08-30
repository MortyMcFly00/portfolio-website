{/* Mantine Imports */}
import { Image, Box, Group, Title, Text, Button } from "@mantine/core";

{/* Image Imports */}
import meshMarket from "../../assets/meshmarket.png";

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

function CurrentProjectSlide() {
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
                    pos={'absolute'}
                    w={'77%'}
                    h={'77%'}
                    top={'11.5%'}
                    left={'96.5%'}
                    style={{
                        background: '#ffffff',
                        borderRadius: '25px',
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                    }}
                />
            
                <Image 
                    src={meshMarket} 
                    alt="Featured Project"
                    top='15%'
                    left='85%'
                    radius={'xl'}
                    style={{ 
                        transform: 'scale(.7)',
                        position: 'relative',
                        width: '100%', 
                    }} />
            
                <Title
                    pos={'absolute'}
                    top={'27%'}
                    left={'9%'}
                    fw={300}
                    style={{
                        fontFamily: '"Rubik", sans-serif',
                        fontSize: '1.1rem',
                        color: '#b8b8b8',              
                    }}
                >                        
                    CURRENT PROJECT:
                </Title>
                                                        
                <Title
                    pos={'absolute'}
                    top={'30%'}
                    left={'7%'}
                    fw={400}
                    style={{
                        fontFamily: '"Rubik", sans-serif',
                        fontSize: '3.4rem',
                        maxWidth: '600px',
                        color: '#070707',
                    }}
                >              
                    MeshMarket
                </Title>
            
                <Text
                    pos='absolute'
                    left='9%'
                    top='40%'
                    fw={300}
                    ff='"Assistant", sans-serif'
                    fz='1.8rem'
                    maw='600px'>
                        A community marketplace built to help people discover local 3D-print makers, 
                        see what they create, and connect directly. MeshMarket brings 
                        scattered local creators into one place where global demand can find 
                        local talent.
                </Text>
            
                <Button
                    pos="absolute"
                    top={'70%'}
                    left={'30%'}
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

export default CurrentProjectSlide;