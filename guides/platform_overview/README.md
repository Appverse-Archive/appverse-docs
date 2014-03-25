Appverse Platform Overview
====================

From Model To Implementation - "Appverse"
---------------------

<img src="guides/platform_overview/appverse-stack.png" alt="From Model To Implementation" style="height:521px;width:634px;"><!--style="max-height:80%;max-width:80%"-->

### From the model we derive interfaces, we then implement those interfaces for a device.

* Appverse Core
    * Defines the interfaces and common abstract code that has to be extended and implemented for a specific platform
* Appverse Platform
    * Each platform implementation consists of operating system specific code to realize the functions specified by the interfaces
* Appverse Runtime
    * Is the "container" that uses the Appverse Platform and allows a HTML application to execute as a native application with access to native functions
* HTML/CSS/JS/Native
    * Is a standard web application developed with HTML/CSS/JS and the Appverse JS that provides a binding to native device functionality.

<img src="guides/platform_overview/appverse-stack-2.png" alt="From Model To Implementation" style="max-height:100%;max-width:100%"> <!--style="max-height:80%;max-width:80%"-->

<!--div style="float:right;top: -250px;position: relative;text-align: center;width:550px;right:250px;"-->
<!--/div-->
