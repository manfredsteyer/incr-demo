
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib51-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib51Component implements OnInit {
      constructor() { }
  
      title = 'lib51-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib51Component],
      providers: [],
      exports: [Lib51Component],
  })
  export class Lib51Module { }

