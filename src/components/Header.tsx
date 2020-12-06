import React from 'react';
import { Button, color, Flex, Heading, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();
	const activeColor = {
		light: 'gray.900',
		dark: 'gray.100',
	};
	return (
		<Flex justify="space-between" align="center" w="100%" py={16}>
			<Link href="/">
				<a>
					<Heading as="h2" size="lg">
						DH
					</Heading>
				</a>
			</Link>
			<Flex justify="center" align="center">
				<NavLink
					href="/dashboard"
					color={
						router.pathname === '/dashboard'
							? activeColor[colorMode]
							: 'gray.500'
					}
					ml={16}
				>
					Dashboard
				</NavLink>
				<NavLink
					href="/blog"
					color={
						router.pathname === '/blog' ? activeColor[colorMode] : 'gray.500'
					}
					ml={16}
				>
					Blog
				</NavLink>
				<NavLink
					href="/about"
					color={
						router.pathname === '/about' ? activeColor[colorMode] : 'gray.500'
					}
					ml={16}
				>
					About
				</NavLink>
				<NavLink
					href="/contact"
					color={
						router.pathname === '/contact' ? activeColor[colorMode] : 'gray.500'
					}
					ml={16}
				>
					Contact
				</NavLink>
				<Button onClick={toggleColorMode} ml={16}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Flex>
		</Flex>
	);
}

export default Header;
