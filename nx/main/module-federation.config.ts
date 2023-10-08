import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['about'],
};

export default config;
