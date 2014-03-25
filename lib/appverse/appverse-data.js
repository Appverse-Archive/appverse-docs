
// *****************************************
// *********** APPVERSE CONTEXT ************
// *****************************************

/**
 * @class Appverse.is 
 * This class gives information about current device (what kind of device it is, etc)
 * <pre>Usage: Appverse.is.&lt;property&gt;.<br><br>Example:<br> if(Appverse.is.Phone) { <br> &nbsp;&nbsp;// do something here only for smartphone devices <br> }</pre>
 * @singleton
 */
Appverse.is = {
	/**
	 * @property iPod Returns true if current device is an iPod device. Default to false.
	 * @static
	 * @type Boolean
	 */
	iPod: false,
	/**
	 * @property Mac Returns true if current device is a Mac. Default to false.
	 * @static
	 * @type Boolean
	 */
	Mac: false,
	/**
	 * @property Windows Returns true if current device is a Windows. Default to false.
	 * @static
	 * @type Boolean
	 */
	Windows: false,
	/**
	 * @property Linux Returns true if current device is a Linux. Default to false.
	 * @static
	 * @type Boolean
	 */
	Linux: false,

	/**
	 * @property iPad Returns true if current device is an iPad device. Default to false.
	 * @static
	 * @type Boolean
	 */
	iPad: false,
	/**
	 * @property iPhone Returns true if current device is an iPhone device. Default to false.
	 * @static
	 * @type Boolean
	 */
	iPhone: false,
	/**
	 * @property Android Returns true if current device is an Android device. Default to false.
	 * @static
	 * @type Boolean
	 */
	Android: false,
	/**
	 * @property Blackberry Returns true if current device is a Blackberry device. Default to false.
	 * @static
	 * @type Boolean
	 */
	Blackberry: false,
				

	/**
	 * @property Desktop Returns true if current device is a desktop device (could be a Mac, a Windows, or a non-Android Linux).
	 * @static
	 * @type Boolean
	 */
	Desktop: false,
	/**
	 * @property Tablet Returns true if current device is a tablet device (only iPad is currently supported).
	 * @static
	 * @type Boolean
	 */
	Tablet: false,
	/**
	 * @property Phone Returns true if current device is an smartphone device (non destkop, neither tablet device).
	 * @static
	 * @type Boolean
	 */
	Phone: false,
	/**
	 * @property iOS Returns true if current device has an iOS operating systemn (iPhone, iPad, or iPod devices).
	 * @static
	 * @type Boolean
	 */
	iOS: false
};


/**
 * @class Appverse.DateTime
 * @namespace Appverse
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The DateTime object that stores the date (day, month, year) and time (hours, minutes and seconds) data for a specific date. Used mostly in Calendar and Notification APIs.
 * @author maps
 * @version 1.0
 */
Appverse.DateTime = {
	/**
     * The Day of the month represented by this date instance. Expressed as a value between 1 and 31.
	 * @type {int}
     */
	Day: 1,
	
	/**
     * The Month component of the date represented by this date instance. Expressed as a value between 1 (January) and 12 (December).
	 * @type {int}
     */
	Month: 1,
	
	/**
     * The Year component of the date represented by this date instance. Expressed as a value between 1 and 9999.
	 * @type {int}
     */
	Year: 9999,
	
	/**
     * The Hour component represented by the time of this date instance. Expressed as a value between 0 and 23.
	 * @type {int}
     */
	Hour: 0,
	
	/**
     * The Minutes component represented by the time of this date instance. Expressed as a value between 0 and 59.
	 * @type {int}
     */
	Minute: 0,
	
	/**
     * The Seconds component represented by the time of this date instance. Expressed as a value between 0 and 59.
	 * @type {int}
     */
	Second: 0
	
};


// *****************************************
// *********** APPVERSE SYSTEM API ************
// *****************************************

/**
 * @class Appverse.System.HardwareInfo
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device hardware.
 * @author maps
 * @version 1.0
 */
Appverse.System.HardwareInfo = {

    /**
     * Device Name (as configured on the device settings).
     * @type {String}
     */
	Name : '',
	
	/**
     * Hardware Vendor.
     * @type {String}
     */
	Vendor : '',
	
	/**
     * Hardware Version (device model).
     * @type {String}
     */
	 Version : '',
	
	/**
     * Hardware Device UUID (unique device identifier).
     * @type {String}
     */
	DeviceUuid : ''

};

/**
 * @class Appverse.System.OSInfo
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the operating system.
 * @author maps
 * @version 1.0
 */
Appverse.System.OSInfo = {

    /**
     * Device Operating System Name.
     * @type {String}
     */
	Name : '',
	
	/**
     * Device Operating System Vendor.
     * @type {String}
     */
	Vendor : '',
	
	/**
     * Device Operating System Version.
     * @type {String}
     */
	 Version : ''

};

/**
 * @class Appverse.System.CPUInfo
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device CPU.
 * @author maps
 * @version 1.0
 */
Appverse.System.CPUInfo = {

    /**
     * Processor Name.
     * @type {String}
     */
	Name : '',
	
	/**
     * Processor Vendor.
     * @type {String}
     */
	Vendor : '',
	
	/**
     * CPU Speed.
     * @type {double}
     */
	 Speed : 0,
	
	/**
     * CPU UUID (unique processor identifier).
     * @type {String}
     */
	UUID : ''

};


/**
 * @class Appverse.System.Locale
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a specific geographical, political, or cultural region, by giving the language and country 
 * @author maps
 * @version 1.0
 */
Appverse.System.Locale = {

    /**
     * A valid ISO Language Code.<br/>These codes are the lower-case, two-letter codes as defined by ISO-639. 
	 * <a href="http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt">http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt</a>
     * @type {String}
     */
	Language : '',
	
	/**
     * A valid ISO Country Code.<br/>These codes are the upper-case, two-letter codes as defined by ISO-3166. 
	 * <a href="http://www.chemie.fu-berlin.de/diverse/doc/ISO_3166.html">http://www.chemie.fu-berlin.de/diverse/doc/ISO_3166.html</a>
     * @type {String}
     */
	Country : ''

};

/**
 * @class Appverse.System.MemoryStatus
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides a global map of the memory status for all storage types installed.
 * @author maps
 * @version 1.0
 */
Appverse.System.MemoryStatus = {

    /**
     * Total Memory available.
     * @type {long}
     */
	MemoryTotal : 0,
	
	/**
     * Current Free Memory.
     * @type {long}
     */
	MemoryFree : 0,
	
	/**
     * Current Used Memory.
     * @type {long}
     */
	 MemoryUsed : 0

};

/**
 * @class Appverse.System.PowerInfo
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device charge.
 * @author maps
 * @version 1.0
 */
Appverse.System.PowerInfo = {

    /**
     * Power Status.
     * <br/>Possible values: {@link Appverse.System#POWER_CHARGING POWER_CHARGING}, {@link Appverse.System#POWER_DISCHARGING POWER_DISCHARGING}, {@link Appverse.System#POWER_FULLY_CHARGED POWER_FULLY_CHARGED} & {@link Appverse.System#POWER_UNKNOWN POWER_UNKNOWN}
     * @type {int}
     */
	Status : 0,
	
	/**
     * Device Battery Percentage.
     * @type {float}
     */
	Level : 0,
	
	/**
     * Device autonomy time (in milliseconds).
     * @type {long}
     */
	 Time : 0

};

/**
 * @class Appverse.System.DisplayInfo
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an specific display (the default one, or any external screen).
 * @author maps
 * @version 1.0
 */
