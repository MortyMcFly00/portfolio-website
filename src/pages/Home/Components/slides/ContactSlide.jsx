{/* Mantine Imports */}
import { Image, Overlay, Title, Text, Button, Box, Group } from "@mantine/core";

{/* React-Router Imports */}
import { Link } from "react-router-dom";

{/* Image Imports */}
import me from "../../assets/me.jpg";

{/* Font Imports */}
import '@fontsource/Assistant/300.css';
import '@fontsource/Assistant/400.css';
import '@fontsource/Rubik/300.css';
import '@fontsource/Rubik/500.css';

    function ContactSlide() {
        return (
            
            <Box 
                pos={"relative"}
                h="100%"
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

                {/* Left Contrast Gradient */}
                <Box
                    pos="absolute"
                    top="5%"
                    left="5%"
                    w="55%"
                    h="90%"
                    style={{
                        zIndex: 1,
                        borderRadius: "25px 0 0 25px",
                        background: `
                            linear-gradient(
                                to right,
                                rgba(170, 170, 170, 0.72) 0%,
                                #7a7a7ac7 .1%,
                                rgba(148, 147, 147, 0.25) 82%,
                                transparent 100%
                            )
                        `,
                        pointerEvents: "none",
                    }}
                />
                
                <Title 
                    pos={"absolute"}
                    top={"12%"}
                    left={"9%"}
                    c={'white'}
                    ff={'"Rubik", sans-serif'}
                    fw={500}
                    maw={'950px'}
                    fz={'4rem'}
                    style={{ 
                        zIndex: 2,
                        fontFamily: '"Rubik", sans-serif',
                        fontSize: "3.8rem",
                        lineHeight: 1.1,
                        textShadow: '0 2px 4px rgba(90, 90, 90, 0.7), 0 4px 12px rgba(90, 90, 90, 0.45)',
                    }}
                >
                    Ready for the Next
                    <br />
                    Challenge
                </Title>

                {/* Supporting Text */}                                   
                <Text
                    pos={'absolute'}
                    top={'35%'}
                    left={'10%'}
                    w="38%"
                    c={'white'}
                    fw={400}
                    style={{
                        zIndex: 2,
                        fontFamily: '"Assistant", sans-serif',
                        fontSize: '1.7rem',
                        textShadow: 
                        '0 2px 4px rgba(90, 90, 90, 0.7), 0 4px 12px rgba(90, 90, 90, 0.45)',
                    }}
                >
                    You&apos;ve seen what I&apos;ve built, what I&apos;m building,
                    and how I approach problems. The next prompt is yours.

                </Text>
                {/* Buttons */}
                <Group
                    pos={'absolute'}
                    top={'53%'}
                    left={'17%'}
                    gap='md'
                    style={{
                        zIndex: 2,
                    }}
                >

                    <Button
                        component="a"
                        href="/resume.pdf"
                        download
                        variant='default'
                        color="dark"
                        w={200}
                        radius="xl"
                        style={{
                            fontFamily: '"Rubik", sans-serif',
                            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        Download Resume
                    </Button>

                    <Button
                        component={Link} to="/contact"
                        variant="default"
                        color="dark"
                        radius={'xl'}
                        w={180}
                        style={{
                            zIndex: 2,
                            fontFamily: '"Rubik", sans-serif',
                            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        Contact Me
                    </Button>

                    {/* Terminal Frame */}
                    <Box
                        pos="absolute"
                        top={'-300%'}
                        left="158%"
                        w="145%"
                        p="md"
                        style={{
                            zIndex: 2,
                            background: "#d9d9d9",
                            borderRadius: "25px",
                            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.20)",
                        }}
                    >
                        {/* Actual Terminal */}
                        <Box
                            p="xl"
                            style={{
                                background: "#121212",
                                borderRadius: "20px",
                                minHeight: "320px",
                            }}
                        >

                            {/* Terminal Window Controls */}
                            <Group gap="xs" mb="xl">
                                <Box
                                    w={12}
                                    h={12}
                                    style={{
                                        borderRadius: "50%",
                                        background: "#ff5f57",
                                    }}
                                />

                                <Box
                                    w={12}
                                    h={12}
                                    style={{
                                        borderRadius: "50%",
                                        background: "#28c840",
                                    }}
                                />
                            </Group>

                            <Text
                                c="#9e9e9e"
                                mb="lg"
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: "1rem",
                                }}
                            >
                                matt@portfolio:~/landing-page/ContactSlide$
                            </Text>

                            <Text
                                c="white"
                                mb="lg"
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: "1.25rem",
                                }}
                            >
                                prompt&gt; What should we build next?
                            </Text>

                            <Text
                                c="#b8b8b8"
                                mb="sm"
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: "1rem",
                                }}
                            >
                                status: open to opportunities
                            </Text>

                            <Text
                                c="#b8b8b8"
                                mb="xl"
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: "1rem",
                                }}
                            >
                                awaiting input...
                            </Text>

                            <Text
                                c="white"
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: "1.2rem",
                                }}
                            >
                                &gt; _
                            </Text>

                        </Box>
                    </Box>
                </Group>
            </Box>
        );
    }

export default ContactSlide;