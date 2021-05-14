
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib227-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib227Component implements OnInit {
      constructor() { }
  
      title = 'lib227-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib227Component],
      providers: [],
      exports: [Lib227Component],
  })
  export class Lib227Module { }

