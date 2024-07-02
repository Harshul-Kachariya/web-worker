// remix.config.js
export const config = {
  // ESBuild options
  buildOptions: {
    esbuild: {
      // Additional ESBuild options can be specified here if needed
      // Example:
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
    },
  },
  // Other Remix.run options
  devServer: {
    // ... other configurations
    mode: "development", // Set mode to development
  },
};

// Then export default
export default config;