Appverse.System.DisplayInfo = {
	
	/**
     * The number of this display (index) .
     * @type {int}
     */
	DisplayNumber: 0,
	
	/**
     * The number of horizontal pixels of this display.
     * @type {int}
     */
	DisplayX: 0,
	
	/**
     * The number of vertical pixels of this display.
     * @type {int}
     */
	DisplayY: 0,
	
	/**
     * The type of this display.
     * <br/>Possible values: {@link Appverse.System#DISPLAYTYPE_EXTERNAL DISPLAYTYPE_EXTERNAL}, 
     * {@link Appverse.System#DISPLAYTYPE_PRIMARY DISPLAYTYPE_PRIMARY}, & {@link Appverse.System#DISPLAYTYPE_UNKNOWN DISPLAYTYPE_UNKNOWN}
	 * @type {int}
     */
	DisplayType: 0,
	
	/**
     * The current orientation of this display.
     * <br/>Possible values: 
	 * {@link Appverse.System#ORIENTATION_LANDSCAPE ORIENTATION_LANDSCAPE}, 
	 * {@link Appverse.System#ORIENTATION_PORTRAIT ORIENTATION_PORTRAIT},
	 * & {@link Appverse.System#ORIENTATION_UNKNOWN ORIENTATION_UNKNOWN}
	* @type {int}
     */
	DisplayOrientation: 0,
	
	/**
     * The depth in bits of the this display.
     * <br/>Possible values: {@link Appverse.System#BITDEPTH_BPP16 BITDEPTH_BPP16}, {@link Appverse.System#BITDEPTH_BPP24 BITDEPTH_BPP24}, {@link Appverse.System#BITDEPTH_BPP32 BITDEPTH_BPP32},  
     * {@link Appverse.System#BITDEPTH_BPP8 BITDEPTH_BPP8}, & {@link Appverse.System#BITDEPTH_UNKNOWN BITDEPTH_UNKNOWN}
	 * @type {int}
     */
	DisplayBitDepth: 0
	
};

/**
 * @class Appverse.System.App
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application (in the specific platform). This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Appverse.System.App = {

    /**
     * The name of the application to be launched (it should be unique; otherwise the first application matching a name will be used to refer the application) .
     * @type {String}
     */
	Name : '',
	
	/**
     * Specific application data for the iOS platform. ONLY AVAILABLE ON THE iOS PLATFORM.
     * @type {Appverse.System.iOSApp}
     */
	IOSApp : {},
	
	/**
     * Specific application data for the Android platform. ONLY AVAILABLE ON THE Android PLATFORM.
     * @type {Appverse.System.AndroidApp}
     */
	AndroidApp : {}

};

/**
 * @class Appverse.System.iOSApp
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application in the iOS platform. This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Appverse.System.iOSApp = {

    /**
     * The URI to be used to launch this application.
     * @type {String}
     */
	UriScheme : '',
	
	/**
     * True to remove the double slash after the URI schemes (some applications do not include the "//" prefix after the uri scheme, example: tel or mailto schemes)
     * @type {Boolean}
     */
	RemoveUriDoubleSlash : false

};

/**
 * @class Appverse.System.AndroidApp
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application in the iOS platform. This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Appverse.System.AndroidApp = {

    /**
     * The Intent Action to be used to launch this application.
     * @type {String}
     */
	Action : '',
	
	/**
     * The Intent mime type to be used to launch this application.
     * @type {String}
     */
	MimeType : '',
	
	/**
     * The Intent category to be used to launch this application.
     * @type {String}
     */
	Category : '',
	
	/**
     * The URI to be used to launch this application.
     * @type {String}
     */
	UriScheme : '',
	
	/**
     * True to remove the double slash after the URI schemes (some applications do not include the "//" prefix after the uri scheme, example: tel or mailto schemes)
     * @type {Boolean}
     */
	RemoveUriDoubleSlash : false,
	
	/**
     * The Intent Component Name (explicit intent) to be used to launch this application.
     * @type {String}
     */
	ComponentName : '',
	
	/**
     * True to add extras to the Intent to launch this application. The extras will be obtained by parsing the "query string" received on the Appverse.System.LaunchApplication method.
     * @type {Boolean}
     */
	ParseQueryStrinAsIntentExtras : false

};

/**
 * @class Appverse.System.LaunchData
 * @namespace Appverse.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing a name/value pair of launch data received when an application is launched.
 * @author maps
 * @version 4.2
 */
Appverse.System.LaunchData = {

    /**
     * The name of this launch data.
     * @type {String}
     */
	Name : '',
	
	/**
     * The value of this launch data.
     * @type {String}
     */
	Value : ''

};

// *****************************************
// *********** APPVERSE DATABASE API **********
// *****************************************

/**
 * @class Appverse.Database.Database
 * @namespace Appverse.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing local SQlite database.
 * @author maps
 * @version 1.0
 */
Appverse.Database.Database = {

    /**
     * Database Name (name of the .db local file).
     * @type {String}
     */
	Name : '',
	
	/**
     * Indicates if database was created or needs to be created as New.
     * @type {Boolean}
     */
	NewOption : false,
	
	/**
     * Indicates if database was created or needs to be created as Compressed.
     * @type {Boolean}
     */
	 CompressOption : false

};

/**
 * @class Appverse.Database.ResultSet
 * @namespace Appverse.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides a set of SQLite database query results.
 * @author maps
 * @version 1.0
 */
Appverse.Database.ResultSet = {

    /**
     * Number of query result rows.
     * @type {int}
     */
	RowCount : 0,
	
	/**
     * Number of query result column (returned table fields values).
     * @type {int}
     */
	ColumnCount : 0,
	
	/**
     * The names of the returned table fields.
     * @type {string[]}
     */
	 ColumnNames : [],
	
	/**
     * A list of returned rows. <br/><br/>For further information see, {@link Appverse.Database.ResultSetRow ResultSetRow}.
     * @type {Appverse.Database.ResultSetRow[]}
     */
	 RowsList : []
};

/**
 * @class Appverse.Database.ResultSetRow
 * @namespace Appverse.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides the data for a SQLite database query result row.
 * @author maps
 * @version 1.0
 */
Appverse.Database.ResultSetRow = {

    /**
     * The objects returned for the current result set row.
     * @type {Object[]}
     */
	 ColumnsList : []
};

// *****************************************
// *********** APPVERSE FYLESYSTEM API ********
// *****************************************

/**
 * @class Appverse.FileSystem.DirectoryData
 * @namespace Appverse.FileSystem
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing Directory (folder) in the filesystem.
 * @author maps
 * @version 1.0
 */
Appverse.FileSystem.DirectoryData = {

    /**
     * The relative path of the current Directory (folder) in the filesystem.
     * @type {String}
     */
	FullName : ''

};

/**
 * @class Appverse.FileSystem.FileData
 * @namespace Appverse.FileSystem
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing File in the filesystem.
 * @author maps
 * @version 1.0
 */
Appverse.FileSystem.FileData = {

    /**
     * The relative path of the current File in the filesystem.
     * @type {String}
     */
	FullName : '',
	
	/**
     * The length of the File.
     * @type {int}
     */
	Length: 0

};

// *****************************************
// *********** APPVERSE I/O API ********
// *****************************************

/**
 * @class Appverse.IO.IOHeader
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a Header to be included on the Request/Response (as a pair of Name and Value).
 * @author maps
 * @version 2.1
 */
Appverse.IO.IOHeader = {
	/**
     * The name (key name) for the current header.
     * @type {String}
     */
	Name : '',
	
	/**
     * The value (key value) for the current header.
     * @type {String}
     */
	Value : ''
	
};

/**
 * @class Appverse.IO.IOCookie
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a HTTP Cookie to be included on the Request/Response (as a pair of Name and Value).
 * @author maps
 * @version 2.1
 */
