import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import TopTracks from '../components/TopTracks';

function AboutPage() {
	return (
		<Flex flexDir="column">
			<Heading as="h1" size="lg" mb={6}>
				About
			</Heading>
			<Flex align="start" justify="space-between" mb={32}>
				<Text>
					Hey, I'm Dom 👋 I'm a full-stack web developer and designer. I was
					born and raised in Byron Bay but I'm now based in Sydney, Australia. I
					currently work at MindSpot helping provide accessible mental-health
					care for all Australians. When I'm not working, I'm usually either
					reading, running, or writing.
				</Text>
				<Image
					src={'/static/images/dom.jpg'}
					height={250}
					width={250}
					borderRadius="xl"
					ml={24}
					shadow="md"
				/>
			</Flex>
			<TopTracks />
		</Flex>
	);
}

export default AboutPage;
