/* eslint-env meteor */
Package.describe({
  name: 'mrspark:accounts-lea',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Custom login using an own oauth2-server',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/meteor-accounts-lea.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('3.0.4')
  api.use('ecmascript')
  api.use('accounts-base', ['client', 'server'])

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server'])
  api.use('accounts-oauth', ['client', 'server'])
  api.use('mrspark:oauth-lea@1.0.3')
  api.imply('mrspark:oauth-lea')

  // If users use accounts-ui but not facebook-config-ui, give them a tip.
  api.use(['accounts-ui', 'facebook-config-ui'], ['client', 'server'], { weak: true })
  api.addFiles('notice.js')

  api.addFiles('accounts-lea.js')
  api.export('Lea')
})
