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
                w={'75.5%'}
                h={'75%'}
                top={'6.2rem'}
                left={'49.4rem'}
                style={{
                    background: '#ffffff',
                    borderRadius: '25px',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                }}
            />
        
            <Image 
                src={meshMarket} 
                alt="Featured Project"
                bottom='.9rem'
                left='42.5rem'
                radius={'xl'}
                style={{ 
                    transform: 'scale(.7)',
                    position: 'relative',
                    width: '100%', 
                }} />
        
            <Title
                pos={'absolute'}
                top={'13rem'}
                left={'3.5rem'}
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
                top={'15rem'}
                left={'3rem'}
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
                left='3.9rem'
                top='20rem'
                fw={300}
                ff='"Assistant", sans-serif'
                fz='1.8rem'
                maw='600px'>
                    A community marketplace built to help people discover local makers, 
                    see what they create, and connect directly. MeshMarket brings 
                    scattered local creators into one place where local demand can find 
                    local talent.
            </Text>
        
            <Button
                pos="absolute"
                top={'65%'}
                left={'25%'}
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