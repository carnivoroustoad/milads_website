import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Hi! I'm Milad. I love Next JS.</h2>
        <Link href="resume"><h2>Read my resume!</h2></Link>
        <a href="mailto:miladbrown@berkeley.edu?subject=Hi%20Milad!"><h2>Shoot me an email!</h2></a>
      </section>
    </Layout>
  );
}
