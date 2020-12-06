import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

import PostPreview from '../components/PostPreview';
import { postData } from '../data/db';

export default function Home() {
	return (
		<>
			<Flex justify="start" align="start" flexDir="column" mt={32}>
				<Heading size="xl" as="h1" mb={8}>
					Hey, I'm Dom
				</Heading>
				<Text>
					I'm a full-stack web developer and designer. Welcome to my corner of
					the internet.
				</Text>
			</Flex>
			<Flex justify="start" align="start" flexDir="column" mt={32}>
				<Heading as="h2" fontSize="1.8rem" mb={4}>
					Lastest Posts
				</Heading>

				{postData.map((post) => (
					<PostPreview
						title={post.title}
						imageUrl={post.thumbnailUrl}
						excerpt={post.excerpt}
						views={post.views}
						tags={post.tags}
					/>
				))}
			</Flex>
		</>
	);
}
