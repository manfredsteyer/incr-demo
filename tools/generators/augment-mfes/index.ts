import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {

  for(let i=0; i<30; i++) {
    createLazyModule(i, host);
    createAppModule(i, host);
    createWebpackConfig(i, host);
  }

  function createAppModule(i: number, host: Tree) {
    const fileName = `apps/mfe${i}/src/app/app.module.ts`;

    const content = `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule } from '@angular/router';
    import { AppComponent } from './app.component';
    
    @NgModule({
      imports: [
        RouterModule.forRoot([{
          path: 'mfe',
          loadChildren: () => import('./lazy-module').then(m => m.Mfe${i}Module)
        }])
      ],
      declarations: [AppComponent],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    
    `;
    host.write(fileName, content);
  }
}



function createWebpackConfig(i: number, host: Tree) {
  const fileName = `apps/mfe${i}/webpack.config.js`;
  const content = `
  const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
  const mf = require("@angular-architects/module-federation/webpack");
  const path = require("path");
  
  const sharedMappings = new mf.SharedMappings();
  sharedMappings.register(
    path.join(__dirname, '../../tsconfig.base.json'),
    [/* mapped paths to share */]);
  
  module.exports = {
    output: {
      uniqueName: "mfe${i}",
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
          name: "mfe${i}",
          filename: "remoteEntry.js",
          exposes: {
              './Module': './apps/mfe${i}/src/app/lazy-module.ts',
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
  
  `;
  host.write(fileName, content);
}

function createLazyModule(i: number, host: Tree) {
  const fileName = `apps/mfe${i}/src/app/lazy-module.ts`;


  let importComp = '';
  let routerComp = '';

  for (let j = i * 10; j < (i+1)*10; j++) {
    importComp += `import { Lib${j}Component } from '@my-workspace/lib${j}';\n`;
    routerComp += `
    {
      path: 'comp${j}',
      component: Lib${j}Component
    },
`;

  }

  const content = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
${importComp}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
           ${routerComp}
        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class Mfe${i}Module { }
`

  host.write(fileName, content);
}

