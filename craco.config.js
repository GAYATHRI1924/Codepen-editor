module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add CSS loader for codemirror CSS
        const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
        if (oneOfRule) {
          oneOfRule.oneOf.unshift({
            test: /codemirror\/lib\/codemirror.css$/,
            use: ['style-loader', 'css-loader'],
          });
        }
        return webpackConfig;
      },
    },
  };
  