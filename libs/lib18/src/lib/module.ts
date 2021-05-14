
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib18-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib18Component implements OnInit {
      constructor() { }
  
      title = 'lib18-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib18Component],
      providers: [],
      exports: [Lib18Component],
  })
  export class Lib18Module { }

