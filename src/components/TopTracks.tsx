import {
	Heading,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
} from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import Track from './Track';

const TopTracks = () => {
	const { data } = useSWR('/api/top-tracks', fetcher);

	if (!data) {
		return null;
	}

	return (
		<Accordion w="100%" allowToggle>
			<AccordionItem>
				<AccordionButton>
					<Flex justify="space-between" align="center" w="100%" py={8}>
						<Flex justify="center" align="start" flexDir="column">
							<Heading as="h2" fontSize="1.5rem" mb={4}>
								What I'm listening to
							</Heading>
							<Text>My top tracks tracks directly from Spotify's API.</Text>
						</Flex>
						<AccordionIcon />
					</Flex>
				</AccordionButton>
				<AccordionPanel>
					{data.tracks.map((track, index) => (
						<Track
							key={track.songUrl}
							index={index}
							title={track.title}
							artist={track.artist}
							songUrl={track.songUrl}
							imageUrl={track.imageUrl}
						/>
					))}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default TopTracks;
