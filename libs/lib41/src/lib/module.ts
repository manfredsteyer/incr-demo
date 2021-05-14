
  import { NgModule } from '@angular/core';
  import { Component, OnInit, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'sub1',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub1Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub2',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub2Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub3',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub3Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub4',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub4Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub5',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub5Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub6',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub6Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub7',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub7Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub8',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub8Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub9',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub9Component {
    @Input() title = 'Sub';
  }

  @Component({
    selector: 'sub10',
    template: '<h2>{{title}}</h2><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus labore impedit possimus tempore cupiditate facere beatae repellat similique, ab soluta optio expedita odit corrupti saepe a animi autem praesentium.</div>'
  })
  export class Sub10Component {
    @Input() title = 'Sub';
  }

  @Component({
      selector: 'lib41-component',
      template: '<h1>{{title}}</h1><div *ngIf="title && items"><div *ngFor="let i of items">{{i}}</div></div><button (click)="add()">Add</button><div></div><sub1 title="A"></sub1><sub2 title="B"></sub2><sub3 title="C"></sub3><sub4 title="D"></sub4><sub5 title="E"></sub5><sub6 title="F"></sub6><sub7 title="G"></sub7><sub8 title="H"></sub8><sub9 title="I"></sub9><sub10 title="J"></sub10>'
  })
  export class Lib41Component implements OnInit {
      constructor() { }
  
      title = 'lib41-component';
  
      items = [1,2,3,4,5,6];

      add() {
        this.items.push(Math.random()*100);
      }

      ngOnInit() { }
  }
  
  @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [
        Lib41Component,
        Sub1Component,
        Sub2Component,
        Sub3Component,
        Sub4Component,
        Sub5Component,
        Sub6Component,
        Sub7Component,
        Sub8Component,
        Sub9Component,
        Sub10Component,
      ],
      providers: [],
      exports: [Lib41Component],
  })
  export class Lib41Module { }

