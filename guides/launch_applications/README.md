# Launching Applications

## Overview

In some cases, it is required to launch another mobile application directly from an application.

In addition, it could be required to pass some data to the just launched application.

Each mobile platform has each own way to launch other applications:

* **iOS apps** define an **URI scheme** to be called.<br/>And data is passed using a URI **query string**, with the URL standard parameters format: <i>any_desired_path/?param1=value1&param2=value2&....</i>
<br/>
* **Android apps** define **Intents** (Activity) to be launched with some paramaters: action, category, component name, etc.
	* One of those intents could be also an **action.VIEW** and user could specify an **URI scheme** to launch an specific activity of an application - usually, then main activity.

As we work with **hybrid applications** - where the logic is in the javascript code - we need to make this feature accessible via the **javascript** code, using **common interfaces** that will behave differently in each platform.

## Configure apps to launch

In order to provide the required parameters for launching apps in each platform; but also having the same common javascript interfaces to launch applications, a new **configuration** file is provided by our platform:

Name: **launch-config.xml**

Location: **&lt;project_root&gt;/Web/app/config/**  folder

Example:

	<?xml version="1.0" encoding="UTF-8"?>
	<launch-config>

	<apps>
		
		<!-- The following are examples to call native applications in both platforms iOS and Android -->
		
		<!-- 	example: launching Mail native application.
				
				iOS:
				mailto:${EMAIL_ADDRESS}?cc=${EMAIL_ADDRESS_CC}&subject=Greetings
				
				Android: 
				Using an implicit intent with the action SEND and a plain text mime type. In this case, no URI scheme is used.
				Parameters passed when launching application (using the Appverse.System.LaunchApplication method) via the query string argument will be parsed and 
				passed to the Intent as extras (name/value string pairs)
		-->
		<app name="appmail">
			<ios uri-scheme="mailto" uri-remove-double-slash="true"/>
			<android-implicit-intent action="android.intent.action.SEND" mime-type="text/plain" parse-query-as-intent-extras="true"/>
		</app>
		
		<!-- 	example: launching telephone native application.
				
				iOS: tel:${PHONENUMBER}
				
				Android: 
				Using an implicit intent with the action DIAL and the "tel:" URI scheme.
		-->
		<app name="apptel">
			<ios uri-scheme="tel" uri-remove-double-slash="true"/>
			<android-implicit-intent action="android.intent.action.DIAL" uri-scheme="tel" uri-remove-double-slash="true" />
		</app>
		 
		<!-- 	example: launching Maps native application.
				
				iOS: 
				Specific URL. Example: http://maps.apple.com/?daddr?San+Francisco,+CA&saddr=cupertino
				
				Android: 
				
				Two options, using explicit intent, or using the action VIEW with a specific "geo:" URI scheme
				
				// example: map point based on address
				geo:0,0?q=1600+Amphitheatre+Parkway,+Mountain+View,+California
				
				// Or map point based on latitude/longitude
				geo:37.422219,-122.08364?z=14
				
				
		-->
		<app name="appmaps">
			<ios uri-scheme="http" />
			<android-explicit-intent component-name="com.google.android.apps.maps/com.google.android.maps.MapsActivity"/>
		</app> 
		
		<app name="appmaps-google">
			<ios uri-scheme="http" />
			<android-implicit-intent action="android.intent.action.VIEW" uri-scheme="geo" uri-remove-double-slash="true" />
		</app>

	</apps>

	</launch-config>


This file defines a list of **apps** that could be launched using the **Appverse.System** API.

Each app is identified by its **name** attribute. Names should be unique. If you repeat an app name on this config file, the first application with the matched name will be used.

Inside the **app** node, you could include three kind of nested elements:

* **&lt;ios&gt;** : which contains the parameters needed to launch this application in the iOS platform.

* **&lt;android-implicit-intent&gt;** : which contains the parameters needed to launch this application in the Android platform using an **implicit intent**. 

* **&lt;android-explicit-intent&gt;** : which contains the parameters needed to launch this application in the Android platform using an **explicit intent**.

Those nested application elements are optional, and they are only used in the corresponding platform, and ignored for the rest of platforms.

See more information about Android intents at: <a href="http://developer.android.com/guide/components/intents-filters.html#ires" target="_blank">Android Intent Filters</a>

## Configuration Tips

- For iOS applications, use the **&lt;ios /&gt;** node.

	- Use the **uri-scheme** attribute to define the URL scheme to use to open that url.
	- Parameters are passed when launching application (using the **Appverse.System.LaunchApplication** method) via a query string.
	
- For Android application, there are two options:

	- Launch an explicit intent: **&lt;android-explicit-intent /&gt;**
	
		Explicit Intents have specified a component, which provides the exact class to be run. 
		
		- Use the **component-name** attribute to define that component name (&lt;package_name&gt;/&lt;fully_qualified_class_name&gt;) on the native application to be launched.
		 
	- Launch an implicit intent: **&lt;android-implicit-intent /&gt;**
		 
		Implicit Intents have not specified a component.
		Instead, they must include enough information for the system to determine which of the available components is best to run for that intent.
		
		Possible node attributes (all optionals) :
		 
		- **action** [string] : The general action to be performed. For example, **android.intent.action.VIEW**. <br/> See other possible values at: <a href="http://developer.android.com/reference/android/content/Intent.html" target="_blank">Android Intent</a>
		
		- **category** [string] : Gives additional information about the action to execute. For example, **android.intent.category.LAUNCHER**. <br/> See other possible values at: <a href="http://developer.android.com/reference/android/content/Intent.html" target="_blank">Android Intent</a>
		
		- **mime-type** [string] : Specifies an explicit type (a MIME type) of the intent data. <br/> Normally the type is inferred from the data itself. By setting this attribute, you disable that evaluation and force an explicit type.	
		 
		- **uri-scheme** [string] : Depending on the intent you want to launch, the data might be a Uri. <br/> See more information at: 
			<br/><a href="http://developer.android.com/reference/android/net/Uri.html" target="_blank">http://developer.android.com/reference/android/net/Uri.html</a>
			<br/><a href="http://developer.android.com/training/basics/intents/sending.html" target="_blank">http://developer.android.com/training/basics/intents/sending.html</a>
		
		Parameters are passed when launching application (using the **Appverse.System.LaunchApplication** method) via a query string.
		
		- **uri-remove-double-slash** [boolean] : true to remove the double slashes from the URI scheme (default: false)
		 
	- For both implicit and explicit intents:
		- Use the **parse-query-as-intent-extras** attribute (setting a "true" value) for indicating to the platform that the data received as query string on the **Appverse.System.LaunchApplication** method should be parsed and included as **intent extras** when launching this intent. Default value is false.
	
- Default URL schemes contain the "//" characters in the syntax (example: <i>myapp://mypath?param=value&param=value</i>). <br/> To remove the double slashes set the **uri-remove-double-slash** attribute to true in both **&lt;ios/&gt; or **&lt;android-implicit-intent/&gt; nodes
<br/>
- URL scheme names for Android only allow **lowercase** or **capitalize** (just the first letter in uppercase) formats, otherwise the application will not be recognized for being launched.
	
## New System API methods

Taking this into account, the platform has included some methods on the **Appverse.System** API in order to:

* Get all applications configured to be launched using the **Appverse.System.GetApplications** method.
	* This method will return an array of **Appverse.System.App** objects configured at the **/app/config/launch-config.xml** file.
	* Only the platform specific nodes will be returned inside that objects: **iOSApp** field for iOS platform, and **AndroidApp** field for Android platform.
