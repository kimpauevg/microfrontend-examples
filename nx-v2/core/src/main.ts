import('./bootstrap');
import { setRemoteDefinitions } from '@nx-v2/load-remote-module';
fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
