import { defineConfig } from 'astro/config';
import myAdapter from '@astrojs/my-adapter';

export default defineConfig({
  output: 'server',
  adapter: myAdapter(),
});