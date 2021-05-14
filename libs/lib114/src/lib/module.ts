
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib114-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib114Component implements OnInit {
      constructor() { }
  
      title = 'lib114-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib114Component],
      providers: [],
      exports: [Lib114Component],
  })
  export class Lib114Module { }

