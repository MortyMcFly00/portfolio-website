{/* Mantine Imports */}
import { Center, Image, Box, Group } from "@mantine/core";

{/* Image Imports */}
import logo from "../../assets/logo.png";

function BrandSlide() {
    return (
        <Group>
            
            {/* White Card */}
            <Box
                pos={'absolute'}
                w={'93%'}
                h={'96%'}
                top={'1rem'}
                left={'3.5%'}
                style={{
                    background: '#ffffff',
                    borderRadius: '25px',
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)",
                    zIndex: 0,
                }}
            />

            {/* Logo */}
            <Center
                pos={'absolute'}
                inset={0}
                style={{
                    zIndex:1,
                }}
            >
                <Image 
                    src={logo} 
                    alt="logo"
                    w="38rem"
                    h= "38rem"
                    fit="contain"
                    style={{
                        transform: 'scale(.95)'
                    }}
                />
            </Center>
        </Group>
    );
}

export default BrandSlide;