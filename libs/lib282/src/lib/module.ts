
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib282-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib282Component implements OnInit {
      constructor() { }
  
      title = 'lib282-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib282Component],
      providers: [],
      exports: [Lib282Component],
  })
  export class Lib282Module { }

