
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib43-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib43Component implements OnInit {
      constructor() { }
  
      title = 'lib43-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib43Component],
      providers: [],
      exports: [Lib43Component],
  })
  export class Lib43Module { }

