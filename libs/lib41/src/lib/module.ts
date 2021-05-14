
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib41-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib41Component implements OnInit {
      constructor() { }
  
      title = 'lib41-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib41Component],
      providers: [],
      exports: [Lib41Component],
  })
  export class Lib41Module { }

