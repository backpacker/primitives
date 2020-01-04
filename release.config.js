module.exports = {
  branch: 'master',
  repositoryUrl: 'https://github.com/backpackerds/primitives',
  dryRun: false,
  plugins: [
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): ${nextRelease.version}'
      }
    ]
  ]
};
