
  const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
  const mf = require("@angular-architects/module-federation/webpack");
  const path = require("path");
  
  const sharedMappings = new mf.SharedMappings();
  sharedMappings.register(
    path.join(__dirname, '../../tsconfig.base.json'),
    [/* mapped paths to share */]);
  
  module.exports = {
    output: {
      uniqueName: "mfe29",
      publicPath: "auto"
    },
    optimization: {
      runtimeChunk: false
    },   
    resolve: {
      alias: {
        ...sharedMappings.getAliases(),
      }
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "mfe29",
          filename: "remoteEntry.js",
          exposes: {
              './Module': './apps/mfe29/src/app/lazy-module.ts',
          },        
          
          shared: {
            "@angular/core": { singleton: true, strictVersion: true }, 
            "@angular/common": { singleton: true, strictVersion: true }, 
            "@angular/common/http": { singleton: true, strictVersion: true }, 
            "@angular/router": { singleton: true, strictVersion: true },
  
            ...sharedMappings.getDescriptors()
          }
          
      }),
      sharedMappings.getPlugin()
    ],
  };
  
  