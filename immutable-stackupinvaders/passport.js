window.passport = new window.immutable.passport.Passport({
  baseConfig: new window.immutable.config.ImmutableConfiguration({
    environment: window.immutable.config.Environment.SANDBOX,
  }),
  clientId: '2wsNvO0i7YCJiUPIt6lJ7cuayaM0Zgjp',
  redirectUri: 'https://albacore-creative-partially.ngrok-free.app/',
  logoutRedirectUri: 'https://albacore-creative-partially.ngrok-free.app/logout.html',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
});