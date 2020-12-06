import { Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Flex justify="start" align="start" flexDir="column" mt={32}>
				<Heading size="xl" as="h1" mb={8}>
					Hey, I'm Dom
				</Heading>
				<Text>
					I'm a full-stack web developer and designer. This is my digital
					garden.
				</Text>
			</Flex>
			<Flex justify="start" align="center" flexDir="column" mt={32}>
				<Heading as="h2" fontSize="1.8rem">
					Lastest Posts
				</Heading>
			</Flex>
		</>
	);
}
