import '@mantine/core/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppShell header={{ height: 60 }} padding="md">
          <AppShell.Header>
            <Navbar />
          </AppShell.Header>

          <AppShell.Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}
