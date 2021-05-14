
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib119-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib119Component implements OnInit {
      constructor() { }
  
      title = 'lib119-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib119Component],
      providers: [],
      exports: [Lib119Component],
  })
  export class Lib119Module { }

