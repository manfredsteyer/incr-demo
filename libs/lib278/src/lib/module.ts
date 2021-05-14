
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib278-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib278Component implements OnInit {
      constructor() { }
  
      title = 'lib278-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib278Component],
      providers: [],
      exports: [Lib278Component],
  })
  export class Lib278Module { }

