import React from 'react';
import { Helmet } from 'react-helmet';
import OurCompanies from '@/components/OurCompanies';

const CompaniesPage = () => (
  <div className="groish-page-shell pt-20">
    <Helmet>
      <title>Inside GROISH | Our Companies and Business Ecosystem</title>
      <meta name="description" content="Explore the GROISH business ecosystem: WebCore360, TransMedEx, and E-commerce / Amazon Operations, each operating with a distinct market focus inside one parent organization." />
      <link rel="canonical" href="https://groish.com/companies" />
      <meta property="og:title" content="Inside GROISH | Our Companies and Business Ecosystem" />
      <meta property="og:description" content="Meet the specialized businesses operating within the GROISH ecosystem across technology, healthcare revenue-cycle operations, and digital commerce." />
      <meta property="og:url" content="https://groish.com/companies" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Corporation',
        name: 'GROISH',
        url: 'https://groish.com/companies',
        description: 'GROISH is the parent organization behind a diversified ecosystem of specialized businesses.',
        subOrganization: [
          { '@type': 'Organization', name: 'WebCore360' },
          { '@type': 'Organization', name: 'TransMedEx' },
          { '@type': 'Organization', name: 'E-commerce / Amazon Operations' },
        ],
      })}</script>
    </Helmet>
    <OurCompanies />
  </div>
);

export default CompaniesPage;
