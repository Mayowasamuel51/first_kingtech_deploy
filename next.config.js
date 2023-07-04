/** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')([
//     '@square/web-sdk', 'react-square-web-payments-sdk'
// ])

const nextConfig =
  // withTM(
  {
    // withTM: require('next-transpile-modules')([
    //     '@square/web-sdk', 'react-square-web-payments-sdk'
    // ]),
    // transpilePackages: [
    //     '@square/web-sdk', 'react-square-web-payments-sdk'
    // ],
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      domains: ["lh3.googleusercontent.com"],
    },
    // experimental: {
    //   esmExternals: "loose",
    //   appDir: true,
    // },
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: [
    //             'style-loader',
    //             {
    //                 loader: 'css-loader',
    //                 options: {
    //                     importLoaders: 1,
    //                 },
    //             },
    //             'postcss-loader',
    //         ],
    //     });

    //     // Resolve the issue with style-loader not found
    //     config.resolve.fallback = {
    //         ...config.resolve.fallback,
    //         'style-loader': require.resolve('style-loader'),
    //     };

    //     // Add the webpack plugin for CSS
    //     config.plugins.push(
    //         new webpack.ProvidePlugin({
    //             'window.CSS': 'css-loader',
    //         })
    //     );
    //     return config;
    // }
  };
// )

module.exports = nextConfig;
