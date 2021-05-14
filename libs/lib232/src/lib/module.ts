
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib232-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib232Component implements OnInit {
      constructor() { }
  
      title = 'lib232-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib232Component],
      providers: [],
      exports: [Lib232Component],
  })
  export class Lib232Module { }

