import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function ContactPage() {
	return (
		<Flex flexDir="column">
			<Heading as="h1" size="lg" mb={4}>
				Contact
			</Heading>
			<Text>I'm always keen to start new projects and meet new people.</Text>
		</Flex>
	);
}

export default ContactPage;
