import task from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // retries: 2,
    baseUrl: 'http://localhost:3000',
    screenshotOnRunFailure: true,
    experimentalStudio: true,
    video: true,
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
  },
});
