
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib124-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib124Component implements OnInit {
      constructor() { }
  
      title = 'lib124-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib124Component],
      providers: [],
      exports: [Lib124Component],
  })
  export class Lib124Module { }

