<!--embed src="guides/graphical_resources/10112012_Resoluciones.pdf" width="1540" height="1020" style="border: 1px solid;"-->

Graphical Resources for Apps
====================

Overview
--------------------
The following are the graphical resources you should provide in your Appverse projects to build the corresponding platform binaries.

The location for those files is:

+ Folder **[root_project]/iOSResources**:  for iOS icons and splashscreens
+ Folder **[root_project]/AndroidResources**:  for Android icons and splashscreens

Some of the icons are required to be present in order to make a successful build (for the target platform). Please check which one are required.

You should provide the name and the dimensions for each PNG file as specified in the tables below.

You could find the example templates for all resolutions at the <b>Showcase</b> sample project inside our <b>Appverse Mobile Emulator</b>

iOS - Icons
--------------------

### Smartphone

<pre>


Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon.png  				[optional]			 57 x  57 px		App Icon			iPhone (iOS 6.1 and earlier)
Icon@2x.png				[optional]			114 x 114 px		App Icon			iPhone Retina (iOS 6.1 and earlier)
Icon-60.png  			[optional]			 60 x  60 px		App Icon			iPhone (iOS 7 and later)
Icon-60@2x.png			[required]			120 x 120 px		App Icon			iPhone Retina (iOS 7 and later)

</pre>

