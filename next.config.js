const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr, withSentryConfig], { future: { webpack5: true } });
