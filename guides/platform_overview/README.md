Appverse Platform Overview
====================

From Model To Implementation - "Appverse"
---------------------

### From the model we derive interfaces, we then implement those interfaces for a device.

* Appverse Core
    * Defines the interfaces and common abstract code that has to be extended and implemented for a specific platform
* Appverse Platform
    * Each platform implementation consists of operating system specific code to realize the functions specified by the interfaces
* Appverse Runtime
    * Is the "container" that uses the Appverse Platform and allows a HTML application to execute as a native application with access to native functions
* HTML/CSS/JS/Native
    * Is a standard web application developed with HTML/CSS/JS and the Appverse JS that provides a binding to native device functionality.

### The same interfaces are implemented for the different device platforms to be supported

<img src="guides/platform_overview/unity-stack-2.png" alt="From Model To Implementation" style="max-height:80%;max-width:80%">