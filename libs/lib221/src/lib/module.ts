
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib221-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib221Component implements OnInit {
      constructor() { }
  
      title = 'lib221-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib221Component],
      providers: [],
      exports: [Lib221Component],
  })
  export class Lib221Module { }

