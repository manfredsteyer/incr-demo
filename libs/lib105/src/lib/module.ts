
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib105-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib105Component implements OnInit {
      constructor() { }
  
      title = 'lib105-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib105Component],
      providers: [],
      exports: [Lib105Component],
  })
  export class Lib105Module { }

