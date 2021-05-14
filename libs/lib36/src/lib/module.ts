
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib36-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib36Component implements OnInit {
      constructor() { }
  
      title = 'lib36-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib36Component],
      providers: [],
      exports: [Lib36Component],
  })
  export class Lib36Module { }