* Get an application configured to be launched identified by its **name**, using the **Appverse.System.GetApplication** method.
	* This method will return an **Appverse.System.App** object, that matches one of the apps configured at the **/app/config/launch-config.xml** file.
	* Only the platform specific nodes will be returned inside that object: **iOSApp** field for iOS platform, and **AndroidApp** field for Android platform.
* Using an **Appverse.System.App** object obtained from the above methods, you could launch that application using the **Appverse.System.LaunchApplication** method.
	* First argument of that method is the application object or the name of that application (platform will find it for you, saving one platform call from the javascript side)
	* Second argument is the **query** string to pass application specific parameters when launching that app. In the format of: <i>any_desired_path/?param1=value1&param2=value2&....</i>

## Allow other apps to launch your app

Your application could be launched by other third-party applications if we define some **build properties** on our **Mobile Emulator**.

### For iOS

You should define which is the **URL scheme** used for your application.

* Go to the **Compile** &gt;&gt; **Build Properties** emulator menu option.
* In the **Application Settings** tab, locate the **Launch Options** section (at the bottom of the tab).
* In the text field labeled as **Bundle URL scheme**, introduce your application desired URL scheme.

<img src="guides/launch_applications/emulator_ios_properties.png" width="850" />

In the screenshot example, we have introduced the **showcase** scheme.

Applications calling the following scheme: <b><i>showcase://</i></b> will launch our showcase iOS application.

For adding parameters, use the standard URL query string format:  <b><i>showcase://relativepath/?param1=abc&param2=xyz</i></b>

