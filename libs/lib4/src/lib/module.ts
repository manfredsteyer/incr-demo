
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib4-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib4Component implements OnInit {
      constructor() { }
  
      title = 'lib4-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib4Component],
      providers: [],
      exports: [Lib4Component],
  })
  export class Lib4Module { }

