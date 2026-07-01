# Volcengine TOS CI/CD

This project builds a static Next.js site and deploys the exported `out/` directory to Volcengine TOS from GitHub Actions.

## Required GitHub Secrets

- `VOLCENGINE_TOS_ACCESS_KEY_ID`: Volcengine access key ID.
- `VOLCENGINE_TOS_SECRET_ACCESS_KEY`: Volcengine secret access key.
- `VOLCENGINE_TOS_REGION`: TOS region, for example `cn-beijing`.
- `VOLCENGINE_TOS_BUCKET`: Target TOS bucket name.
- `VOLCENGINE_TOS_ENDPOINT`: S3-compatible TOS endpoint for the bucket region.

The workflow also accepts these aliases:

- Access key ID: `VOLCENGINE_TOS_ACCESS_KEY`, `VOLCENGINE_ACCESS_KEY_ID`, `VOLCENGINE_ACCESS_KEY`, `VOLCENGINE_ACCESSKEY`, `VOLC_ACCESS_KEY_ID`, `VOLC_ACCESS_KEY`, `VOLC_ACCESSKEY`, `TOS_ACCESS_KEY_ID`, `TOS_ACCESS_KEY`, `ACCESS_KEY_ID`, `AWS_ACCESS_KEY_ID`, `VOLCENGINE_TOS_AK`, `VOLCENGINE_AK`, `VOLC_AK`, or `TOS_AK`.
- Secret access key: `VOLCENGINE_TOS_SECRET_KEY`, `VOLCENGINE_SECRET_ACCESS_KEY`, `VOLCENGINE_SECRET_KEY`, `VOLCENGINE_SECRETKEY`, `VOLCENGINE_ACCESS_KEY_SECRET`, `VOLC_SECRET_ACCESS_KEY`, `VOLC_SECRET_KEY`, `VOLC_SECRETKEY`, `VOLC_ACCESS_KEY_SECRET`, `TOS_SECRET_ACCESS_KEY`, `TOS_SECRET_KEY`, `TOS_ACCESS_KEY_SECRET`, `SECRET_ACCESS_KEY`, `ACCESS_KEY_SECRET`, `AWS_SECRET_ACCESS_KEY`, `VOLCENGINE_TOS_SK`, `VOLCENGINE_SK`, `VOLC_SK`, or `TOS_SK`.
- Region: `VOLCENGINE_REGION`, `VOLC_REGION`, `TOS_REGION`, `REGION`, or `AWS_DEFAULT_REGION`.
- Bucket: `VOLCENGINE_BUCKET`, `VOLC_BUCKET`, `TOS_BUCKET`, or `S3_BUCKET`.
- Endpoint: `VOLCENGINE_ENDPOINT`, `VOLC_ENDPOINT`, `TOS_ENDPOINT`, `S3_ENDPOINT`, or `AWS_ENDPOINT_URL_S3`.

`VOLCENGINE_TOS_REGION`, `VOLCENGINE_TOS_BUCKET`, and `VOLCENGINE_TOS_ENDPOINT` can also be stored as GitHub Variables instead of Secrets. Keep access keys in GitHub Secrets.

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
