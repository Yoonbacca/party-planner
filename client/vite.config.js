import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return { 
    plugins: [react()],
    define: {
      'process.env.REACT_APP_RECAPTCHA_SITE_KEY': JSON.stringify(env.REACT_APP_RECAPTCHA_SITE_KEY),
      'process.env.REACT_APP_GOOGLE_API_KEY': JSON.stringify(env.REACT_APP_GOOGLE_API_KEY),
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/graphql': {
          target: 'http://localhost:3001',
        },
      },
    }
  }
})