Appverse.IO.IOCookie = {
	/**
     * The name (key name) for the current cookie.
     * @type {String}
     */
	Name : '',
	
	/**
     * The value (key value) for the current cookie.
     * @type {String}
     */
	Value : ''
	
};

/**
 * @class Appverse.IO.IOHeaders
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Request/Response common data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Appverse.IO.IOHeaders = {
	/**
     * The request/response content type. MIME TYPE.
     * In case this content type attribute is specified on the IORequest object, 
	 * its value would override the mime type mapped for the service (service type configuration) for that request.
     * @type {String}
     */
	ContentType : '',
	
	/**
     * The headers array (name,value pairs) to be included on the I/O service request. <br/><br/>For further information see, {@link Appverse.IO.IOHeader IOHeader}.
     * @type {Appverse.IO.IOHeader[]}
     */
	Headers : [],
	
	/**
     * Request/Response data content (plain text).
     * @type {String}
     */
	Content : '',
	
	/**
     * The byte[] representing the {@link #Content Content} field.
     * @type {byte[]}
     */
	GetRawContent : [],
	
	/**
     * The length in bytes for the {@link #Content Content} field.
     * @type {int}
     */
	GetContentLength : 0,
	
	/**
     * The session context for the Request/Response. <br/><br/>For further information see, {@link Appverse.IO.IOSessionContext IOSessionContext}.
     * @type {Appverse.IO.IOSessionContext}
     */
	Session: null
};

/**
 * @class Appverse.IO.IORequest
 * @namespace Appverse.IO
 * @extends Appverse.IO.IOHeaders
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Request data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Appverse.IO.IORequest = {
	/**
     * The request method (please use uppercase).
     * In case this method attribute is specified on the IORequest object, 
	 * its value would override the req-method mapped for the service (service type configuration) for that particular request call.<br/><br/>
	 * @version 3.8
     * @type {String}
     */
	Method : '',
	
	/**
     * The HTTP procotol version to be used for this request.
	 * <br/>Possible values: 
	 * {@link Appverse.IO#HTTP_PROTOCOL_VERSION_1_0 HTTP_PROTOCOL_VERSION_1_0},
	 * {@link Appverse.IO#HTTP_PROTOCOL_VERSION_1_1 HTTP_PROTOCOL_VERSION_1_1} <br/><br/>
	 * @version 3.8
	 * @type {int}
     */
	ProtocolVersion : 0,
};

/**
 * @class Appverse.IO.IOResponse
 * @namespace Appverse.IO
 * @extends Appverse.IO.IOHeaders
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Response data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Appverse.IO.IOResponse = {
	/**
     * The byte[] representing the binary {@link #Content Content}.
     * @type {byte[]}
     */
	ContentBinary : [],
	
	/**
     * The length in bytes for the  binary {@link #Content Content}.
     * @type {int}
     */
	GetContentLengthBinary : 0,
};

/**
 * @class Appverse.IO.IOSessionContext
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the session context for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Appverse.IO.IOSessionContext = {
	/**
     * The cookies array (name,value pairs) to be included on the I/O service session (request and response). <br/><br/>For further information see, {@link Appverse.IO.IOCookie IOCookie}.
     * @type {Appverse.IO.IOCookie[]}
     */
	Cookies : []
};

/**
 * @class Appverse.IO.IOService
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a remote invocation service (end-point path, host, port, exchanged data, etc..).
 * @author maps
 * @version 1.0
 */
Appverse.IO.IOService = {
	/**
     * The name of the service (not unique, to uniquely define a service, use Name and Type).
     * @type {String}
     */
	Name : '',
	
	/**
     * The type of the service.
	 * <br/>Possible values: 
	 * {@link Appverse.IO#SERVICETYPE_AMF_SERIALIZATION SERVICETYPE_AMF_SERIALIZATION},
	 * {@link Appverse.IO#SERVICETYPE_GWT_RPC SERVICETYPE_GWT_RPC}, 
	 * {@link Appverse.IO#SERVICETYPE_OCTET_BINARY SERVICETYPE_OCTET_BINARY}, 
	 * {@link Appverse.IO#SERVICETYPE_REMOTING_SERIALIZATION SERVICETYPE_REMOTING_SERIALIZATION}, 
	 * {@link Appverse.IO#SERVICETYPE_REST_JSON SERVICETYPE_REST_JSON} 
	 * {@link Appverse.IO#SERVICETYPE_REST_XML SERVICETYPE_REST_XML}
	 * {@link Appverse.IO#SERVICETYPE_SOAP_JSON SERVICETYPE_SOAP_JSON} 
	 * {@link Appverse.IO#SERVICETYPE_SOAP_XML SERVICETYPE_SOAP_XML}
	 * {@link Appverse.IO#SERVICETYPE_XMLRPC_JSON SERVICETYPE_XMLRPC_JSON}
	 * & {@link Appverse.IO#SERVICETYPE_XMLRPC_XML SERVICETYPE_XMLRPC_XML}
	 * @type {int}
     */
	Type : 0,
	
	/**
     * The data for the service end-point. <br/><br/>For further information see, {@link Appverse.IO.IOServiceEndpoint IOServiceEndpoint}.
     * @type {Appverse.IO.IOServiceEndpoint}
     */
	Endpoint: null,
	
	/**
     * The method used to request the service.
	 * <br/>Possible values: 0 (POST), 1 (GET)
	 * @type {int}
     */
	RequestMethod: 0
};

/**
 * @class Appverse.IO.IOServiceEndpoint
 * @namespace Appverse.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a remote service end-point data (host, port, etc).
 * @author maps
 * @version 1.0
 */
Appverse.IO.IOServiceEndpoint = {
	
	/**
     * The remote service scheme.
     * @type {String}
     */
	Scheme: '',
	
	/**
     * The remote serice host (alias or IP).
     * @type {String}
     */
	Host: '',
	
	/**
     * The remote service accesible port.
     * @type {int}
     */
	Port: 0,
	
	/**
     * The remote service path (to be added to the host and port url).
     * @type {String}
     */
	Path: '',
	
	/**
     * The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://&lt;IP&gt;:&lt;Port&gt;".
     * @type {String}
     */
	ProxyUrl: ''
};

// *****************************************
// *********** APPVERSE GEO API ********
// *****************************************

/**
 * @class Appverse.Geo.Acceleration
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the current device acceleration (meters/second/second in the 3 axis: X , Y and Z).
 * @author maps
 * @version 1.0
 */
Appverse.Geo.Acceleration = {
	/**
     * The acceleration value for the x axis of the device (in meters/second^2).
     * @type {float}
     */
	X: 0,
	
	/**
     * The acceleration value for the y axis of the device (in meters/second^2).
     * @type {float}
     */
	Y: 0,
	
	/**
     * The acceleration value for the z axis of the device (in meters/second^2).
     * @type {float}
     */
	Z: 0,
	
	/**
     * The result acceleration for the calculated coordinates vector (in meters/second^2).
     * @type {float}
     */
	Accel: 0
};

/**
 * @class Appverse.Geo.LocationCoordinate
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the current device geographical position (coordinates).
 * @author maps
 * @version 1.0
 */
Appverse.Geo.LocationCoordinate = {
	
	/**
     * The X coordinate (or longitude). Measured in degrees.
     * @type {double}
     */
	XCoordinate: 0,
	
	/**
     * The Y coordinate (or latitude). Measured in degrees.
     * @type {double}
     */
	YCoordinate: 0,
	
	/**
     * The current device altitude (or Z coordinate). Measured in meters.
     * @type {double}
     */
	ZCoordinate: 0,
	
	/**
     * Dilution of precision on the X measurement. Measured in meters.
     * @type {float}
     */
	XDoP: 0,
	
	/**
     * Dilution of precision on the Y measurement. Measured in meters.
     * @type {float}
     */
	YDoP: 0
};

