import { Flex } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';

const TopTracks = () => {
	const { data } = useSWR('/api/top-tracks', fetcher);

	if (!data) {
		return null;
	}

	return data.tracks.map((track, index) => (
		<Flex key={track.songUrl}>{track.artist}</Flex>
	));
};

export default TopTracks;
