
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib177-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib177Component implements OnInit {
      constructor() { }
  
      title = 'lib177-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib177Component],
      providers: [],
      exports: [Lib177Component],
  })
  export class Lib177Module { }

