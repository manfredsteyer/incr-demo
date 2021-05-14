
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib150-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib150Component implements OnInit {
      constructor() { }
  
      title = 'lib150-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib150Component],
      providers: [],
      exports: [Lib150Component],
  })
  export class Lib150Module { }