(*) The "Icon-60@2x.png" is required by the Appverse platform to be used as the loading icon for the OverTheAir distribution. If not provided by the project, the platform will place its own.

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon.png" title="iPhone App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon.png<br>[57 x 57 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon@2x.png" title="iPhone Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon@2x.png<br>[114 x 114 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-60.png" title="iPhone App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-60.png<br>[60 x 60 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-60@2x.png" title="iPhone Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-60@2x.png<br>[120 x 120 px]</figcaption>
</figure>
</td>
</tr>
</table>

### Tablet

<pre>

Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon-72.png				[optional]			 72 x  72 px		App Icon			iPad (iOS 6.1 and earlier)
Icon-72@2x.png			[optional]			114 x 114 px		App Icon			iPad Retina (iOS 6.1 and earlier)
Icon-76.png				[required]			 76 x  76 px		App Icon			iPad (iOS 7 and later)
Icon-76@2x.png			[optional]			152 x 152 px		App Icon			iPad Retina (iOS 7 and later)

Icon-Small-50.png		[optional]			50  x  50 px		Settings Icon		iPad (iOS 6.1 and earlier)
Icon-Small-50@2x.png	[optional]			100 x 100 px		Settings Icon		iPad Retina (iOS 6.1 and earlier)

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-72.png" title="iPad App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-72.png<br>[72 x 72 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-72@2x.png" title="iPad Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-72@2x.png<br>[114 x 114 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-76.png" title="iPad App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-76.png<br>[76 x 76 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-76@2x.png" title="iPad Retina App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-76@2x.png<br>[152 x 152 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small-50.png" title="iPad Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small-50.png<br>[50 x 50 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small-50@2x.png" title="iPad Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small-50@2x.png<br>[100 x 100 px]</figcaption>
</figure>
</td>
</tr>
</table>

### Smartphones and Tablets

<pre>

Name					Build Required		Dimensions			Description			Devices
------------			---------------		------------		------------		------------
Icon-Small.png			[optional]		 	 29 x 29 px			Settings Icon		All devices (iOS 7 and later)
Icon-Small@2x.png		[optional]			 58 x 58 px			Settings Icon		All retina devices  (iOS 7 and later)
Icon-40.png				[optional]			 40 x 40 px			Spotlight Icon		All devices (iOS 7 and later)
Icon-40@2x.png			[optional]			 80 x 80 px			Spotlight Icon		All retina devices  (iOS 7 and later)

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small.png" title="iPhone Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small.png<br>[29 x 29 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-Small@2x.png" title="iPhone Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-Small@2x.png<br>[58 x 58 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-40.png" title="iPhone Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-40.png<br>[40 x 40 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-40@2x.png" title="iPhone Retina Settings Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-40@2x.png<br>[80 x 80 px]</figcaption>
</figure>
</td>
</tr>
</table>


iOS - Splash Screens
--------------------

### Smartphone

<pre>

Name					Build Required		Dimensions			Description					Devices
------------			---------------		------------		------------				------------
Default.png				[optional]			320 x  480 px		Launch Image - Portrait		iPhone
Default@2x.png			[optional]			640 x  960 px		Launch Image - Portrait		iPhone Retina 3.5-inch
Default-568h@2x.png		[optional]			640 x 1136 px		Launch Image - Portrait		iPhone Retina 4-inch (iPhone 5)

</pre>

(*) Landscape launch images are not used in iPhone (smartphone) as there is no possible to launch an app in landscape mode in those devices.
 
<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default.png" title="iPhone Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="160px" height="240px">
  <figcaption style="color:grey;text-align:center;">Default.png<br>[320 x 480 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default@2x.png" title="iPhone Retina 3.5-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="320px" height="480px">
  <figcaption style="color:grey;text-align:center;">Default@2x.png<br>[640 x 960 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-568h@2x.png" title="iPhone Retina 4-inch Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;"  width="320px" height="568px">
  <figcaption style="color:grey;text-align:center;">Default-568h@2x.png<br>[640 x 1136 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)
 
### Tablet

The new iOS 7 does not require anymore to reserve space for the status bar (20px or 40px previously removed from total height)

<pre>

Name						Build Required		Dimensions			Description					Devices
------------				---------------		------------		------------				------------
Default-Portrait.png		[optional]			 768 x 1024 px		Launch Image - Portrait		iPad
Default-Portrait@2x.png		[optional]			1536 x 2048 px		Launch Image - Portrait		iPad Retina
Default-Landscape.png		[optional]			1024 x  768 px		Launch Image - Landscape	iPad
Default-Landscape@2x.png	[optional]			2048 x 1536 px		Launch Image - Landscape	iPad Retina

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Portrait.png" title="iPad Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="192px" height="256px">
  <figcaption style="color:grey;text-align:center;">Default-Portrait.png<br>[768 x 1024 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Portrait@2x.png" title="iPad Retina Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="384px" height="512px">
  <figcaption style="color:grey;text-align:center;">Default-Portrait@2x.png<br>[1536 x 2048 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Landscape.png" title="iPhone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="256px" height="192px">
  <figcaption style="color:grey;text-align:center;">Default-Landscape.png<br>[1024 x 768 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Default-Landscape@2x.png" title="iPhone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="512px" height="384px">
  <figcaption style="color:grey;text-align:center;">Default-Landscape@2x.png<br>[2048 x 1536 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)

Android - Icons
--------------------

### Smartphone and Tablets

<pre>

Name					Build Required		Dimensions			Description			Devices (screebn density)
------------			---------------		------------		------------		------------
Icon-36.png				[optional]			 36 x  36 px		App Icon			LDPI
Icon-48.png				[optional]			 48 x  48 px		App Icon			MDPI
Icon-72.png				[optional]			 72 x  72 px		App Icon			HDPI
Icon-96.png				[optional]			 96 x  96 px		App Icon			XHDPI
Icon-144.png			[optional]			144 x 144 px		App Icon			XXHDPI
Icon-192.png			[optional]			192 x 192 px		App Icon			XXXHDPI  (not yet supported)

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-36.png" title="LDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-36.png<br>[36 x 36 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-48.png" title="MDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-48.png<br>[48 x 48 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-72.png" title="HDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-72.png<br>[72 x 72 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-96.png" title="XHDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-96.png<br>[96 x 96 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/Icon-144.png" title="XHDPI App Icon" style="border: 5px dashed grey; padding:2px;">
  <figcaption style="color:grey;text-align:center;">Icon-144.png<br>[144 x 144 px]</figcaption>
</figure>
</td>
</tr>
</table>

Android - Splash Screens
--------------------

### Smartphone and Tablets

<pre>

Name						Build Required		Dimensions			Description					Devices
------------				---------------		------------		------------				------------
launch_portrait.png			[optional]			 640 x  960 px		Launch Image - Portrait		Smartphone
launch_portrait_tablet.png	[optional]			 800 x 1232 px		Launch Image - Portrait		Tablet
launch_landscape.png		[optional]			1024 x  748 px		Launch Image - Landscape	Smartphone
launch_landscape_tablet.png	[optional]			1280 x  752 px		Launch Image - Landscape	Tablet

</pre>

<table cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_portrait.png" title="Smartphone Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="160px" height="240px">
  <figcaption style="color:grey;text-align:center;">launch_portrait.png<br>[640 x 960 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_portrait_tablet.png" title="Tablet Launch Image - Portrait" style="border: 5px dashed grey; padding:2px;" width="200px" height="308px">
  <figcaption style="color:grey;text-align:center;">launch_portrait_tablet.png<br>[800 x 1232 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_landscape.png" title="Smartphone Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="256px" height="192px">
  <figcaption style="color:grey;text-align:center;">launch_landscape.png<br>[1024 x 768 px]</figcaption>
</figure>
</td>
<td style="vertical-align:bottom;text-align: center;">
<figure>
  <img src="resources/images/launch_landscape_tablet.png" title="Tablet Launch Image - Landscape" style="border: 5px dashed grey; padding:2px;"  width="320px" height="188px">
  <figcaption style="color:grey;text-align:center;">launch_landscape_tablet.png<br>[1280 x 752 px]</figcaption>
</figure>
</td>
</tr>
</table>

(*) Images displayed reduced (real dimension on download)
