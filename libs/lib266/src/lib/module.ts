
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib266-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib266Component implements OnInit {
      constructor() { }
  
      title = 'lib266-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib266Component],
      providers: [],
      exports: [Lib266Component],
  })
  export class Lib266Module { }

