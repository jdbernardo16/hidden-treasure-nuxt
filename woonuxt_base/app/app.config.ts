/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Hidden Treasures',
  shortDescription: 'Turn Visions, To Victories',
  description: `Hidden Treasures is a top marketing team specializing in strategic campaigns, targeted ads, and consignment solutions. We deliver measurable results, helping businesses and individuals excel with tailored strategies.`,
  baseUrl: 'https://ht.uatproject.website/',
  siteImage: 'https://uatproject.website/ht.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
