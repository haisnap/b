# Volcengine ECS SSR CI/CD

This project is deployed as a Next.js SSR app. GitHub Actions builds a standalone Next.js server, uploads it to the Volcengine ECS instance over SSH, and restarts it with PM2.

Do not point `b.haisnap.com` to TOS for SSR. Keep the domain on the ECS or on a CDN/load balancer that forwards traffic to the ECS Node service.

## Required GitHub Secrets

- `VOLCENGINE_ECS_SSH_KEY`: Private SSH key that can log in to the ECS instance.

## Optional GitHub Secrets

- `VOLCENGINE_ECS_HOST`: ECS public IP or hostname. Defaults to `124.174.70.119`.
- `VOLCENGINE_ECS_USER`: SSH user. Defaults to `root`.
- `VOLCENGINE_ECS_PORT`: SSH port. Defaults to `22`.
- `VOLCENGINE_ECS_DEPLOY_PATH`: Release directory on the server. Defaults to `/www/wwwroot/b-haisnap`.
- `VOLCENGINE_ECS_APP_PORT`: Next.js app port. Defaults to `3000`.

Common aliases are also supported: `ECS_HOST`, `ECS_USER`, `ECS_PORT`, `ECS_DEPLOY_PATH`, `ECS_APP_PORT`, `ECS_SSH_KEY`, `SSH_HOST`, `SSH_USER`, `SSH_PORT`, and `SSH_PRIVATE_KEY`.

## Server Requirements

- Node.js 20 or newer.
- npm.
- Nginx or another reverse proxy forwarding `b.haisnap.com` to `127.0.0.1:3000`.
- HTTPS certificate configured on the reverse proxy or CDN.

The workflow installs PM2 automatically if it is missing and the SSH user has permission to install global npm packages.
