import {
	Flex,
	Heading,
	Text,
	Image,
	HStack,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Tag from './Tag';
import { tagColors } from '../lib/tagColors';

function PostPreview({ title, excerpt, imageUrl, views, tags }) {
	const { colorMode, toggleColorMode } = useColorMode();
	const borderColor = {
		light: 'gray.200',
		dark: 'gray.700',
	};
	return (
		<Flex
			justify="start"
			align="start"
			w="100%"
			borderBottom="1px solid"
			borderColor={borderColor[colorMode]}
		>
			<Image src={imageUrl} height={100} width={100} borderRadius="md" my={8} />
			<Flex
				justify="center"
				align="start"
				flexDir="column"
				py={8}
				p={8}
				w="100%"
			>
				<Heading as="h3" fontSize="1.2rem" mb={2}>
					{title}
				</Heading>

				<Text>{excerpt}</Text>
				<HStack spacing="1rem" mt={6}>
					{tags.map((tag) => (
						<Tag tagName={tag} color={tagColors[tag]} />
					))}
				</HStack>
			</Flex>
		</Flex>
	);
}

export default PostPreview;
