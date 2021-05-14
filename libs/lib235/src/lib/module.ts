
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib235-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib235Component implements OnInit {
      constructor() { }
  
      title = 'lib235-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib235Component],
      providers: [],
      exports: [Lib235Component],
  })
  export class Lib235Module { }

