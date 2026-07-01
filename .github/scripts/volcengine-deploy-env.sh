#!/usr/bin/env bash

first_non_empty() {
  local value

  for value in "$@"; do
    if [ -n "$value" ]; then
      printf '%s' "$value"
      return 0
    fi
  done

  return 1
}

resolve_volcengine_deploy_env() {
  AWS_ACCESS_KEY_ID="$(first_non_empty \
    "${VOLCENGINE_TOS_ACCESS_KEY_ID:-}" \
    "${VOLCENGINE_TOS_ACCESS_KEY:-}" \
    "${VOLCENGINE_ACCESS_KEY_ID:-}" \
    "${VOLCENGINE_ACCESS_KEY:-}" \
    "${VOLCENGINE_ACCESSKEY_ID:-}" \
    "${VOLCENGINE_ACCESSKEY:-}" \
    "${VOLC_ACCESS_KEY_ID:-}" \
    "${VOLC_ACCESS_KEY:-}" \
    "${VOLC_ACCESSKEY:-}" \
    "${TOS_ACCESS_KEY_ID:-}" \
    "${TOS_ACCESS_KEY:-}" \
    "${ACCESS_KEY_ID_SECRET:-}" \
    "${AWS_ACCESS_KEY_ID_SECRET:-}" \
    "${VOLCENGINE_TOS_AK:-}" \
    "${VOLCENGINE_AK:-}" \
    "${VOLC_AK:-}" \
    "${TOS_AK:-}")" || AWS_ACCESS_KEY_ID=""

  AWS_SECRET_ACCESS_KEY="$(first_non_empty \
    "${VOLCENGINE_TOS_SECRET_ACCESS_KEY:-}" \
    "${VOLCENGINE_TOS_SECRET_KEY:-}" \
    "${VOLCENGINE_SECRET_ACCESS_KEY:-}" \
    "${VOLCENGINE_SECRET_KEY:-}" \
    "${VOLCENGINE_SECRETKEY:-}" \
    "${VOLCENGINE_ACCESS_KEY_SECRET:-}" \
    "${VOLC_SECRET_ACCESS_KEY:-}" \
    "${VOLC_SECRET_KEY:-}" \
    "${VOLC_SECRETKEY:-}" \
    "${VOLC_ACCESS_KEY_SECRET:-}" \
    "${TOS_SECRET_ACCESS_KEY:-}" \
    "${TOS_SECRET_KEY:-}" \
    "${TOS_ACCESS_KEY_SECRET:-}" \
    "${SECRET_ACCESS_KEY_SECRET:-}" \
    "${ACCESS_KEY_SECRET:-}" \
    "${AWS_SECRET_ACCESS_KEY_SECRET:-}" \
    "${VOLCENGINE_TOS_SK:-}" \
    "${VOLCENGINE_SK:-}" \
    "${VOLC_SK:-}" \
    "${TOS_SK:-}")" || AWS_SECRET_ACCESS_KEY=""

  AWS_DEFAULT_REGION="$(first_non_empty \
    "${VOLCENGINE_TOS_REGION:-}" \
    "${VOLCENGINE_REGION:-}" \
    "${VOLC_REGION:-}" \
    "${TOS_REGION:-}" \
    "${REGION_SECRET:-}" \
    "${AWS_DEFAULT_REGION_SECRET:-}" \
    "${VOLCENGINE_TOS_REGION_VAR:-}" \
    "${VOLCENGINE_REGION_VAR:-}" \
    "${VOLC_REGION_VAR:-}" \
    "${TOS_REGION_VAR:-}" \
    "${REGION_VAR:-}" \
    "${AWS_DEFAULT_REGION_VAR:-}")" || AWS_DEFAULT_REGION=""

  VOLCENGINE_TOS_BUCKET_RESOLVED="$(first_non_empty \
    "${VOLCENGINE_TOS_BUCKET_SECRET:-}" \
    "${VOLCENGINE_BUCKET:-}" \
    "${VOLC_BUCKET:-}" \
    "${TOS_BUCKET:-}" \
    "${S3_BUCKET:-}" \
    "${VOLCENGINE_TOS_BUCKET_VAR:-}" \
    "${VOLCENGINE_BUCKET_VAR:-}" \
    "${VOLC_BUCKET_VAR:-}" \
    "${TOS_BUCKET_VAR:-}" \
    "${S3_BUCKET_VAR:-}")" || VOLCENGINE_TOS_BUCKET_RESOLVED=""

  VOLCENGINE_TOS_ENDPOINT_RESOLVED="$(first_non_empty \
    "${VOLCENGINE_TOS_ENDPOINT_SECRET:-}" \
    "${VOLCENGINE_ENDPOINT:-}" \
    "${VOLC_ENDPOINT:-}" \
    "${TOS_ENDPOINT:-}" \
    "${S3_ENDPOINT:-}" \
    "${AWS_ENDPOINT_URL_S3:-}" \
    "${VOLCENGINE_TOS_ENDPOINT_VAR:-}" \
    "${VOLCENGINE_ENDPOINT_VAR:-}" \
    "${VOLC_ENDPOINT_VAR:-}" \
    "${TOS_ENDPOINT_VAR:-}" \
    "${S3_ENDPOINT_VAR:-}" \
    "${AWS_ENDPOINT_URL_S3_VAR:-}")" || VOLCENGINE_TOS_ENDPOINT_RESOLVED=""

  export AWS_ACCESS_KEY_ID
  export AWS_SECRET_ACCESS_KEY
  export AWS_DEFAULT_REGION
  export VOLCENGINE_TOS_BUCKET_RESOLVED
  export VOLCENGINE_TOS_ENDPOINT_RESOLVED
}

require_volcengine_value() {
  local value="$1"
  local label="$2"
  local aliases="$3"

  if [ -z "$value" ]; then
    echo "Missing ${label}. Accepted aliases: ${aliases}"
    return 1
  fi
}
