import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

interface TagProps {
	color?: string;
	tagName: any;
}

function Tag({ color = 'gray', tagName = 'undefined' }: TagProps) {
	return (
		<Link _hover={{ textDecoration: 'none' }}>
			<Flex
				justify="center"
				align="center"
				py="0.1rem"
				px={3}
				backgroundColor={`${color}.100`}
				borderRadius="3rem"
				transition=".15s all linear"
				_hover={{ backgroundColor: color + '.50', shadow: 'md' }}
			>
				<Text fontWeight="600" color={`${color}.800`} fontSize=".75rem">
					{tagName}
				</Text>
			</Flex>
		</Link>
	);
}

export default Tag;
