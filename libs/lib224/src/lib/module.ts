
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib224-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib224Component implements OnInit {
      constructor() { }
  
      title = 'lib224-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib224Component],
      providers: [],
      exports: [Lib224Component],
  })
  export class Lib224Module { }

