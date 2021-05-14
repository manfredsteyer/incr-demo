
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib125-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib125Component implements OnInit {
      constructor() { }
  
      title = 'lib125-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib125Component],
      providers: [],
      exports: [Lib125Component],
  })
  export class Lib125Module { }

