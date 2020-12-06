import React from 'react';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

function PostPage({ postData }) {
	return (
		<>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
			<br />
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export default PostPage;
