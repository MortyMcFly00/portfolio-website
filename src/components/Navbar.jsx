import { Anchor, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Group h="100%" px="md" justify="space-between" wrap="wrap">
      <Anchor component={Link} to="/" underline="never" fw={700} size="lg" c="inherit">
        Matt McPhail
      </Anchor>

      <Group gap="xs">
        <Button component={Link} to="/about" variant="subtle">
          About Me
        </Button>
        <Button component={Link} to="/projects" variant="subtle">
          Projects
        </Button>
        <Button component={Link} to="/resume" variant="subtle">
          Resume
        </Button>
      </Group>
    </Group>
  );
}
