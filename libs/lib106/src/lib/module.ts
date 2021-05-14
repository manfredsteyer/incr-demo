
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib106-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib106Component implements OnInit {
      constructor() { }
  
      title = 'lib106-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib106Component],
      providers: [],
      exports: [Lib106Component],
  })
  export class Lib106Module { }

