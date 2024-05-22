// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { pluginSvgr } from "@rsbuild/plugin-svgr";
export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "federation_consumer",
          remotes: {
            federation_provider:
              "federation_provider@https://0012pmmw-3000.uks1.devtunnels.ms//mf-manifest.json",
          },
          shared: [
            {
              react: {
                singleton: true,
              },
            },
            {
              "react-dom": {
                singleton: true,
              },
            },
          ],
        }),
      ]);
    },
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false,
      },
    }),
    pluginSvgr(),
  ],
});
