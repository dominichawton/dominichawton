import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function PostPreview({ title, excerpt }) {
	return (
		<Flex
			justify="start"
			align="center"
			flexDir="column"
			py={8}
			border="1px solid"
			borderColor="gray.200"
			borderRadius="md"
		>
			<Heading as="h3" fontSize="1.5rem">
				{title}
			</Heading>
			<Text>{excerpt}</Text>
		</Flex>
	);
}

export default PostPreview;