/**
 * @class Appverse.Geo.LocationDescription
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides generic information (name, description, category, etc.) for a given Location.
 * @author maps
 * @version 1.0
 */
Appverse.Geo.LocationDescription = {
	/**
     * General description for this Location.
     * @type {String}
     */
	Description: '',
	
	/**
     * Name for this Location.
     * @type {String}
     */
	Name: '',
	
	/**
     * Main category this Location (POI) belongs to. <br/><br/>For further information see, {@link Appverse.Geo.LocationCategory LocationCategory}.
     * @type {Appverse.Geo.LocationCategory}
     */
	CategoryMain: '',
	
	/**
     * List of categories this Location (POI) belongs to. <br/><br/>For further information see, {@link Appverse.Geo.LocationCategory LocationCategory}.
     * @type {Appverse.Geo.LocationCategory[]}
     */
	Categories: ''
};

/**
 * @class Appverse.Geo.LocationCategory
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a specific category (POIs use to be categorized).
 * @author maps
 * @version 1.0
 */
Appverse.Geo.LocationCategory = {
	/**
     * Name for this Category.
     * @type {String}
     */
	Name: ''
};

/**
 * @class Appverse.Geo.POI
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A POI (Point of Interest) is a GPS point location that someone may find useful or interesting.
 * <br/>This point of interest specifies, at least, the latitude and longitude. A name or description for the POI is usually included, and other information such as altitude or a telephone number may also be attached.
 * <br/>The POIs are normally categorized. This means that each POI belongs to a specific category (such as, restaurants, hospitals, etc.), and applications typically use icons to represent different categories of POI on a map graphically.
 * @author maps
 * @version 1.0
 */
Appverse.Geo.POI = {
	/**
     * Unique identifier for this Point of Interest.
     * @type {String}
     */
	ID: '',
	
	/**
     * Location coordinates for this Point of Interest. <br/><br/>For further information see, {@link Appverse.Geo.LocationCoordinate LocationCoordinate}.
     * @type {Appverse.Geo.LocationCoordinate}
     */
	Location: null,
	
	/**
     * Location description for this Point of Interest. <br/><br/>For further information see, {@link Appverse.Geo.LocationDescription LocationDescription}.
     * @type {Appverse.Geo.LocationDescription}
     */
	Description: null,
	
	/**
     * The category this Point of Interest belongs to. <br/><br/>For further information see, {@link Appverse.Geo.LocationCategory LocationCategory}.
     * @type {Appverse.Geo.LocationCategory}
     */
	Category: null
};


/**
 * @class Appverse.Geo.GeoDecoderAttributes
 * @namespace Appverse.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a specific category (POIs use to be categorized).
 * @author maps
 * @version 1.0
 */
Appverse.Geo.GeoDecoderAttributes = {
	/**
     * The additional street-level information for the location point, such as the street number, or floor number.
     * @type {String}
     */
	AdditionalStreetLevelInfo: '',
	
	/**
     * The street address associated with a location point.
     * @type {String}
     */
	StreetAddress: '',
	
	/**
     * The city associated with the location point.
     * @type {String}
     */
	Locality: '',
	
	/**
     * The additional city-level information for the location point.
     * @type {String}
     */
	AdditionalCityLevelInfo: '',
	
	/**
     * The postal code associated with the location point.
     * @type {String}
     */
	PostalCode: '',
	
	/**
     * The name of the country associated with the location point.
     * @type {String}
     */
	Country: '',
	
	/**
     * The abbreviated country name, for example "US".
     * @type {String}
     */
	CountryCode: '',
	
	/**
     * The state associated with the location point, for example "CA" or "California".
     * @type {String}
     */
	AdministrativeArea: '',
	
	/**
     * The additional administrative area information for the location point.
     * @type {String}
     */
	SubAdministrativeArea: ''
};

// *****************************************
// *********** APPVERSE MEDIA API *************
// *****************************************

/**
 * @class Appverse.Media.MediaMetadata
 * @namespace Appverse.Media
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a media file.
 * @author maps
 * @version 1.0
 */
Appverse.Media.MediaMetadata = {
	/**
     * The media file type.
	 * <br/>Possible values: {@link Appverse.Media#MEDIATYPE_NOT_SUPPORTED MEDIATYPE_NOT_SUPPORTED}, 
	 * {@link Appverse.Media#MEDIATYPE_AUDIO MEDIATYPE_AUDIO}, 
	 * {@link Appverse.Media#MEDIATYPE_VIDEO MEDIATYPE_VIDEO} & {@link Appverse.Media#MEDIATYPE_PHOTO MEDIATYPE_PHOTO}
	 * @type {int}
     */
	 Type: 0,
	
	 /**
     * The media file MIME type.
	 * @type {String}
     */	
	 MimeType: '',
	
	 /**
     * The media file memmory pointer type (where media file is).
	 * @type {long}
     */
	 Handle: 0,
	
	 /**
     * The media file artist.
	 * @type {String}
     */
	 Artist: '',
	
	 /**
     * The media file title.
	 * @type {String}
     */
	 Title: '',
	 
	 /**
     * The media file album.
	 * @type {String}
     */
        Album: '',

	/**
     * The media file category.
	 * @type {String}
     */
	 Category: '',

	/**
     * The media file position (current reproduction position).
	 * @type {long}
     */
     DurationOffset: 0,
	
	 /**
     * The media file duration.
	 * @type {long}
     */
     Duration: 0,

	/**
     * The relative path - under the application "Documents" folder - where the media file is located.
	 * @type {String}
     */
	 ReferenceUrl: ''
     
};

/**
 * @class Appverse.Media.MediaQRContent
 * @namespace Appverse.Media
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a QR Code content read.
 * @author maps
 * @version 3.9
 */
Appverse.Media.MediaQRContent = {

	/**
     * The media text included inside the QR Code.
	 * @type {String}
     */
	Text: '',
	
	/**
     * The media QR Code type.
	 * <br/>Possible values: {@link Appverse.Media#QRTYPE_ADDRESSBOOK QRTYPE_ADDRESSBOOK}, 
	 * {@link Appverse.Media#QRTYPE_EMAIL_ADDRESS QRTYPE_EMAIL_ADDRESS}, 
	 * {@link Appverse.Media#QRTYPE_TEXT QRTYPE_TEXT},
	 * {@link Appverse.Media#QRTYPE_GEO QRTYPE_GEO},
	 * {@link Appverse.Media#QRTYPE_TEL QRTYPE_TEL},
	 * {@link Appverse.Media#QRTYPE_SMS QRTYPE_SMS},
	 * {@link Appverse.Media#QRTYPE_CALENDAR QRTYPE_CALENDAR}, 
	 * {@link Appverse.Media#QRTYPE_WIFI QRTYPE_WIFI}, 
	 * {@link Appverse.Media#QRTYPE_ISBN QRTYPE_ISBN}, 
	 * {@link Appverse.Media#QRTYPE_PRODUCT QRTYPE_PRODUCT} & {@link Appverse.Media#QRTYPE_URI QRTYPE_URI}
	 * @type {int}
     */
	QRType: 0,
	
	/**
     * The Barcode type.
	 * @type {int}
     */
	BarcodeType: 0,
};

// *****************************************
// *********** APPVERSE MESSAGING API *************
// *****************************************

/**
 * @class Appverse.Messaging.EmailData
 * @namespace Appverse.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email data to be send by email (subject, from address, cc adress, attchaments, etc).
 * @author maps
 * @version 1.0
 */
