const {
  moduleFederationRemoteTransformer,
} = require('@my-scope/webpack-transformers.mf-remote-transformer');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN,
  productionSiteName: 'mf-remote',
  stagingSiteName: 'mf-remote-staging',
};

const mfAbout = {
  name: 'about',
  portRange: [60000, 60000],
  entry: [require.resolve('./mf-remote.app-root')],
  webpackTransformers: [
    (config) => {
      return moduleFederationRemoteTransformer(
        config,
        null,
        require.resolve('./app')
      );
    },
  ],
  deploy: Netlify.deploy(netlifyOptions),
};

module.exports.default = mfAbout;
