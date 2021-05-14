
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib162-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib162Component implements OnInit {
      constructor() { }
  
      title = 'lib162-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib162Component],
      providers: [],
      exports: [Lib162Component],
  })
  export class Lib162Module { }

