// Datei in Projektordner für pm2 Konfiguration

module.exports = {
  apps: [
    {
      name: 'gesine',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/gesine',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
    },
  ],
}