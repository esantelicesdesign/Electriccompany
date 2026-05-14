import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { getSiteUrl, organizationJsonLd, siteName } from "../seo/site";
import { resolvePageMeta } from "../seo/routeMeta";

function canonicalUrl(pathname: string): string {
  const base = getSiteUrl();
  if (pathname === "/" || pathname === "") return `${base}/`;
  return `${base}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function RouteSeo() {
  const { pathname } = useLocation();
  const meta = resolvePageMeta(pathname);
  const canonical = canonicalUrl(pathname);
  const pageTitleFull = `${meta.title} | ${siteName}`;
  const ogImage = `${getSiteUrl()}/isologo_electric.svg`;

  return (
    <Helmet prioritizeSeoTags htmlAttributes={{ lang: "es" }} defaultTitle={siteName}>
      <title>{pageTitleFull}</title>

      <meta name="description" content={meta.description} />
      {meta.keywords ? <meta name="keywords" content={meta.keywords} /> : null}

      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitleFull} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitleFull} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index,follow,max-image-preview:large" />

      <meta name="theme-color" content="#041627" />

      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
    </Helmet>
  );
}
