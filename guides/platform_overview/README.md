Unity Platform Overview
====================

From Model To Implementation - "Unity"
---------------------

### From the model we derive interfaces, we then implement those interfaces for a device.

* Unity Core
    * Defines the interfaces and common abstract code that has to be extended and implemented for a specific platform
* Unity Platform
    * Each platform implementation consists of operating system specific code to realize the functions specified by the interfaces
* Unity Runtime
    * Is the "container" that uses the Unity Platform and allows a HTML application to execute as a native application with access to native functions
* HTML/CSS/JS/Native
    * Is a standard web application developed with HTML/CSS/JS and the Unity JS that provides a binding to native device functionality.

<div style="float:right;top: -250px;position: relative;text-align: center;width:550px">
<img src="guides/platform_overview/unity-stack.png" alt="From Model To Implementation" style="max-height:80%;max-width:80%">
</div>

### The same interfaces are implemented for the different device platforms to be supported

<img src="guides/platform_overview/unity-stack-2.png" alt="From Model To Implementation" style="max-height:80%;max-width:80%">