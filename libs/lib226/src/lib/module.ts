
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib226-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib226Component implements OnInit {
      constructor() { }
  
      title = 'lib226-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib226Component],
      providers: [],
      exports: [Lib226Component],
  })
  export class Lib226Module { }