Appverse.Messaging.EmailData = {
	
	
	 /**
     * The email subject.
	 * @type {String}
     */	
	 Subject: '',
	
	 /**
     * The email from address (the address we are sending from the email). <br/><br/>For further information see, {@link Appverse.Messaging.EmailAddress EmailAddress}.
	 * @type {Appverse.Messaging.EmailAddress}
     */
	 FromAddress: null,
	
	 /**
     * The email TO recipients list. <br/><br/>For further information see, {@link Appverse.Messaging.EmailAddress EmailAddress}.
	 * @type {Appverse.Messaging.EmailAddress[]}
     */
	 ToRecipients: [],
	 
	 /**
     * The email CC recipients list. <br/><br/>For further information see, {@link Appverse.Messaging.EmailAddress EmailAddress}.
	 * @type {Appverse.Messaging.EmailAddress[]}
     */
	 CcRecipients: [],
	 
	 /**
     * The email BCC recipients list. <br/><br/>For further information see, {@link Appverse.Messaging.EmailAddress EmailAddress}.
	 * @type {Appverse.Messaging.EmailAddress[]}
     */
	 BccRecipients: [],
	
	 /**
     * The mime type for the message body.
	 * @type {String}
     */
	MessageBodyMimeType: '',
	
	/**
     * The email message body.
	 * @type {String}
     */
	MessageBody: '',
	
	/**
     * The email attached files. <br/><br/>For further information see, {@link Appverse.Messaging.AttachmentData AttachmentData}.
	 * @type {Appverse.Messaging.AttachmentData[]}
     */
	Attachment: []
	
};

/**
 * @class Appverse.Messaging.EmailAddress
 * @namespace Appverse.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email address data (email attributes FromAddress, ToRecipients, CcRecipients, BccRecipients will contain email addresses).
 * @author maps
 * @version 1.0
 */
Appverse.Messaging.EmailAddress = {
	
	/**
     * The first name of the display name for the address.
	 * @type {String}
     */
 	Firstname: '',

	/**
     * The surname of the display name for the address.
	 * @type {String}
     */
	 Surname: '',
	
	/**
     * The common name (alias) for the address.
	 * @type {String}
     */
	CommonName: '',
	
	/**
     * The email address string. In the form: address@xyz.com
	 * @type {String}
     */
     Address: ''
};

/**
 * @class Appverse.Messaging.AttachmentData
 * @namespace Appverse.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Attachment data for an email (email attributes Attachment shoould contain AttachmentData objects).
 * @author maps
 * @version 1.0
 */
Appverse.Messaging.AttachmentData = {
	
	/**
     * The mime type of the current attachment.
	 * @type {String}
	 * <br/><br/> <img src="resources/images/warning.png"/> &nbsp; When attaching <b>PDF</b> files to an email in <b>iOS</b>, you should take into account that a file with the <b>"application/pdf"</b> mime type (the default type for those files) could be attached in some cases as an <b>inline</b> image, rather than an attached file. To avoid those situations and always attach PDF files as attachments you should use the <b>"text/x-pdf"</b> mime type.
	 * 
     */
	MimeType: '',
	
	/**
     * The name of the current file attachment.
	 * @type {String}
     */
	FileName:'',
	
	/**
     * The raw data for the current file attachment (byte array).
	 * @type {byte[]}
     */
	Data: [],
	
	/**
     * The data size (in bytes) of the current file attachment.
	 * @type {long}
     */
	DataSize: 0,

	/**
     * The relative path - under the application "Documents" folder - where the contents for the attachment file could be located.<br/><br/>
     * The Messaging API will use this reference url if no contents are provided on the {@link Appverse.Messaging.AttachmentData#Data Data[]}
	 * @type {String}
     */
	 ReferenceUrl: ''
	
};


// *************************************************************************
// ************************** APPVERSE NET API ****************************
// *************************************************************************

/**
 * @class Appverse.Net.NetworkData
 * @namespace Appverse.Net
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Data related to the device active network connection.
 * @author ddbc
 * @version 3.8.5
 */
 Appverse.Net.NetworkData = {
 	/**
     * Current active IP Address v4.
	 * @type {String}
     */ 
	IPv4: '',
	
	/**
     * Current active IP Address v6.
	 * @type {String}
     */ 
	IPv6: ''

 };


// *************************************************************************
// *********** APPVERSE PIM (Personal Information Management) API *************
// *************************************************************************

/**
 * @class Appverse.Pim.ContactLite
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Data to be "stored on" or "provided by" the phone's agenda as contact data.
 * @author maps
 * @version 4.3
 */
Appverse.Pim.ContactLite = {
	
	/**
     * The contact unique identifier.
	 * @type {String}
     */ 
	ID: '',
	
	/**
     * The name for the current contact.
	 * @type {String}
     */ 
	Name: '',
	
    /**
     * The firstname for the current contact.
	 * @type {String}
     */ 
	Firstname: '',
    
	/**
     * The lastname for the current contact.
	 * @type {String}
     */ 
	Lastname: '',
      
	/**
     * The display name for the current contact.
	 * @type {String}
     */ 
	DisplayName: '',
       
	/**
     * The group this contact belongs to.
	 * @type {String}
     */ 
	Group: '',

    /**
     * The list of phone numbers for this contact. <br/><br/>For further information see, {@link Appverse.Pim.ContactPhone ContactPhone}.
	 * @type {ContactPhone[]}
     */
	Phones: [],
       
	/**
     * The mime type of the current attachment. <br/><br/>For further information see, {@link Appverse.Pim.ContactEmail ContactEmail}.
	 * @type {ContactEmail[]}
     */
	Emails: []
};

/**
 * @class Appverse.Pim.Contact
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Data to be "stored on" or "provided by" the phone's agenda as contact data.
 * @author maps
 * @version 1.0 / reviewed 4.3
 */
Appverse.Pim.Contact = {
	
	/**
     * The job title for the current contact.
	 * @type {String}
     */ 
	JobTitle: '',
       
	/**
     * The department this contact belongs to.
	 * @type {String}
     */
	Department: '',

    /**
     * The web sites associated with the current contact.
	 * @type {String[]}
     */
	WebSites: '',
       
	/**
     * The mime type of the current attachment.
	 * @type {String}
     */ 
	Notes: '',
       
	/**
     * The type of the relationship associated with the current contact.
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#RELATIONSHIP_BROTHER RELATIONSHIP_BROTHER}, 
	 * {@link Appverse.Pim#RELATIONSHIP_CHILD RELATIONSHIP_CHILD}, 
	 * {@link Appverse.Pim#RELATIONSHIP_FRIEND RELATIONSHIP_FRIEND}, 
	 * {@link Appverse.Pim#RELATIONSHIP_NONE RELATIONSHIP_NONE} 
	 * {@link Appverse.Pim#RELATIONSHIP_PARENT RELATIONSHIP_PARENT}
	 * {@link Appverse.Pim#RELATIONSHIP_PARTNER RELATIONSHIP_PARTNER} 
	 * {@link Appverse.Pim#RELATIONSHIP_RELATIVE RELATIONSHIP_RELATIVE}
	 * {@link Appverse.Pim#RELATIONSHIP_SISTER RELATIONSHIP_SISTER}
	 * & {@link Appverse.Pim#RELATIONSHIP_SPOUSE RELATIONSHIP_SPOUSE}
	 * @type {int}
     */
	 Relationship: 0,
	
	/**
     * The mime type of the current attachment. <br/><br/>For further information see, {@link Appverse.Pim.ContactAddress ContactAddress}.
	 * @type {Appverse.Pim.ContactAddress[]}
     */
	Addresses: [],

	/**
     * The picture associated with this contact. In this case, raw data (byte array).
	 * @type {byte[]}
     */ 
	Photo: [],
	
	/**
     * The picture associated with this contact. In this case, the base64 encoding data (string).
	 * @type {String}
     */ 
	PhotoBase64Encoded: '',
};

