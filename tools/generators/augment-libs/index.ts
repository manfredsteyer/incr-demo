import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {

  for (let i=0; i<300; i++) {
    console.log('augment lib #' + i);

    addModule(i, host);
    updateIndex(i, host);
  }

  updateAppModule(host);
  updateAppComponentHtml(host);

}

function updateAppModule(host: Tree) {
  const fileName = `apps/demo-app/src/app/app.module.ts`;
  let tsImports = '';
  let ngImports = '';

  for (let i = 0; i < 300; i++) {
    tsImports += `import { Lib${i}Module } from '@my-workspace/lib${i}';\n`;
    ngImports += `Lib${i}Module,\n`;
  }

  const content = `
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  ${tsImports}  
  import { AppComponent } from './app.component';
  
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule, 
      ${ngImports}
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}  
`;

  host.write(fileName, content);
}

function updateAppComponentHtml(host: Tree) {
  const fileName = `apps/demo-app/src/app/app.component.html`;
  let content = '<h1>Demo App</h1>\n\n';

  for (let i = 0; i < 300; i++) {
    content += `<lib${i}-component></lib${i}-component>\n`;
  }

  host.write(fileName, content);
}

function updateIndex(i: number, host: Tree) {
  const fileName = `libs/lib${i}/src/index.ts`;
  host.write(fileName, "export * from './lib/module';");
}

function addModule(i: number, host: Tree) {
  const fileName = `libs/lib${i}/src/lib/module.ts`;
  const content = `
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib${i}-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib${i}Component implements OnInit {
      constructor() { }
  
      title = 'lib${i}-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib${i}Component],
      providers: [],
      exports: [Lib${i}Component],
  })
  export class Lib${i}Module { }

`;

  host.write(fileName, content);
}

