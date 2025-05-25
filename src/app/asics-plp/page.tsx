import Image from 'next/image';
import styles from './page.module.css';
import plpMiroFilter from '../../../public/images/plp/plp-miro-filter.jpg';
import plpMiroInitial from '../../../public/images/plp/plp-miro-initial.jpg';

export default function AsicsPlp() {
  return (
    <>
      <div className={styles['plp-project-page-wrapper']}>
        <h1>ASICS E-Commerce Product Listing Page</h1>
        <h2>Goal</h2>
        <p>Rebuild the current PLP in Next.js using a design system to demonstrate that following a composable approach is a viable way to build the future of the ASICS e-commerce website​.</p>
        <video src="/videos/plp-desktop.webm" controls>
          Your browser does not support the video tag.
        </video>
        <h2>Goal Breakdown</h2>
        <ul>
          <li>
            Performance: Next.js PLP should load and run faster than the existing PLP
          </li>
          <li>
            Configurability: allow regions to make decisions of how their PLP looks
          </li>
          <li>
            Viability: This approach has to be fast and maintainable
          </li>
        </ul>
        <h2>The Plan</h2>
        <ul>
          <li>
            Build out our design system to include any missing components the PLP needs (skeleton, breadcrumbs, chips, etc) and make sure all components have tests using React Testing Library.
          </li>
          <li>
            Build a basic layout using mock/hard coded data (filters and 24 products listed)
          </li>
          <li>
            Build the calls to the SFCC APIs (shopper login, get products, get category)​
          </li>
          <li>
            Apply effects to the SFCC data (SFCC data into component props)
          </li>
          <li>
            Connect the UI to the data
          </li>
        </ul>
        <h2>Architecture</h2>
        <h3>Initial Load</h3>
        <Image alt="PLP initial load miro diagram" src={plpMiroInitial} style={{ height: '100%' }} />
        <h3>Filter Request</h3>
        <Image alt="PLP filter request miro diagram" src={plpMiroFilter} style={{ height: '100%' }} />
        <h2>Utilize Next.js Caching and Performance</h2>
        <ul>
          <li>
            Using getServerSideProps to make the calls to the SFCC APIs from the server
          </li>
          <li>
            Using getServerSideProps to make the calls to the SFCC APIs from the server
          </li>
          <li>
            Utilize SWR to call REST APIs
          </li>
          <li>
            Lazy load product images
          </li>
          <li>
            Offset based pagination
          </li>
          <li>
            Improved load times over the current PLP
          </li>
        </ul>
        <h2>Configurability With a CMS</h2>
        <p>Integrate with Contentstack to allow regions to configure:</p>
        <ul>
          <li>Banner</li>
          <li>Promo tile</li>
        </ul>
        <h2>Optimized For Mobile</h2>
        <video src="/videos/plp-mobile.webm" controls>
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};
