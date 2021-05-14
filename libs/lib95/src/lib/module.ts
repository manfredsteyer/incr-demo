
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib95-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib95Component implements OnInit {
      constructor() { }
  
      title = 'lib95-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib95Component],
      providers: [],
      exports: [Lib95Component],
  })
  export class Lib95Module { }