/**
 * @class Appverse.Pim.ContactQuery
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the query to apply for searching/listing contacts in the phone.<br/>
 * The query has a Condition to be applied (Equals, StartsWith, EndsWith, Contains) against a specific Column (id or name) comparing the given Value.
 * @author maps
 * @version 4.3
 */
Appverse.Pim.ContactQuery = {

	/**
     * The type of condition used to query for contacts.
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#CONTACTS_QUERY_CONDITION_EQUALS}, 
	 * {@link Appverse.Pim#CONTACTS_QUERY_CONDITION_STARTSWITH}, 
	 * {@link Appverse.Pim#CONTACTS_QUERY_CONDITION_ENDSWITH}, 
	 * {@link Appverse.Pim#CONTACTS_QUERY_CONDITION_CONTAINS}
	 * @type {int}
     */
	Condition: 0,
	
	/**
     * The column to evaluate the value against to query for contacts.
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#CONTACTS_QUERY_COLUMN_ID}, 
	 * {@link Appverse.Pim#CONTACTS_QUERY_COLUMN_NAME}
	 * @type {int}
     */
	Column: 0,
	
	/**
     * The value being queried against the specified Column.
	 * @type {String}
     */
	Value: '',
	
};

/**
 * @class Appverse.Pim.ContactPhone
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Phone data for a contact.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.ContactPhone = {
	
	/**
     * The type of phone number.
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#NUMBERTYPE_FIXED_LINE NUMBERTYPE_FIXED_LINE}, 
	 * {@link Appverse.Pim#NUMBERTYPE_HOME_FAX NUMBERTYPE_HOME_FAX}, 
	 * {@link Appverse.Pim#NUMBERTYPE_MOBILE NUMBERTYPE_MOBILE}, 
	 * {@link Appverse.Pim#NUMBERTYPE_OTHER NUMBERTYPE_OTHER} 
	 * {@link Appverse.Pim#NUMBERTYPE_PAGER NUMBERTYPE_PAGER}
	 * {@link Appverse.Pim#NUMBERTYPE_WORK NUMBERTYPE_WORK} 
	 * & {@link Appverse.Pim#NUMBERTYPE_WORK_FAX NUMBERTYPE_WORK_FAX}
	 * @type {int}
     */
	Type: 0,

	/**
     * The number for the current phone data. It could be either a 'local-number' or a 'global-number', i.e., start with a '+'.
	 * @type {String}
     */
	 Number: '',
	
	/**
     * Whether this phone is the primary one or not.
	 * @type {Boolean}
     */
	IsPrimary: false
};

/**
 * @class Appverse.Pim.ContactEmail
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email data for a contact.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.ContactEmail = {
	
	/**
     * The first name of the display name for the contact email address.
	 * @type {String}
     */
 	Firstname: '',

	/**
     * The surname of the display name for the contact email address.
	 * @type {String}
     */
	Surname: '',
	
	/**
     * The common name (alias) for the contact email address.
	 * @type {String}
     */
	CommonName: '',
	
	/**
     * The contact email address string. In the form: address@xyz.com
	 * @type {String}
     */
     Address: '',
	
	/**
     * The type of email address (home, work, etc.)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_HOME_OFFICE DISPOSITIONTYPE_HOME_OFFICE}, 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_OTHER DISPOSITIONTYPE_OTHER}, 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_PERSONAL DISPOSITIONTYPE_PERSONAL}, 
	 * & {@link Appverse.Pim#DISPOSITIONTYPE_WORK DISPOSITIONTYPE_WORK} 
	 * @type {int}
     */
	Type: 0,
	
	/**
    * Whether this email is the primary one or not.
 	* @type {Boolean}
    */
	IsPrimary: false
	
};

/**
 * @class Appverse.Pim.ContactAddress
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Address data (street, number, postal code, city, etc.) for a contact.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.ContactAddress = {
	
	/**
     * The type of contact address (home, work, etc.)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_HOME_OFFICE DISPOSITIONTYPE_HOME_OFFICE}, 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_OTHER DISPOSITIONTYPE_OTHER}, 
	 * {@link Appverse.Pim#DISPOSITIONTYPE_PERSONAL DISPOSITIONTYPE_PERSONAL}, 
	 * & {@link Appverse.Pim#DISPOSITIONTYPE_WORK DISPOSITIONTYPE_WORK} 
	 * @type {int}
     */
	Type: 0,
	
	/**
     * The contact address (street)
	 * @type {String}
     */
	Address: '',
	
	/**
     * The contact address (flat number, floor, door, etc)
	 * @type {String}
     */
	AddressNumber: '',
	
	/**
     * The contact address ZIP postal code.
	 * @type {String}
     */
	PostCode: '',
	
	/**
     * The city for the current contact address.
	 * @type {String}
     */
	City: '',
	
	/**
     * The country for the current contact address.
	 * @type {String}
     */
	Country: ''
	
};

/**
 * @class Appverse.Pim.CalendarEntry
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Personal entries to be "stored on" or "provided by" the phone's calendar.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.CalendarEntry = {
	
	/**
     * The unique identifier for this calendar entry.
	 * @type {String}
     */
	Uid: '',
	
	/**
     * The title for this calendar entry.
	 * @type {String}
     */
	Title: '',
	
	/**
     * The notes text for this calendar entry.
	 * @type {String}
     */
	Notes: '',
	
	/**
     * The location for this calendar entry.
	 * @type {String}
     */
	Location: '',
	
	/**
     * The type of this calendar entry (birthday, local, subscription, etc.)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#CALENDARTYPE_BIRTHDAY CALENDARTYPE_BIRTHDAY}, 
	 * {@link Appverse.Pim#CALENDARTYPE_CALDAV CALENDARTYPE_CALDAV}, 
	 * {@link Appverse.Pim#CALENDARTYPE_EXCHANGE CALENDARTYPE_EXCHANGE}, 
	 * {@link Appverse.Pim#CALENDARTYPE_IMAP CALENDARTYPE_IMAP} 
	 * {@link Appverse.Pim#CALENDARTYPE_LOCAL CALENDARTYPE_LOCAL} 
	 * {@link Appverse.Pim#CALENDARTYPE_OTHER CALENDARTYPE_OTHER}
	 * & {@link Appverse.Pim#CALENDARTYPE_SUBSCRIPTION CALENDARTYPE_SUBSCRIPTION} 
	 * @type {int}
     */
	Type: 0,
	
	/**
     * Whether this calendar entry is editable or not.
	 * @type {Boolean}
     */
	IsEditable: false,
	
	/**
     * Whether this calendar entry is for an all-day-event or not.
	 * @type {Boolean}
     */
	IsAllDayEvent: false,
	
	/**
     * The start date for this calendar entry. <br/><br/>For further information see, {@link Appverse.DateTime DateTime}.
	 * @type {Appverse.DateTime}
     */
	StartDate: null,
	
	/**
     * The end date for this calendar entry. <br/><br/>For further information see, {@link Appverse.DateTime DateTime}.
	 * @type {Appverse.DateTime}
     */
	EndDate: null,
	
	/**
     * The attendees list for this calendar entry. <br/><br/>For further information see, {@link Appverse.Pim.CalendarAttendee CalendarAttendee}.
	 * @type {Appverse.Pim.CalendarAttendee[]}
     */
	Attendees: [],
	
	/**
     * The alarms list (type and frequency) for this calendar entry. <br/><br/>For further information see, {@link Appverse.Pim.CalendarAlarm CalendarAlarm}.
	 * @type {Appverse.Pim.CalendarAlarm[]}
     */
	Alarms: [],
	
	/**
     * Whether this calendar entry is a recurrent event or not.
	 * @type {Boolean}
     */
	IsRecurrentEvent: false,
	
	/**
     * The recurrence - if any - of this calendar entry. <br/><br/>For further information see, {@link Appverse.Pim.CalendarRecurrence CalendarRecurrence}.
	 * @type {Appverse.Pim.CalendarRecurrence}
     */
	Recurrence: null,
	
	/**
     * How many times - accordingly to the recurrence type - calendar will repeat this entry.
	 * For example, if this recurrence number indicates 4, and the recurrence type indicates monthly... this calendar entry will be repease each month during just the next 4 months.
	 * @type {long}
     */
	RecurrenceNumber: 0
	
};


