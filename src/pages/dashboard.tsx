import { Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import TopTracks from '../components/TopTracks';

function DashboardPage() {
	const { colorMode, toggleColorMode } = useColorMode();
	const borderColor = {
		light: 'gray.200',
		dark: 'gray.700',
	};
	return (
		<Flex align="start" justify="center" flexDir="column" w="100%">
			<Flex justify="center" align="start" flexDir="column" mb={8} w="100%">
				<Heading as="h1" size="lg" mb={8}>
					Dashboard
				</Heading>
				<Text mb={8}>An overview of what I've been up to lately.</Text>
			</Flex>

			<TopTracks />
		</Flex>
	);
}

export default DashboardPage;
