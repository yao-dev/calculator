import PropTypes           from 'prop-types';
import Head                from 'next/head';
import { Container }       from './LayoutStyle';
import MadeWithLoveByMe    from 'components/MadeWithLoveByMe/MadeWithLoveByMe';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>

      <Container>
        { children }
        <MadeWithLoveByMe />
      </Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title:    PropTypes.string,
};

Layout.defaultProps = {
  title: 'Calculatrice',
};

export default Layout;
