
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib108-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib108Component implements OnInit {
      constructor() { }
  
      title = 'lib108-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib108Component],
      providers: [],
      exports: [Lib108Component],
  })
  export class Lib108Module { }

