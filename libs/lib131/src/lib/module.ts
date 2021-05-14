
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib131-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib131Component implements OnInit {
      constructor() { }
  
      title = 'lib131-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib131Component],
      providers: [],
      exports: [Lib131Component],
  })
  export class Lib131Module { }

