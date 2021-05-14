
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib233-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib233Component implements OnInit {
      constructor() { }
  
      title = 'lib233-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib233Component],
      providers: [],
      exports: [Lib233Component],
  })
  export class Lib233Module { }

