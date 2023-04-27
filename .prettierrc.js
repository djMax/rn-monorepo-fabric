// @ts-check
/** @type {import("@serverless-guru/prettier-plugin-import-order").PrettierConfig} */
module.exports = {
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  // Sort and group imports using the @serverless-guru/prettier-import-order plugin.
  // https://github.com/serverless-guru/prettier-import-order
  importOrder: [
    '^react(-native)?$', // React and react-native
    '', // use empty strings to separate groups with empty lines
    '<THIRD_PARTY_MODULES>', // Third party modules (this is a plugin keyword)
    '',
    '^@gasbuddy/(.*)$', // External GasBuddy modules
    '',
    '^@common/(.*)$', // @common workspace modules
    '',
    '^@chargebuddyapp/(.*)$', // @chargebuddyapp workspace modules
    '',
    '^@gasbuddyapp/(.*)$', // @chargebuddyapp workspace modules
    '',
    '^../(.*)$', // Local imports in parent directories
    '^./(.*)$', // Local imports in current directory
    '^..?/styles?$', // Style imports from anywhere
  ],
  importOrderSeparation: false, // turn this on to see the sorting groups.
  importOrderSortIndividualImports: true,
  importOrderMergeDuplicateImports: true,
  // End sort options
};
