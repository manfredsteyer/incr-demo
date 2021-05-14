
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib263-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib263Component implements OnInit {
      constructor() { }
  
      title = 'lib263-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib263Component],
      providers: [],
      exports: [Lib263Component],
  })
  export class Lib263Module { }

