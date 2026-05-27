import { Metadata } from 'next';
import { getHomepageMetadata } from '@/lib/seo';
import { HomeDashboard } from '@/components/HomeDashboard';
import { getHomepageAEO } from '@/lib/global-aeo-content';
import { generateWebSiteSchema, generateFAQSchema } from '@/lib/seo-advanced';
import { generateEnhancedOrganizationSchema } from '@/lib/seo-worldclass';

export const metadata: Metadata = getHomepageMetadata();

export default function Home() {
  const aeoContent = getHomepageAEO();
  const websiteSchema = generateWebSiteSchema();
  const orgSchema = generateEnhancedOrganizationSchema();
  const faqSchema = generateFAQSchema(aeoContent.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeDashboard />
    </>
  );
}
