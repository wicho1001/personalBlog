---
type: blog
minutes: "5"
date: 2021-08-19T17:58:33.000+00:00
seo:
  keywords:
  - Angular
  - Dynamic components
  - ViewContainerRef
  - Views
  - Components
  - embeded views
  language: ES
  title: Dynamic components
  description: 'Explain about how to make dynamic components and how angular renderer
    works '
  image: https://w1ch0images.s3.us-west-2.amazonaws.com/c23ff3f2-d492-47d3-a060-742cdf98a2f9.jpg
title: Dynamic Components in Angular
featured_image: https://w1ch0images.s3.us-west-2.amazonaws.com/c23ff3f2-d492-47d3-a060-742cdf98a2f9.jpg
slug: dynamic-components-in-angular

---
To know how to make dynamic components we need to understand how angular renderer works, so let's start.

## Components

As angular say

> A component defines a class that contains application data and logic, and is associated with an HTML _template_ that defines a view to be displayed in a target environment.

In a more simple way, is a wrapper with logic that references a template where is a view.

## Views

One way to see the view is simple, is a thing where you can inject more components, views, and nodes. but make it clear see this painting

> ![](https://w1ch0images.s3.us-west-2.amazonaws.com/c23ff3f2-d492-47d3-a060-742cdf98a2f9.jpg)The Archduke Leopold Wilhelm in his Painting Gallery in Brussels

As you can see inside the painting are much more paintings and maybe in one of those could be another one, so let's think in our views, the painting is our view where can be located multiples views(paintings) and inside that views could be another views or components.

So thinking about it we need to answer one question

## How I can inject views or components inside views?

To answer this question we need to think of one of the basics of programming; references.

The reference more important here is the [viewContainerRef](https://angular.io/api/core/ViewContainerRef), this reference as his name is exactly that a reference to the view Container, so don't overthink it just a reference to the view.

### First step

First, we need to create something that can recognize the view inside the template, for that case you can use a directive, where the directive is type ViewContainerRef

    ng g d <whatever module you want>/directives/builder

Once completed you will get

    import { Directive } from '@angular/core';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective {
    
      constructor() { }
    
    }

now let's declare the viewContainerRef

    import { Directive, ViewContainerRef } from '@angular/core';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective {
    
      constructor(private viewContainerRef: ViewContainerRef) { }
    
    }

now to test this we are going to implement the directive, and the way to do it is only to put an ng-template in a template and consume the directive

so in the template, you want to test it you will insert

    <ng-template appBuilder></ng-template>

now in the builder directive in the constructor, you can log the viewContainerRef

    import { Directive, ViewContainerRef } from '@angular/core';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective {
    
      constructor(private viewContainerRef: ViewContainerRef) {
        console.log(viewContainerRef)
      }
    
    }

you can see the log in the console of the browser

![](https://w1ch0images.s3.us-west-2.amazonaws.com/image.png)

_Now you only see a lot of stuff that we are not going to use, but if you're curious to see all the properties right there, then things will be more clear._

Once we see everything is cool, let's implement another concept that is the factory.

### Second Step

As I said we need to implement the factory concept but right now is not necessary that you know everything about it, but if you want to know more about it, here is a [resource](https://refactoring.guru/design-patterns/factory-method).

Now let's start, in this step, we are going to merge viewContaineRef with [ComponentFactoryResolver](https://angular.io/api/core/ComponentFactoryResolver), so import it to the builder directive.

     import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective {
    
      constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
      ) {
        console.log(viewContainerRef)
        console.log(componentFactoryResolver)
      }
    
    }

Now let's create a component

> Note: if you have a component dont create another one

    ng g c <whatever module you want>/components/button

### Third Step

Now let's create some dynamic components, and for that let's implement a life cycle inside the directive.

    import { AfterViewInit, ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective implements AfterViewInit {
    
      constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
      ) {
        console.log(viewContainerRef)
        console.log(componentFactoryResolver)
      }
    
      ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        
      }
    
    }

Let's created a method and use viewContainerRef and ComponentFactoryResolver

    import { AfterViewInit, ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
    import { ButtonComponent } from '../components/button/button.component';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective implements AfterViewInit {
    
      constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
      ) {
        console.log(viewContainerRef)
        console.log(componentFactoryResolver)
      }
    
      ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.loadComponents()
        
      }
    
      loadComponents() {
        const componentToRender = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent)
        const componentRenderer = this.viewContainerRef.createComponent(componentToRender);
        componentRenderer.changeDetectorRef.detectChanges()
      }
    
    
    }

![](https://w1ch0images.s3.us-west-2.amazonaws.com/button_works.png)

**Yeees, we have a dynamic component!!**

now pay attention because this is the most simple thing of this `componentRenderer`is a reference of the component that you create, so you can access his instance, to make it more clear let's make an input inside of or component and assign a value to the input through the instance.

     import { Component, Input, OnInit } from '@angular/core';
    
    @Component({
      selector: 'app-button',
      templateUrl: './button.component.html',
      styleUrls: ['./button.component.scss']
    })
    export class ButtonComponent implements OnInit {
    
      @Input() greeting: string;
    
      constructor() { }
    
      ngOnInit(): void {
      }
    
    }

In the template of the component

    <h1>{{greeting}}</h1>

now in the directive

    import { AfterViewInit, ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
    import { ButtonComponent } from '../components/button/button.component';
    
    @Directive({
      selector: '[appBuilder]'
    })
    export class BuilderDirective implements AfterViewInit {
    
      constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
      ) {}
    
      ngAfterViewInit(): void {
        this.loadComponents()
      }
    
      loadComponents() {
        const componentToRender = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
        const componentRenderer = this.viewContainerRef.createComponent(componentToRender);
        componentRenderer.instance.greeting = 'Hello world';
        componentRenderer.changeDetectorRef.detectChanges();    
      }
    
    
    }

![](https://w1ch0images.s3.us-west-2.amazonaws.com/hello_world_buttom.png)

**Nice, we did it!!**