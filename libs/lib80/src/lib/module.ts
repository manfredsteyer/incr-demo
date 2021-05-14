
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib80-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib80Component implements OnInit {
      constructor() { }
  
      title = 'lib80-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib80Component],
      providers: [],
      exports: [Lib80Component],
  })
  export class Lib80Module { }

