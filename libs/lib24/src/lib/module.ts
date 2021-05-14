
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib24-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib24Component implements OnInit {
      constructor() { }
  
      title = 'lib24-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib24Component],
      providers: [],
      exports: [Lib24Component],
  })
  export class Lib24Module { }