/**
 * @class Appverse.Pim.CalendarRecurrence
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The recurrence data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.CalendarRecurrence = {
	/**
     * The recurrence type - if any - of this calendar entry (daily, monthly, etc.)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#RECURRENCE_FORTNIGHTLY RECURRENCE_FORTNIGHTLY}, 
	 * {@link Appverse.Pim#RECURRENCE_FOURWEEKLY RECURRENCE_FOURWEEKLY}, 
	 * {@link Appverse.Pim#RECURRENCE_MONTLY RECURRENCE_MONTLY}, 
	 * {@link Appverse.Pim#RECURRENCE_WEEKLY RECURRENCE_WEEKLY} 
	 * & {@link Appverse.Pim#RECURRENCE_YEARLY RECURRENCE_YEARLY} 
	 * @type {int}
     */
	Type: 0,
	
	/**
     * The number of intervals between the specified pattern of a recurring event.
	 * @type {int}
     */
	Interval: 0,
	
	/**
     * The day of the week, a number from 1 to 7 with Sunday equal to 1.
	 * @type {int}
     */
	DayOfTheWeek: 0,
	
	/**
     * The date the recurrence ends. <br/><br/>For further information see, {@link Appverse.DateTime DateTime}.
	 * @type {Appverse.DateTime}
     */
	EndDate: null

};

/**
 * @class Appverse.Pim.CalendarAttendee
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The attendee data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.CalendarAttendee = {
	
	/**
     * The name of the attendee.
	 * @type {String}
     */
	Name: '',
	
	/**
     * The address of the attendee.
	 * @type {String}
     */
	Address: '',
	
	/**
     * The status of the request send to the attendee (accepted, declined, etc)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#ATTENDEESTATUS_ACCEPTED ATTENDEESTATUS_ACCEPTED}, 
	 * {@link Appverse.Pim#ATTENDEESTATUS_DECLINED ATTENDEESTATUS_DECLINED}, 
	 * {@link Appverse.Pim#ATTENDEESTATUS_NeedsAction ATTENDEESTATUS_NeedsAction},
	 * & {@link Appverse.Pim#ATTENDEESTATUS_TENTATIVE ATTENDEESTATUS_TENTATIVE} 
	 * @type {int}
     */
	 Status: 0
	
};

/**
 * @class Appverse.Pim.CalendarAlarm
 * @namespace Appverse.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The alarm data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Appverse.Pim.CalendarAlarm = {
	
	
	/**
     * The type of alarm for a calendar entry (display, sound, etc)
	 * <br/>Possible values: 
	 * {@link Appverse.Pim#ALARM_DISPAY ALARM_DISPAY}, 
	 * {@link Appverse.Pim#ALARM_EMAIL ALARM_EMAIL}, 
	 * {@link Appverse.Pim#ALARM_SOUND ALARM_SOUND},
	 * & {@link Appverse.Pim#ATTENDEESTATUS_TENTATIVE ATTENDEESTATUS_TENTATIVE} 
	 * @type {int}
     */
	Action: 0,
	
	/**
     * The datetime trigger to start the alarm. <br/><br/>For further information see, {@link Appverse.DateTime DateTime}.
	 * @type {Appverse.DateTime}
     */
	Trigger: null,
	
	/**
     * The email address for an alarm of type {@link Appverse.Pim#ALARM_EMAIL ALARM_EMAIL}.
	 * @type {String}
     */
	EmailAddress: '',
	
	/**
     * The sound to be executed for an alarm of type {@link Appverse.Pim#ALARM_SOUND ALARM_SOUND}.
	 * @type {String}
     */
	Sound: ''
};

// *****************************************
// *********** APPVERSE I18N API **************
// *****************************************

/**
 * @class Appverse.I18N.Locale
 * @namespace Appverse.I18N
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a specific geographical, political, or cultural region, by giving the language and country 
 * @author maps
 * @version 1.0
 */
Appverse.I18N.Locale = {

    /**
     * A valid ISO Language Code.<br/>These codes are the lower-case, two-letter codes as defined by ISO-639. 
	 * <a href="http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt">http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt</a>
     * @type {String}
     */
	Language : '',
	
	/**
     * A valid ISO Country Code.<br/>These codes are the upper-case, two-letter codes as defined by ISO-3166. 
	 * <a href="http://www.chemie.fu-berlin.de/diverse/doc/ISO_3166.html">http://www.chemie.fu-berlin.de/diverse/doc/ISO_3166.html</a>
     * @type {String}
     */
	Country : ''

};


/**
 * @class Appverse.I18N.ResourceLiteralDictionary
 * @namespace Appverse.I18N
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Dictionary object (or hashmap) with all the keyed literals mapped for the current locale or for a given locale.
 * <br/> You could get the value of a keyed literal checking <b>resourceLiteralDictionary.MY_KEY</b> or <b>resourceLiteralDictionary["MY_KEY"]</b>
 * @author maps
 * @version 3.2
 */
Appverse.I18N.ResourceLiteralDictionary = {};

// *************************************************
// *********** APPVERSE NOTIFICATION API **************
// *************************************************

/**
 * @class Appverse.Notification.NotificationData
 * @namespace Appverse.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data received on a remote or local notificaition (alert message, sound to be played, badged number to be displayed on the application icon, and any required custom data (JSON format)
 * @author maps
 * @version 3.9
 */
Appverse.Notification.NotificationData = {

    /**
     * The message text to be shown on this notification.
     * @type {String}
     */
	AlertMessage : '',
	
	/**
     * The name of a sound file in the application bundle, that would be played as an alert. If the sound file doesn't exist or 'default' is specified as the value, the default alert sound is played. 
     * @type {String}
     */
	Sound : 'default',
	
	/**
     * The number to display as the badge of the application icon. To remove the badge, value should be set to 0.
     * @type {int}
     */
	Badge : 0,
	
	/**
     * Custom payload values received on this notification. JSON structured with primitive types: dictionary (object), array, string, number, and boolean.
     * @type {String}
     */
	CustomDataJsonString : ''
};


/**
 * @class Appverse.Notification.RegistrationToken
 * @namespace Appverse.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent the "device token", or "registration token", that contains information that enables the Push Notifications Service (APNs for Apple, or GCM for Google) to locate the device on which the client application is installed. It is also used to authenticate the routing of a notification.
 * @author maps
 * @version 3.9
 */
Appverse.Notification.RegistrationToken = {

	/**
     * The string representation of this registration token (could be in hexadecimal format).
     * @type {String}
     */
	StringRepresentation : '',
	
	/**
     * The binary representation of this registration token.
     * @type {byte[]}
     */
	Binary : [],
	
	/**
     * The length of the binary representation of this registration token.
     * @type {int}
     */
	BinaryLength : 0,

};

