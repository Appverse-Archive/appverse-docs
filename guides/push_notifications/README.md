Enabling Push Notifications
====================

On iOS devices
---------------------

Ensure that your application "bundle id" has been enabled to receive <b>Push Notifications</b> on the <b>Apple iOS Developer Program Portal</b>.

There are two environments to be enabled per application:

* **Development** environment (also called as 'Sandbox')
* **Production** environment

When enabling an environment for a specific bundle id, a corresponding **certificate** is created. That certificate must be distributed to your **Push Notification Provider** (the server side of your app that will be in charge of sending notifications to this app).

Any **Provisioning Profile** previously submitted for you bundle id application **MUST BE re-downloaded** and **re-distributed** again after enabling one notifications enviroment:

* Enabling the **development** environment will change any **Development Provisioning Profile** associated with you bundle id.
* Enabling the **production** environment will change any **Distribution Provisioning Profile** associated with your bundle id.

Once you application is configured for enabling, you could follow the same steps as the other platforms.

On All platforms
---------------------

To **REGISTER** your application for receiving Push Notification, please use the **Unity.Notification.RegisterForRemoteNotifications** method.

(*) Note: remote notifications are not granted to be delivered to the device. In addition, the registration token supplied by the Push Notificaion Service after registration could change. So it is a common approach to execute the registration each time the application launches.

To **UNREGISTER** your application from receiving Push Notification, please use the **Unity.Notification.UnRegisterForRemoteNotifications** method.

Your app should override some platform event listeners in order to:

* Be notified about a **SUCESSFUL REGISTRATION**, by overriding the **Unity.OnRegisterForRemoteNotificationsSuccess** method.
	* When called, this method will receive as an argument the **registration token** ("device token" for iOS or "registration ID" for Android) received from the Notifications Service (APNs for iOS or GMC for Android).
	* This token must be sended to your application **Push Notification Provider**, using a secure SSL channel (the **Unity.IO** services could be used for that purpose).
	* For further details check the **Unity.Notification.RegistrationToken** class.

* Be notified about a **FAILURE REGISTRATION**, by overriding the **Unity.OnRegisterForRemoteNotificationsFailure** method.
	* When called, this method will receive as an argument the **registration error** information.
	* For further details check the **Unity.Notification.RegistrationError** class.
	
* Be notified about an **INCOMING REMOTE NOTIFICATION**,  by overriding the **Unity.OnRemoteNotificationReceived** method.
	* When called, this method will receive as an argument the **notification data** information.
	* This method is not called when the notification is received and the application is not running.
	* For further details check the **Unity.Notification.NotificationData** class.
	
Only on iOS Platform
---------------------

The following methods are only available on the **iOS** platform:

* **Unity.Notification.IncrementApplicationIconBadgeNumber**
* **Unity.Notification.DecrementApplicationIconBadgeNumber**
* **Unity.Notification.SetApplicationIconBadgeNumber**

They allow the application to change the application bage number (the number inside the red icon located at the application top-right corner).
This feature is not available on the Android platform.

