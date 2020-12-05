import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TopTracks from '../components/TopTracks';

function DashboardPage() {
	return (
		<Flex align="start" justify="center" flexDir="column">
			<Heading as="h1" size="lg" mb={8}>
				Dashboard
			</Heading>
			<Text>An overview of what I've been up to lately.</Text>
			<TopTracks />
		</Flex>
	);
}

export default DashboardPage;
