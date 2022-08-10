/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_URL = 'http://localhost:3000/';

export default defineConfig({
  e2e: {
    viewportWidth: 320,
    viewportHeight: 600,
    setupNodeEvents(on, config) {
      /* eslint-disable no-param-reassign */
      config.env = config.env || {};

      config.baseUrl = process.env.REACT_APP_E2E_BASE_URL || DEFAULT_URL;
      config.env.username = process.env.REACT_APP_E2E_USER;
      config.env.password = process.env.REACT_APP_E2E_PASS;

      return config;
    },
  },
});