/**
 * @class Appverse.Notification.RegistrationError
 * @namespace Appverse.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent error data on a failure registration for receiving remote notifications.
 * @author maps
 * @version 3.9
 */
Appverse.Notification.RegistrationError = {
	/**
     * The error code.
	 * <br/>Possible values: {@link Appverse.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT}, {@link Appverse.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID} & {@link Appverse.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER}
     * @type {String}
     */
	Code : '',
	
	/**
     * The error description (already localized on the device current locale).
     * @type {String}
     */
	LocalizedDescription : ''
};

/**
 * @class Appverse.Notification.SchedulingData
 * @namespace Appverse.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent scheduling data for firing a local notification at a specific time (fire date and interval).
 * @author maps
 * @version 3.9
 */
Appverse.Notification.SchedulingData = {
	
	/**
     * The fire date for the scheduled local notification. <br/><br/>For further information see, {@link Appverse.DateTime DateTime}.
	 * @type {Appverse.DateTime}
     */
	FireDate : '',
	
	/**
     * The repeat interval for the scheduled local notification
	 * <br/>Possible values: 
	 * {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_NO_REPEAT LOCAL_NOTIFICATION_REPEAT_INTERVAL_NO_REPEAT}, 
	 * {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_HOURLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_HOURLY}, 
	 * {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_DAILY LOCAL_NOTIFICATION_REPEAT_INTERVAL_DAILY}, 
	 * {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_WEEKLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_WEEKLY} 
	 * {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_MONTHLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_MONTHLY} 
	 * & {@link Appverse.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_YEARLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_YEARLY} 
	 * @type {int}
     */
	RepeatInterval : 0
};

// *****************************************
// *********** APPVERSE WEBTREKK API **************
// *****************************************

/**
 * @class Appverse.Webtrekk.WebtrekkParametersCollection
 * @namespace Appverse.Webtrekk
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A collection of Webtrekk Parameters (a name/value pairs) to be transmitted in addition to a content tracked.
 * @author maps
 * @version 3.8
 */
Appverse.Webtrekk.WebtrekkParametersCollection = {

    /**
     * Array of Webtrekk parameters. <br/><br/>For further information see, {@link Appverse.Webtrekk.WebtrekkParameter WebtrekkParameter}.
     * @type {WebtrekkParameter}
     */
	AdditionalParameters : []

};

/**
 * @class Appverse.Webtrekk.WebtrekkParameter
 * @namespace Appverse.Webtrekk
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A Webtrekk Parameter (a name/value pair) to be transmitted in addition to a content tracked.
 * @author maps
 * @version 3.8
 */
Appverse.Webtrekk.WebtrekkParameter = {

    /**
     * The name of the additional parameter.
     * @type {String}
     */
	Name : '',
	
	/**
     * The value of the additional parameter.
     * @type {String}
     */
	Value : ''

};

// *****************************************
// ******* APPVERSE APPLOADER API *************
// *****************************************

/**
 * @class Appverse.AppLoader.ModuleContext
 * @namespace Appverse.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data required to initialize the working context for the AppLoader API.
 * <br><br>For example, the field <b>{@link Appverse.AppLoader.ModuleContext#User User}</b> is used by this API to store contents under a specific 'User' folder (so they can only be accessible if context is initialized for that user).
 * <br><br>There are also some context fields to change the default text displayed on some native loading messages (LoadingMessage_xxxx) or error alerts (AlertMessage_xxx).
 * <br><br>See more information at <b>Appverse.AppLoader.InitializeModuleContext</b>.
 * @author maps
 * @version 4.0
 */
Appverse.AppLoader.ModuleContext = {
	
	/**
     * The  current user (name). It is used by the API to store user contents under a specific folder, only accessible by this user.
     * @type {String}
     */
	User: '',
	
	/**
     * The current user credentials. OPTIONAL.<br/> It should be the <b>"username:password"</b> string concatenation encoded in <a href="http://en.wikipedia.org/wiki/Base64"><b>Base64</b></a>.<br/> If provided, the <a href="http://en.wikipedia.org/wiki/Basic_access_authentication#Client_side"><b>HTTP Basic Authentication</b></a> header (Authorization) will be send when updating modules.
     * @type {String}
     */
	Credentials: '',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when updating a bunch of modules (by calling the method <b>Appverse.AppLoader.UpdateModules</b>).
     * @type {String}
     */
	LoadingMessage_UpdateModules: 'Updating Modules',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when updating a single module (by calling the method <b>Appverse.AppLoader.UpdateModule</b>, or calling the <b>Appverse.AppLoader.LoadModule</b> with the 'autoUpload' flag set to true).
     * @type {String}
     */
	LoadingMessage_UpdateModule: 'Updating Module',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when deleting a bunch of modules (by calling the method <b>Appverse.AppLoader.DeleteModules</b>).
     * @type {String}
     */
	LoadingMessage_DeleteModule: 'Deleting Modules',
		
	/**
     * The custom text (localized by the application) for the native notification alert <b>title</b> that is shown when an error occurres loading a module (by calling the method <b>Appverse.AppLoader.LoadModule</b>).
     * @type {String}
     */
	AlertMessage_Title: 'AppLoader Alert',
	
	/**
     * The custom text (localized by the application) for the native notification alert <b>body</b> that is shown when an error occurres loading a module (by calling the method <b>Appverse.AppLoader.LoadModule</b>).
     * @type {String}
     */
	AlertMessage_LoadModuleError: 'The module could not be loaded',
};

/**
 * @class Appverse.AppLoader.Module
 * @namespace Appverse.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data required to update, install, delete or load a module (or sub application) inside the parent application. <br><br>See more information at <b>Appverse.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Appverse.AppLoader.Module = {
	
	/**
     * The  module unique identifier.
     * @type {String}
     */
	Id: '',
	
	/**
     * The  module version.
     * @type {Untiy.AppLoader.ModuleVersion}
     */
	Version: null,

	/**
     * The loading url (remote host) where the contents of this module could be updated from.
     * @type {String}
     */
	LoadUrl: ''
};

/**
 * @class Appverse.AppLoader.ModuleVersion
 * @namespace Appverse.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the version data of a module (or sub application). <br><br> Application version is composed in the format of <b>Major.Minor.Revision</b>. <br><br>See more information at <b>Appverse.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Appverse.AppLoader.ModuleVersion = {

	/**
     * The major component of this module version.
     * @type {String}
     */
	Major: '',
	
	/**
     * The minor component of this module version.
     * @type {String}
     */
	Minor: '',
	
	/**
     * The revision component of this module version.
     * @type {String}
     */
	Revision: ''
};

/**
 * @class Appverse.AppLoader.ModuleParam
 * @namespace Appverse.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a Parameter to be included on the Request when loading an specific Module into the current platform WebView (as a pair of Name and Value); by using the method <b>Appverse.AppLoader.LoadModule</b>
 * <br><br>See more information at <b>Appverse.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Appverse.AppLoader.ModuleParam = {

	/**
     * The name of this module parameter.
     * @type {String}
     */
	Name: '',
	
	/**
     * The value of this module parameter.
     * @type {String}
     */
	Value: ''
};

// *****************************************
// ********** APPVERSE SECURITY API ***********
// *****************************************

/**
 * @class Appverse.Security.KeyPair
 * @namespace Appverse.Security
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a key/value pair to be stored/retrieved/removed into/from the device local secure storage<br><br> See more information at <b>Appverse.Security</b>.
 * @author ddbc
 * @version 4.2
 */
Appverse.Security.KeyPair = {

	/**
     * The name of the key
     * @type {String}
     */
	Key: '',
	
	/**
     * The value to be stored
     * @type {String}
     */
	Value: ''
};
 
 
 
 