/**
 * @type {import('lint-staged').Config}
 * @see https://github.com/okonet/lint-staged#how-to-use-lint-staged-in-a-multi-package-monorepo
 */
module.exports = {
  /** @see https://github.com/okonet/lint-staged#reformatting-the-code */
  '*.{js,jsx,ts,tsx}': [
    'prettier --write --cache --cache-strategy metadata',
    'eslint --fix --cache',
  ],
  /** @see https://github.com/okonet/lint-staged#reformatting-the-code */
  '*.{json,md,yml}': 'prettier --write --cache --cache-strategy metadata',
  /** @see https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments */
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit --pretty',
};
