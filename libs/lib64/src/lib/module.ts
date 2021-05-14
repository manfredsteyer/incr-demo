
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib64-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib64Component implements OnInit {
      constructor() { }
  
      title = 'lib64-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib64Component],
      providers: [],
      exports: [Lib64Component],
  })
  export class Lib64Module { }

