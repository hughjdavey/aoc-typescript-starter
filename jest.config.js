module.exports = async () => {
  return {
    transform: {
      '^.+\\.tsx?$': 'esbuild-jest',
    },
    verbose: true,
  };
};
