import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function AboutPage() {
	return (
		<Flex flexDir="column">
			<Heading as="h1" size="lg" mb={6}>
				About
			</Heading>
			<Text>
				Hey, I'm Dom 👋 I'm a full-stack web developer and designer. I was born
				and raised in Byron Bay but I'm now based in Sydney, Australia. I
				curerntly work for MindSpot helping create an accessible mental-health
				platform for all Australians. When I'm not working, I'm usually either
				reading, running, or writing.
			</Text>
		</Flex>
	);
}

export default AboutPage;
