import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Resume</title>
        </Head>
        <h1>Education</h1>
        <h3>University of California - Berkeley</h3>
        <h1>Work Experience</h1>
        <h3>Online Developer - The Daily Cal</h3>
        <h3>Dealer - Super Top Secret Startup</h3>
        <h3>USG Crisis - UCBMUN</h3>
        <h3>Director of Technology Intern - UCBMUN</h3>
        <h3>Software Engineer Intern - Blossom's Farms</h3>
        <h3>Developer - Dew Study</h3>
        <h3>Developer - Lutis</h3>
      </Layout>
    </>
  );
}
