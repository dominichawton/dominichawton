import { chakra, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import NowPlaying from './NowPlaying';

function Footer() {
	return (
		<chakra.footer w="100%" py={8}>
			<Flex
				justify="center"
				align="center"
				flexDir="column"
				maxW="900px"
				mx="auto"
				w="95%"
			>
				<NowPlaying />
				<Text fontSize=".8rem">&copy; Dominic Hawton 2020</Text>
			</Flex>
		</chakra.footer>
	);
}

export default Footer;
