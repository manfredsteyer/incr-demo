
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib252-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib252Component implements OnInit {
      constructor() { }
  
      title = 'lib252-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib252Component],
      providers: [],
      exports: [Lib252Component],
  })
  export class Lib252Module { }

