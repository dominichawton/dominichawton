import {
	Box,
	Flex,
	Heading,
	Link,
	Text,
	useColorMode,
	Image,
} from '@chakra-ui/react';
import React from 'react';

function Track({ title, artist, songUrl, index, imageUrl }) {
	const { colorMode, toggleColorMode } = useColorMode();
	const borderColor = {
		light: 'gray.200',
		dark: 'gray.700',
	};
	return (
		<Flex
			align="start"
			justify="start"
			w="100%"
			borderTop="1px solid"
			borderColor={borderColor[colorMode]}
			py={6}
		>
			<Flex align="center" justify="center" w="3rem">
				<Heading size="sm" color="gray.500">
					{index + 1}
				</Heading>
			</Flex>

			<Image
				src={imageUrl}
				width={50}
				height={50}
				borderRadius="md"
				shadow="md"
			/>

			<Flex justify="center" align="start" flexDir="column" ml={8}>
				<Link href={songUrl} target="_blank">
					{title}
				</Link>
				<Text color="gray.500" mb={0} mt={2} fontSize=".8rem">
					{artist}
				</Text>
			</Flex>
		</Flex>
	);
}

export default Track;
