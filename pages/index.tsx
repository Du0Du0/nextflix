import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to=[#141414]'>
			<Head>
				<title>NEXTFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main></main>
		</div>
	);
};

export default Home;
