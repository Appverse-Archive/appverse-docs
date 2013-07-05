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

Once you application is configured for enabling push notifications, you could follow the same steps as the other platforms.

On Android devices
---------------------

### Sender ID

When registering for receiving remote notifications (using the **Unity.OnRegisterForRemoteNotificationsSuccess** method), the **senderId** argumemnt value is required for Android devices. In other platforms (such as the iOS platform, this value will be just ignored).

### Notification Configuration

Whereas the <b> Apple Push Notifications Service</b> (APNs) has a predefined fields names for the notification data, the <b>Google Cloud Messaging</b> (GMC) works with custom fields. Due to that fact, your application will have to define some custom fields to be received.

The configuration file should be placed at the <b>/app/config/</b> folder with the <b>notification-config.xml</b> name, and the following structure (the number of fields, and their names are custom; types are predefined):

		<?xml version="1.0" encoding="UTF-8"?>
		<notification-config>
			<android> <!-- not all fields are required, this is an example -->
				<field name="body" type="RN_BODY"/>
				<field name="title" type="RN_TITLE"/>
				<field name="sound" type="RN_SOUND"/>
				<field name="ticker" type="RN_TICKER"/>
				<field name="largeicon" type="RN_LARGE_ICON"/>
				<field name="smallicon" type="RN_SMALL_ICON"/>
				<field name="ledcolor" type="RN_LED_COLOR_ARGB"/>
			</android>
		</notification-config>	

To following field types are available:

+ <b>RN_TITLE</b> : the title to be used for the notification alert.
+ <b>RN_BODY</b> : the message body for the notification alert.
+ <b>RN_TICKET</b> : the text displayed in the status bar when the notification first arrives, on some devices.
+ <b>RN_SOUND</b> : the sound to play when a notification alert arrives (default sound is played instead).
+ <b>RN_SMALL_ICON</b> : the small icon name to be displaed on the notification center (if not provided, the application icon is displayed).
+ <b>RN_LARGE_ICON</b> : the large icon name to be displayed on the notification center for large screen devices (if not provided, the application icon is displayed).
+ <b>RN_LED_COLOR_ARGB</b> : the color of the led to be activated when a remote notification arrives. More information at: <a href="http://developer.android.com/reference/android/app/Notification.Builder.html#setLights(int, int, int)">android.app.Notification.Builder</a>

### Server Side example

The following code is a test example to send remote notifications through the <b>GCM Server</b> (Java implementation):

		import com.google.android.gcm.server.*;
		
		public static void main(String[] args){
			
			Sender sender = new Sender("<your google account number to send notifications>");
			Message.Builder build = new Message.Builder();
			
			// main fields (should map the ones specified at the notification-config.xml file)
			build.addData("title", "Notification Title");
			build.addData("body", "You have received a notification");
			
			// custom data
			build.addData("customdata", "this is a custom data send by the notification server");
						
			Message msg = build.build();
			Result rs;
			try {
				
				String  = "<the registration id returned by the GCM when you invoke the Unity.Notification.RegisterForRemoteNotifications method>"
				rs = sender.send(msg, registrationId, 1);
				
				System.out.println(rs.toString());
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

See the <b>Showcase</b> application for an example of the usage.
		

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

