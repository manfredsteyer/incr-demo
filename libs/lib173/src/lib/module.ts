
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib173-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib173Component implements OnInit {
      constructor() { }
  
      title = 'lib173-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib173Component],
      providers: [],
      exports: [Lib173Component],
  })
  export class Lib173Module { }

