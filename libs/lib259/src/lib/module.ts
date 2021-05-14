
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib259-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib259Component implements OnInit {
      constructor() { }
  
      title = 'lib259-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib259Component],
      providers: [],
      exports: [Lib259Component],
  })
  export class Lib259Module { }

