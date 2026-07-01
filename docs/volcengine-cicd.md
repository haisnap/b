# Volcengine TOS CI/CD

This project builds a static Next.js site and deploys the exported `out/` directory to Volcengine TOS from GitHub Actions.

## Required GitHub Secrets

- `VOLCENGINE_TOS_ACCESS_KEY_ID`: Volcengine access key ID.
- `VOLCENGINE_TOS_SECRET_ACCESS_KEY`: Volcengine secret access key.
- `VOLCENGINE_TOS_REGION`: TOS region, for example `cn-beijing`.
- `VOLCENGINE_TOS_BUCKET`: Target TOS bucket name.
- `VOLCENGINE_TOS_ENDPOINT`: S3-compatible TOS endpoint for the bucket region.

The workflow also accepts these aliases:

- Access key ID: `VOLCENGINE_ACCESS_KEY_ID`, `TOS_ACCESS_KEY_ID`, or `AWS_ACCESS_KEY_ID`.
- Secret access key: `VOLCENGINE_SECRET_ACCESS_KEY`, `TOS_SECRET_ACCESS_KEY`, or `AWS_SECRET_ACCESS_KEY`.
- Region: `VOLCENGINE_REGION`, `TOS_REGION`, or `AWS_DEFAULT_REGION`.
- Bucket: `VOLCENGINE_BUCKET` or `TOS_BUCKET`.
- Endpoint: `TOS_ENDPOINT`.

## Optional GitHub Secrets

- `VOLCENGINE_TOS_PREFIX`: Object prefix inside the bucket. Leave empty when the site is served from the bucket root.
- `VOLCENGINE_TOS_ACL`: Optional ACL such as `public-read`. Leave empty when access is controlled by bucket policy or CDN origin settings.
- `VOLCENGINE_CDN_REFRESH_WEBHOOK`: Optional HTTP endpoint that refreshes CDN cache after upload.
- `VOLCENGINE_CDN_REFRESH_TOKEN`: Optional bearer token for the CDN refresh webhook.

## Local Commands

```bash
npm install
npm run build
```

The static output will be generated into `out/`.
