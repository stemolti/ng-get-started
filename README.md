# Dependency injection (DI)
A design pattern and mechanism for creating and delivering some parts of an application (**dependencies**) to other parts of an application that require them.

In Angular, dependencies are typically services, but they also can be values, such as strings or functions. An injector for an application (created automatically during **bootstrap**) instantiates dependencies when needed, using a configured **provider** of the service or value.

* ### Bootstrap
  A way to initialize and launch an application or system.
  In Angular, the AppModule root NgModule of an application has a **bootstrap property** that identifies the top-level components of the application. During the bootstrap process, Angular creates and inserts these components into the index.html host web page. **You can bootstrap multiple applications in the same index.html** Each application contains its own components. 

# Service
In Angular, a class with the @Injectable() decorator that encapsulates non-UI logic and code that can be reused across an application. Angular distinguishes components from services to increase modularity and reusability.

The @Injectable() metadata allows the service class to be used with the dependency injection mechanism. The injectable class is instantiated by a provider. Injectors maintain lists of providers and use them to provide service instances when they are required by components or other services.

* ### Injectable
  An Angular class or other definition that provides a dependency using the dependency injection mechanism. An injectable service class must be marked by the @Injectable() decorator. Other items, such as constant values, can also be injectable.

* ### Injector
  An object in the Angular dependency-injection system that can find a named dependency in its cache or create a dependency using a configured provider. Injectors are created for NgModules automatically as part of the bootstrap process and are inherited through the component hierarchy.

  An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.

  **A hierarchy of injectors at the NgModule and component level can provide different instances of a dependency to their own components and child components.**

  You can configure injectors with different providers that can provide different implementations of the same dependency.


* ### Provider
  An object that implements one of the Provider interfaces. A provider object defines how to obtain an injectable dependency associated with a DI token. **An injector uses the provider to create a new instance of a dependency for a class that requires it.**
  
  Angular registers its own providers with every injector, for services that Angular defines. 
  
  You can register your own providers for services that your application needs.

  # HttpCLient
  Servers often return data in the form of a stream. Streams are useful because they make it easy to transform the returned data and make modifications to the way you request that data. Angular HttpClient is a built-in way to fetch data from external APIs and provide them to your application as a stream.

  **HttpCLient** performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests. Each request method has multiple signatures, and the return type varies based on the signature that is called (mainly the values of observe and responseType).


    * In app.module.ts, import HttpClientModule from the @angular/common/http package at the top of the file with the other imports.

    * To register Angular's HttpClient providers globally, add **HttpClientModule** to the AppModule **@NgModule()** imports array.
  

  # Async
  The async pipe returns the latest value from a stream of data and continues to do so for the life of a given component. When Angular destroys that component, the async pipe automatically stops.

  The async pipe *subscribes* to an **Observable** or **Promise** and returns the latest value it has emitted. 
  
  When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe *unsubscribes* automatically to avoid potential memory leaks. 
  
  When the reference of the expression changes, the async pipe automatically unsubscribes from the old Observable or Promise and subscribes to the new one.
