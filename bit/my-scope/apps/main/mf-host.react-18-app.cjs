const {
  moduleFederationHostransformer,
} = require('@my-scope/webpack-transformers.mf-host-transformer');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  productionSiteName: 'mf-host',
  stagingSiteName: 'mf-host-staging',
};

/** @type {import("@teambit/react.apps.react-app-types").ReactAppType} */
module.exports.default = {
  name: 'main',
  entry: [require.resolve('./mf-host.app-root')],
  portRange: [3020, 3030],
  webpackTransformers: [moduleFederationHostransformer],
  deploy: Netlify.deploy(netlifyOptions),
};