The final binary iOS app will include the required parameters in its **Info.plist**:

	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleURLName</key>
			<string>com.gft.appverse.showcase</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>showcase</string>
			</array>
		</dict>
	</array>

<br/>
Reference Links for iOS development:

<img src="resources/images/information.png"/> See more information at the **Apple Developer** documentation: <a href="https://developer.apple.com/library/ios/DOCUMENTATION/iPhone/Conceptual/iPhoneOSProgrammingGuide/AdvancedAppTricks/AdvancedAppTricks.html#//apple_ref/doc/uid/TP40007072-CH7-SW50" target="_blank">Implementing Custom URL Schemes</a>	
	
<img src="resources/images/information.png"/> Check our sample application to see how other applications (in this case an iOS native application) could start our application: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_balnk"><b>iOSNativeTest</b></a>
	
### For Android

For launching our Android application, the platform has enabled two modes:
<br/>

* the "explicit mode"; so you have to provided the specific component name (&lt;package_name&gt;/&lt;fully_qualified_class_name&gt;)
* and an specific "implicit mode" : action.VIEW + URL scheme; so you have to provide the bundle URL scheme (same behaviour as iOS)

#### Using the Component Name

The value other third-party should use to launch our application is displayed on our **Mobile Emulator**.

* Go to the **Compile** &gt;&gt; **Build Properties** emulator menu option.
* In the **Application Settings** tab, locate the **Launch Options** section (at the bottom of the tab).
* In the text field labeled as **Component Name**, you could check there which is the component name available for this application to be launched.
 
<img src="guides/launch_applications/emulator_android_properties.png" width="850" />

In the screenshot example, this application could be called by **starting an android Intent** with the component name:<br/>**com.gft.appverse.showcase/org.me.unity4jui_android.MainActivity**.

	Intent launchIntent = new Intent();
	String componentName = "com.gft.appverse.poc.showcase/org.me.unity4jui_android.MainActivity";
	launchIntent.setComponent(ComponentName.unflattenFromString(componentName));
	
	// For adding parameters
	launchIntent.putExtra("param1", "value1");
	launchIntent.putExtra("param2", "value2");
		
	this.startActivity(launchIntent);
	
#### Using an URI scheme

Users could include a bundle URL scheme for the Android app. The same build property is used for all platforms.

* Go to the **Compile** &gt;&gt; **Build Properties** emulator menu option.
* In the **Application Settings** tab, locate the **Launch Options** section (at the bottom of the tab).
* In the text field labeled as **Bundle URL scheme**, introduce your application desired URL scheme.

<img src="guides/launch_applications/emulator_ios_properties.png" width="850" />

In the screenshot example, we have introduced the **showcase** scheme.

Applications calling the following scheme: <b><i>showcase://</i></b> (from any browser page, for example) will launch our showcase Android application.

Application could also be called by other native Android apps just **starting an android Intent** with the an **action** type **VIEW**, and specifying the configured URI scheme.

	Uri showcaseAppUri = Uri.parse("showcase://relativepath/?param1=value1&param2=value2");
    Intent intent = new Intent(Intent.ACTION_VIEW, showcaseAppUri);
    if (intent.resolveActivity(getPackageManager()) != null) {
        startActivity(intent);
    }

<img src="resources/images/warning.png"/> Remember that, when using the URL scheme for Android only **lowercase** or **capitalize** formats are recognized.

<br/>
Reference Links for Android development:

<img src="resources/images/information.png"/> See the following link for further details about starting android applications: <a href="http://developer.android.com/training/basics/intents/index.html" target="_blank">http://developer.android.com/training/basics/intents/index.html</a>

<img src="resources/images/information.png"/> See the following link for further details about starting android applications with parameters: <a href="http://developer.android.com/training/sharing/send.html" target="_blank">http://developer.android.com/training/sharing/send.html</a>

<img src="resources/images/information.png"/> Check our sample application to see how other applications (in this case an Android native application) could start our application: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_balnk"><b>AndroidNativeTest</b></a>

## Receive parameters on launched

If our application is launched by another application, it could receive **extra parameters**.

Those parameters could be used to launch the app in a specific menu option, or html view, or simply to activate any action on the application (show a popup information, etc).

Platform will handle those parameters, and will pass them to the javascript hybrid application using the following **listener**:

* To we aware about any launched data application should override the **Appverse.OnExternallyLaunched** listener:
	* Applications should override/implement this method to be aware of being lanched by a third-party application, and should perform the desired javascript code on this case.
	* Argument received is an array of **Appverse.System.LaunchData** objects containing the launched parameters.
