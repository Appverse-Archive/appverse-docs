Secure Credentials Storage (shared)
====================

## Overview

Applications that communicate with other installed applications on the device may need to share information between them.

For example it could be used to implement a Single Sign-On (SSO) authentication system but the functionality is not limited to that use case.

## Security new API methods

The functionality to access this storage system is located in the **Security API**.
Below you can find a list of the methods used to access the storage and a brief description of their behaviour.

* **Unity.Security.StoreKeyValuePair** : The function will store in the storage unit the passed KeyPair object. If the key name being used in the parameter already exists in the storage unit, the latter will be overwritten. When the execution ends the function will calls **Unity.OnKeyValuePairsStoreCompleted**
* **Unity.Security.StoreKeyValuePairs** : The function behaves exactly as **StoreKeyValuePair** with the difference that accepts an array of KeyPair objects.
* **Unity.Security.GetStoredKeyValuePair** : The function will look for the specified keyname and will return the value associated to it. When the execution ends the function will calls **Unity.OnKeyValuePairsFound**
* **Unity.Security.GetStoredKeyValuePairs** : The function behaves exactly as **GetStoredKeyValuePair** with the difference that accepts an array of String objects.
* **Unity.Security.RemoveStoredKeyValuePair** : The function will remove from the storage unit the KeyPair associated to the passed keyname. When the execution ends the function will calls **Unity.OnKeyValuePairsRemoveCompleted**
* **Unity.Security.RemoveStoredKeyValuePairs** : The function behaves exactly as **RemoveStoredKeyValuePair** with the difference that accepts an array of String objects.

Below you can find the list of Javascript callbacks used by the mentioned functions:
 
* **Unity.OnKeyValuePairsStoreCompleted** : Parameters contain an array of KeyPair objects successfully stored and an array of KeyPair objects that could not be stored.
* **Unity.OnKeyValuePairsFound** : Parameters contain an array of the KeyPair objects found.
* **Unity.OnKeyValuePairsRemoveCompleted** : Parameters contain an array of KeyPair objects successfully removed and an array of KeyPair objects that could not be removed.

## iOS Concepts

The iOS functionality makes use the OS keychain.
All applications have access to a private keychain and, if correctly configured, additional keychains.

In order for 2 or more applications to access the shared data must meet a set of requirements:

* **Applications must be signed with the same Certificate**
* **Applications must have the same Bundle Seed ID**
* **Applications must be entitled with the "keychain-access-groups" entitlement and, in the entitlement property list file, specify an array of keychain access groups to which the application belongs**

<img src="guides/security_keychain/ios_keychain.png" width="850" />

## Android Concepts
The Android functionality makes use of the Shared Preferences service.
The application that will create the Shared Preferences instance must be installed (but it is not required to be launched) since it will be the owner of the Shared data.
All the applications that want to access the Shared data must specify the component name of the Application that owns the Shared Preferences file.

In order for 2 or more applications to access the shared data must meet a set of requirements:

* **Applications must be signed with the same Certificate**
* **Applications must specify the same android:sharedUserId setting and value in their manifest file**
* **Applications must specify the same package name and preferences file name settings and value in their strings.xml file**
* **Applications that want to access the shared data must know the Application which keeps the shared preferences file component name**

<img src="guides/security_keychain/android_shared_preferences.png" width="850" />

## Properties

**For Android**:
In order to store data in the shared storage in order for other apps to access it, you need to define the following:

* **Shared package name** : The package of the application that is the 'owner' of the preferences file to be shared. That application must be installed on the device (but it is not required to be launched at all)
* **Shared Preferences Filename** :The name of the file (known by all applications that wants to share it) to be stored and accessed in the SharedPreferences
* **Shared UserId** : The user id that all applications should configure at their Manifest to access the shared preferences (in addition, access is only allowed if applications are signed by the same certificate)

Make sure you add the following lines to the **string.xml** file:
	<string name="Appverse_Shared_PackageName">YOUR_SHARED_PACKAGE_NAME</string>
	<string name="Appverse_Shared_Preferences_Filename">YOUR_SHARED_PREFERENCES_FILENAME</string>
	
