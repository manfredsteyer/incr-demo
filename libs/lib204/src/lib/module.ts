
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib204-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib204Component implements OnInit {
      constructor() { }
  
      title = 'lib204-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib204Component],
      providers: [],
      exports: [Lib204Component],
  })
  export class Lib204Module { }

