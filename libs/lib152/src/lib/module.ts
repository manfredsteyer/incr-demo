
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib152-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib152Component implements OnInit {
      constructor() { }
  
      title = 'lib152-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib152Component],
      providers: [],
      exports: [Lib152Component],
  })
  export class Lib152Module { }