And define in your manifest file the following:

	 <manifest xmlns:android="http://schemas.android.com/apk/res/android"
	 	android:versionCode="1" android:versionName="1.0.0"
		package="YOUR_APPLICATION_PACKAGE_HERE"
		**android:sharedUserId="YOUR_SHAREDUSERID">**
	 	<uses-sdk android:minSdkVersion="YOUR_MIN_SDK_VERSION" android:targetSdkVersion="YOUR_SDK_VERSION"/>


## Build properties names (for iOS and for Android)

Below you can find a list of the build properties used to configure this functionality (the specified values are used for example purposes):

**For Android**:

* **app.security.shared.packagename**=com.gft.appverse.showcase
* **app.security.shared.userid**=com.gft.appverse
* **app.security.shared.preferences.filename**=AppverseSettings

**For iOS**:

* **app.security.shared.keychain.accessgroup**=com.gft.appverse.shared

### How native applications could access the storage in iOS

An application that wants to share data with other applications should have an entitlement like the below one:

	<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
	<plist version="1.0">
	<dict>
		<key>keychain-access-groups</key>
		<array>
			<string>12345.com.app_1</string>
			<string>12345.com.shared</string>
		</array>
	</dict>
	</plist>

The first string **"12345.com.app_1"** points to the private keychain while the second string **"12345.com.shared"** points to the shared keychain.
For this application to read something from the shared keychain it should execute the following:

	/*Create a NSMutableDictionary and set the properties we want (in same order as code)
	 *property to define a GenericPassword type
	 *Property to define the Account field (filled with the KeyPair's Key property), example mykey1
	 *Property to define the keychain-access-group, example 12345.com.shared
	 *Property to define the return value type
	 */
	NSMutableDictionary *searchDictionary = [[NSMutableDictionary alloc] init];
    [searchDictionary setObject:(__bridge id)kSecClassGenericPassword forKey:(__bridge id)kSecClass];
    [searchDictionary setObject:"mykey1" forKey:(__bridge id)kSecAttrAccount];
    [searchDictionary setObject:@"12345.com.shared" forKey:(__bridge id)kSecAttrAccessGroup];
	[searchDictionary setObject:(__bridge id)kCFBooleanTrue forKey:(__bridge id)kSecReturnData];
    
	CFTypeRef result = NULL;
	/*status contains the SecItemCopyMatching function return code
	*pass as parameters the NSMutableDictionary and result (this one will contain the value returned from the found object in the keychain)
	*/
    OSStatus status = SecItemCopyMatching((__bridge CFDictionaryRef)searchDictionary, &result);
    NSData *data = (__bridge NSData *)result;
	
    NSString *keyPairValue = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

**In order for this code to successfully retrieve an object value all the previously listed requirements must be met**
Example at Appverse Github: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_blank">iOS Native Application Example</a>

### How native applications could access the storage in Android

An application that wants to access the shared data by other application should define in the manifest the sharedUserId property:

	<?xml version="1.0" encoding="utf-8"?>
	<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.app_2"
    android:versionCode="1"
    android:versionName="1.0" 
    android:sharedUserId="com.shared">
	
With the above settings, if both application have been signed with the same certificate, in order for the app to access the shared data it must execute the following:

	try {
		SharedPreferences settings = null; 
	
		//Get the Application that owns the Shared Preferences context, example com.app_2/org.me.unity4jui_android/MainActivity
		Context otherAppCtx = AndroidServiceLocator.getContext().createPackageContext("com.app_2/org.me.unity4jui_android/MainActivity", Context.CONTEXT_IGNORE_SECURITY);
		
		//Get the Shared Preferences target file the data is kept, example AppverseSettings
		settings = otherAppCtx.getSharedPreferences("AppverseSettings", Context.MODE_MULTI_PROCESS + Context.MODE_PRIVATE);
		
		//Interrogate settings object to return the value associated to the key
		String keyPairValue = settings.getString("mykey1", null);
		
	} catch (Exception e) {
		//LOG ERROR
	}

Example at Appverse Github: <a href="https://github.com/Appverse/appverse-mobile/tree/master/appverse-samples" target="_blank">Android Native Application Example</a>
