{/* Mantine Imports */}
import { AppShell, Group, MantineProvider, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { Routes, Route } from 'react-router-dom';

{/* Page Imports */}
import About from "./pages/About/AboutPage";
import Projects from "./pages/projects/ProjectsPage";
import Contact from "./pages/Contact/ContactPage";

{/* Component Imports */}
import Navbar from "./components/Navbar";
import PortfolioCarousel from './pages/Home/Components/PortfolioCarousel';


{/* Main Application */}
export default function App() {
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
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Group 
                                justify="center" 
                                style={{ 
                                    height: '100%', 
                                    width: '100%' 
                                }}
                            >
                                <Box
                                    style={{
                                        position: 'relative',
                                        width: '1700px',
                                        height: '800px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <PortfolioCarousel />
                                </Box>
                            </Group>
                        }
                    />

                    <Route 
                        path='/about' 
                        element={<About />}
                    />
                    <Route 
                        path='/projects' 
                        element={<Projects />} 
                    />
                    <Route 
                        path='/contact' 
                        element={<Contact />} 
                    />
                </Routes>
            </AppShell.Main>

        </AppShell>

    </MantineProvider>
    );
}
