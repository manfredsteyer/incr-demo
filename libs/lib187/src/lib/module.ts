
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib187-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib187Component implements OnInit {
      constructor() { }
  
      title = 'lib187-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib187Component],
      providers: [],
      exports: [Lib187Component],
  })
  export class Lib187Module { }

