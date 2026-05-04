module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
            "@hooks": "./src/hooks",
            "@translate": "./src/translate",
            "@domain": "./src/domain",
            "@services": "./src/services",
            "@api": "./src/api",
            "@infra": "./src/infra",
            "@errors": "./src/errors",
            "@types": "./src/types",
            "@animations": "./src/animations",
          },
        },
      ],
    ],
  };
};
