
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib137-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib137Component implements OnInit {
      constructor() { }
  
      title = 'lib137-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib137Component],
      providers: [],
      exports: [Lib137Component],
  })
  export class Lib137Module { }

