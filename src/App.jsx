{/* Mantine Imports */}
import { AppShell, Burger, Group, Button, MantineProvider, Image, Box, Title, Text, Overlay, OverflowList } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

{/* Component Imports */}
import Navbar from "./components/Navbar";
import PortfolioCarousel from './components/PortfolioCarousel';

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
                <Group 
                    justify="center" 
                    style={{ 
                        height: '100%', 
                        width: '100%' 
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '1700px',
                            height: '800px',
                            overflow: 'hidden'
                        }}
                    >
                        <PortfolioCarousel />

                        
                    </div>

                </Group>
            </AppShell.Main>

        </AppShell>

    </MantineProvider>
    );
}