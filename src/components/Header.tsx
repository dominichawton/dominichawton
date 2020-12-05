import React from 'react';
import { color, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();
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
					color={router.pathname === '/dashboard' ? 'black' : 'gray'}
					ml={32}
				>
					Dashboard
				</NavLink>
				<NavLink
					href="/blog"
					color={router.pathname === '/blog' ? 'black' : 'gray'}
					ml={32}
				>
					Blog
				</NavLink>
				<NavLink
					href="/about"
					color={router.pathname === '/about' ? 'black' : 'gray'}
					ml={32}
				>
					About
				</NavLink>
				<NavLink
					href="/contact"
					color={router.pathname === '/contact' ? 'black' : 'gray'}
					ml={32}
				>
					Contact
				</NavLink>
			</Flex>
		</Flex>
	);
}

export default Header;
