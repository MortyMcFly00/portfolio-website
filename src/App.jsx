{/* Mantine Imports */}
import { AppShell, Burger, Group, Button, MantineProvider, Image, Box, Title, Text, Overlay, OverflowList } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

{/* Image Imports */}
import logo from './assets/logo.png';
import me from './assets/me.jpg';
import samplePad from './assets/sample-pad.png';

{/* Component Imports */}
import Navbar from "./components/Navbar";

{/* Main Application */}
export default function App() {
    const [opened, { toggle }] = useDisclosure();
    return (
    <MantineProvider>
        <AppShell
            padding="md"
            header={{ height: 60 }}
        >
            <AppShell.Header>
                <Navbar />

            </AppShell.Header>

            <AppShell.Main>
                <Group justify="center" style={{ height: '100%', width: '100%' }}>
                    <div
                        style={{
                            position: 'relative',
                            width: '1700px',
                            height: '800px',
                            overflow: 'hidden'
                        }}>

                        <Carousel 
                        withIndicators 
                        height={800} 
                        width={400} 
                        slideSize="100%" 
                        slideGap="0" 
                        loop align="start" 
                        slidesToScroll={1}>

                            <Carousel.Slide>
                                <Image src={logo} 
                                alt="logo" 
                                fit="contain" 
                                style={{ 
                                    height: '100%', 
                                    width: '100%'
                                }} />
                            </Carousel.Slide> 

                            <Carousel.Slide>
                                <Box pos={"relative"}>
                                <Image src={me} 
                                alt="me" 
                                fit="contain" 
                                style={{ 
                                    height: '100%', 
                                    width: '100%', 
                                    transform: 'scale(1)',

                                    }} />

                                    <Overlay 
                                    color='#ffffff'
                                    backgroundOpacity={0.1}
                                    />

                                    <Title 
                                        pos={"absolute"}
                                        top={"2rem"}
                                        left={"9rem"}
                                        c={'white'}
                                        ff={'"Rubik", sans-serif'}
                                        fw={500}
                                        maw={'900px'}
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
                                        bottom={'39rem'}
                                        left={'11rem'}
                                        c={'white'}
                                        fw={450}
                                        style={{
                                            fontFamily: '"Assistant", sans-serif',
                                            fontSize: '2rem',
                                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.45)',
                                        }}
                                        >
                                        I build practical software projects that solve<br/>real-world
                                        problems while continuing to expand<br/>my skills across web
                                        development,<br/>full-stack systems, and AI.
                                    </Text>
                                    <Button
                                        pos="absolute"
                                        bottom="34rem"
                                        left="19rem"
                                        variant="white"
                                        color="dark"
                                        w={300}
                                        h={40}
                                        radius="xl"
                                        style={{
                                            fontFamily: '"Rubik", sans-serif',
                                            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                                        }}
                                    >
                                        About Me
                                    </Button>
                                </Box>
                            </Carousel.Slide>

                            <Carousel.Slide>

                                <Group
                                h="100%"
                                justify='space-between'
                                align= 'center'
                                px='xl'
                                >

                                    <Box style={{
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

                                        <Image src={samplePad} 
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
                                        fw={450}
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
                                            fundementals.
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
                            </Carousel.Slide>

                           {/*} <Carousel.Slide> //4
                                <Box pos={"relative"}>
                                <Image src={contact} 
                                alt="Contact" 
                                fit="contain" 
                                style={{ 
                                    height: '100%', 
                                    width: '100%' 
                                    
                                    }} />
                                </Box>
                            </Carousel.Slide> */}

                        </Carousel>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                            'linear-gradient(to right, white 0%, transparent 8%, transparent 92%, white 100%)',
                            pointerEvents: 'none',
                        }}
                        />
                    </div>
                </Group>
            </AppShell.Main>

        </AppShell>

    </MantineProvider>
    );
}