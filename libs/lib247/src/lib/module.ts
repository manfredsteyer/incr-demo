
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib247-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib247Component implements OnInit {
      constructor() { }
  
      title = 'lib247-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib247Component],
      providers: [],
      exports: [Lib247Component],
  })
  export class Lib247Module { }

