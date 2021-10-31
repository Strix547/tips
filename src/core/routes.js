export const ROUTE_NAMES = {
  RECIPIENTS: '/recipients',
  BUSINESS: '/business',
  PAYERS: '/payers',
  AGENTS: '/agents',
  SUPPORT: '/support',
  AUTH: '/auth',
  ABOUT_US: '/about-us',
  CREDENTIALS: '/credentials',
  PRIVACY_POLICY: '/privacy-policy',
  PUBLIC_OFFER: '/public-offer',
  FAQ: '/faq',

  ACCOUNT: '/account',
  FOR_AGENTS: '/account/for-agents',

  ACCOUNT_QR_CODES: '/account/qr-codes',
  QR_CODE: '/qr-codes/[id]',
  ACCOUNT_QR_INDIVIDUALS_CREATE: '/account/qr-codes/individuals/create',
  ACCOUNT_QR_INDIVIDUALS_EDIT: '/account/qr-codes/individuals/[id]/edit',
  ACCOUNT_QR_INDIVIDUALS_STATISTICS: '/account/qr-codes/individuals/[id]/statistics',

  ACCOUNT_QR_PLATFORMS_EDIT: '/account/qr-codes/platforms/[id]/edit',
  ACCOUNT_QR_PLATFORMS_STATISTICS: '/account/qr-codes/platforms/[id]/statistics',

  ACCOUNT_PLATFORMS: '/account/platforms',
  ACCOUNT_PLATFORMS_EDIT: '/account/platforms/[id]/edit',
  ACCOUNT_PLATFORMS_STATISTICS: '/account/platforms/[id]/statistics',
  ACCOUNT_PLATFORMS_CREATE: '/account/platforms/create',

  ACCOUNT_REQUISITES: '/account/requisites',
  ACCOUNT_EMPLOYEES: '/account/employees',
  ACCOUNT_EMPLOYEE_CREATE: '/account/employees/create',
  ACCOUNT_EMPLOYEE_EDIT: '/account/employees/[id]/edit',
  ACCOUNT_EMPLOYEE_STATISTICS: '/account/employees/[id]/statistics',

  ACCOUNT_REVIEWS: '/account/reviews',
  ACCOUNT_IDENTIFY: '/account/identify',
  ACCOUNT_PERSONAL_DATA: '/account/personal-data',
  ACCOUNT_SUPPORT: '/account/support',
  ACCOUNT_LOYALTY: '/account/loyalty',
  ACCOUNT_UPGRADE_TO_BUSINESS: '/account/upgrade',

  THANK_YOU: '/thank-you',
  FAIL: '/fail',

  ADMIN_USERS: '/admin/users',
  ADMIN_USERS_EDIT: '/admin/users/[id]/edit',
  ADMIN_USERS_STATISTICS: '/admin/users/[id]/statistics',
  ADMIN_PAYMENT_STATISTICS: '/admin/payment-statistics',
  ADMIN_COMISSIONS: '/admin/comissions'
}

export const ROUTES = [
  { path: ROUTE_NAMES.RECIPIENTS },
  { path: ROUTE_NAMES.BUSINESS },
  { path: ROUTE_NAMES.PAYERS },
  { path: ROUTE_NAMES.AGENTS },
  { path: ROUTE_NAMES.SUPPORT },
  { path: ROUTE_NAMES.ABOUT_US },
  { path: ROUTE_NAMES.CREDENTIALS },
  { path: ROUTE_NAMES.PRIVACY_POLICY },
  { path: ROUTE_NAMES.PUBLIC_OFFER },
  { path: ROUTE_NAMES.FAQ },
  { path: ROUTE_NAMES.AUTH },
  { path: ROUTE_NAMES.QR_CODE },
  { path: ROUTE_NAMES.FAIL },

  { path: ROUTE_NAMES.ACCOUNT, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_IDENTIFY, isProtected: true },

  { path: ROUTE_NAMES.ACCOUNT_QR_CODES, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_EDIT, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_STATISTICS, isProtected: true },

  { path: ROUTE_NAMES.ACCOUNT_PLATFORMS, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_PLATFORMS_EDIT, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_PLATFORMS_CREATE, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_PLATFORMS_STATISTICS, isProtected: true, role: 'BUSINESS' },

  { path: ROUTE_NAMES.ACCOUNT_QR_PLATFORMS_EDIT, isProtected: true, role: 'BUSINESS' },

  { path: ROUTE_NAMES.ACCOUNT_REQUISITES, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_EMPLOYEES, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_EMPLOYEE_CREATE, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_EMPLOYEE_EDIT, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_EMPLOYEE_STATISTICS, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_REVIEWS, isProtected: true, role: 'BUSINESS' },
  { path: ROUTE_NAMES.ACCOUNT_PERSONAL_DATA, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_SUPPORT, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_LOYALTY, isProtected: true },
  { path: ROUTE_NAMES.ACCOUNT_UPGRADE_TO_BUSINESS, isProtected: true },

  { path: ROUTE_NAMES.ADMIN_USERS, isProtected: true },
  { path: ROUTE_NAMES.ADMIN_USERS_EDIT, isProtected: true, role: 'ADMIN' },
  { path: ROUTE_NAMES.ADMIN_USERS_STATISTICS, isProtected: true, role: 'ADMIN' },
  { path: ROUTE_NAMES.ADMIN_PAYMENT_STATISTICS, isProtected: true, role: 'ADMIN' },
  { path: ROUTE_NAMES.ADMIN_COMISSIONS, isProtected: true, role: 'ADMIN' }
]
