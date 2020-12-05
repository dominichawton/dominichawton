import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
	children: any;
}

function Layout({ children }) {
	return (
		<Flex
			justify="center"
			align="center"
			maxW="900px"
			mx="auto"
			w="95%"
			flexDir="column"
			minH="100vh"
		>
			<Flex
				justify="start"
				align="start"
				flexDir="column"
				flexGrow={2}
				w="100%"
			>
				<Header />
				{children}
			</Flex>
			<Footer />
		</Flex>
	);
}

export default Layout;
