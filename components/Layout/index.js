/** @format */

import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from './styles';
import MadeWithLoveByMe from 'components/MadeWithLoveByMe';

const Layout = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<style>{`
					body {
						margin: 0px;
						padding: 0px;
						background: linear-gradient(to left, #8dc26f, #76b852);
						display: flex;
						flex-flow: row wrap;
						justify-content: center;
						font-family: sans-serif;
					}`}</style>
			</Head>

			<Container>
				{children}
				<MadeWithLoveByMe />
			</Container>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};

Layout.defaultProps = {
	title: 'Calculatrice',
};

export default Layout;
