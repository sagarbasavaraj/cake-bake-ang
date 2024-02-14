import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cake-bake-ang:serve:development',
        production: 'nx run cake-bake-ang:serve:production',
      },
      ciWebServerCommand: 'nx run cake-bake-ang:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
