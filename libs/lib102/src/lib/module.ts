
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib102-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib102Component implements OnInit {
      constructor() { }
  
      title = 'lib102-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib102Component],
      providers: [],
      exports: [Lib102Component],
  })
  export class Lib102Module { }

