const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr, withSentryConfig], { webpack5: true });
