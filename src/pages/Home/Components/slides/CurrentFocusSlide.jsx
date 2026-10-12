{/* Mantine Imports */}
import { Box, Group, Title, Text } from "@mantine/core";

{/* Font Imports */}
import '@fontsource/assistant/300.css';
import '@fontsource/assistant/400.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/500.css';

function CurrentFocusSlide() {
    return (
        <Box
            pos="relative"
            h="100%"
            w="100%"
        >
            {/* White Card */}
            <Box
                pos="absolute"
                w="93%"
                h="96%"
                top="2%"
                left="3.5%"
                style={{
                    background: "#ffffff",
                    borderRadius: "25px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.22)",
                }}
            />

            {/* Main Grid Card */}
            <Group
                pos="absolute"
                w="90%"
                h="90%"
                top="5%"
                left="5%"
                justify="space-between"
                align="center"
                gap="xl"
                p="xl"
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
            >
                <Box
                    style={{
                        flex: '1 1 350px',
                    }}
                >
                    <Text
                        c="#707070"
                        ff='"Rubik", sans-serif'
                        fw={300}
                        fz="1.1rem"
                        mb="md"
                    >
                        CURRENT FOCUS:
                    </Text>

                    <Title
                        c="#070707"
                        ff='"Rubik", sans-serif'
                        fw={400}
                        mb="xl"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                            lineHeight: 1.1,
                        }}
                    >
                        Python Foundations
                    </Title>

                    <Text
                        ff='"Assistant", sans-serif'
                        fw={300}
                        maw={600}
                        style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        }}
                    >
                        Strengthening my Python fundamentals through Boot.dev in
                        preparation for upcoming artificial intelligence coursework
                        and future machine learning projects.
                    </Text>
                </Box>

                <Box
                    p="xl"
                    style={{
                        flex: '1 1 300px',
                        maxWidth: '500px',
                        background: '#ffffff',
                        borderRadius: '25px',
                        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Title
                        order={2}
                        ff='"Rubik", sans-serif'
                        fw={400}
                        mb="md"
                    >
                        Learning with Boot.dev
                    </Title>

                    <Text
                        ff='"Assistant", sans-serif'
                        fw={400}
                        fz="1.3rem"
                    >
                        My current focus is building a stronger foundation in
                        Python before taking on personal machine learning projects.
                    </Text>
                </Box>
            </Group>
        </Box>
    );
}

export default CurrentFocusSlide;
