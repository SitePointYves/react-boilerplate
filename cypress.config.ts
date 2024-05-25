import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    video: true,
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
    },
  },
});
