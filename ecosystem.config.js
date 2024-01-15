module.exports = {
  apps: [
    {
      script: 'dist/index.js',
      name: 'prod_api',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      merge_logs: true,
      env: {
        PORT: 8000,
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'yarn install && yarn run build && pm2 reload ecosystem.config.js --only prod_api',
      'pre-setup': '',
    },
  },
};
