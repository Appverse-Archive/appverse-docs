
// *****************************************
// *********** UNITY CONTEXT ************
// *****************************************

/**
 * @class Unity.is 
 * This class gives information about current device (what kind of device it is, etc)
 * <pre>Usage: Unity.is.&lt;property&gt;.<br><br>Example:<br> if(Unity.is.Phone) { <br> &nbsp;&nbsp;// do something here only for smartphone devices <br> }</pre>
 * @singleton
 */
Unity.is = {
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
 * @class Unity.DateTime
 * @namespace Unity
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes, the class does not really exist in this package, do not try to instantiate it.<br/><br/>
 * The DateTime object that stores the date (day, month, year) and time (hours, minutes and seconds) data for a specific date. Used mostly in Calendar and Notification APIs.
 * @author maps
 * @version 1.0
 */
Unity.DateTime = {
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
// *********** UNITY SYSTEM API ************
// *****************************************

/**
 * @class Unity.System.HardwareInfo
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device hardware.
 * @author maps
 * @version 1.0
 */
Unity.System.HardwareInfo = {

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
 * @class Unity.System.OSInfo
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the operating system.
 * @author maps
 * @version 1.0
 */
Unity.System.OSInfo = {

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
 * @class Unity.System.CPUInfo
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device CPU.
 * @author maps
 * @version 1.0
 */
Unity.System.CPUInfo = {

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
 * @class Unity.System.Locale
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a specific geographical, political, or cultural region, by giving the language and country 
 * @author maps
 * @version 1.0
 */
Unity.System.Locale = {

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
 * @class Unity.System.MemoryStatus
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides a global map of the memory status for all storage types installed.
 * @author maps
 * @version 1.0
 */
Unity.System.MemoryStatus = {

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
 * @class Unity.System.PowerInfo
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the device charge.
 * @author maps
 * @version 1.0
 */
Unity.System.PowerInfo = {

    /**
     * Power Status.
     * <br/>Possible values: {@link Unity.System#POWER_CHARGING POWER_CHARGING}, {@link Unity.System#POWER_DISCHARGING POWER_DISCHARGING}, {@link Unity.System#POWER_FULLY_CHARGED POWER_FULLY_CHARGED} & {@link Unity.System#POWER_UNKNOWN POWER_UNKNOWN}
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
 * @class Unity.System.DisplayInfo
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an specific display (the default one, or any external screen).
 * @author maps
 * @version 1.0
 */
Unity.System.DisplayInfo = {
	
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
     * <br/>Possible values: {@link Unity.System#DISPLAYTYPE_EXTERNAL DISPLAYTYPE_EXTERNAL}, 
     * {@link Unity.System#DISPLAYTYPE_PRIMARY DISPLAYTYPE_PRIMARY}, & {@link Unity.System#DISPLAYTYPE_UNKNOWN DISPLAYTYPE_UNKNOWN}
	 * @type {int}
     */
	DisplayType: 0,
	
	/**
     * The current orientation of this display.
     * <br/>Possible values: 
	 * {@link Unity.System#ORIENTATION_LANDSCAPE ORIENTATION_LANDSCAPE}, 
	 * {@link Unity.System#ORIENTATION_PORTRAIT ORIENTATION_PORTRAIT},
	 * & {@link Unity.System#ORIENTATION_UNKNOWN ORIENTATION_UNKNOWN}
	* @type {int}
     */
	DisplayOrientation: 0,
	
	/**
     * The depth in bits of the this display.
     * <br/>Possible values: {@link Unity.System#BITDEPTH_BPP16 BITDEPTH_BPP16}, {@link Unity.System#BITDEPTH_BPP24 BITDEPTH_BPP24}, {@link Unity.System#BITDEPTH_BPP32 BITDEPTH_BPP32},  
     * {@link Unity.System#BITDEPTH_BPP8 BITDEPTH_BPP8}, & {@link Unity.System#BITDEPTH_UNKNOWN BITDEPTH_UNKNOWN}
	 * @type {int}
     */
	DisplayBitDepth: 0
	
};

/**
 * @class Unity.System.App
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application (in the specific platform). This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Unity.System.App = {

    /**
     * The name of the application to be launched (it should be unique; otherwise the first application matching a name will be used to refer the application) .
     * @type {String}
     */
	Name : '',
	
	/**
     * Specific application data for the iOS platform. ONLY AVAILABLE ON THE iOS PLATFORM.
     * @type {Unity.System.iOSApp}
     */
	IOSApp : {},
	
	/**
     * Specific application data for the Android platform. ONLY AVAILABLE ON THE Android PLATFORM.
     * @type {Unity.System.AndroidApp}
     */
	AndroidApp : {}

};

/**
 * @class Unity.System.iOSApp
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application in the iOS platform. This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Unity.System.iOSApp = {

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
 * @class Unity.System.AndroidApp
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing all information needed to launch an application in the iOS platform. This applications are configured at the corresponding "/app/config/launch-config.xml" file.
 * @author maps
 * @version 4.2
 */
Unity.System.AndroidApp = {

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
     * True to add extras to the Intent to launch this application. The extras will be obtained by parsing the "query string" received on the Unity.System.LaunchApplication method.
     * @type {Boolean}
     */
	ParseQueryStrinAsIntentExtras : false

};

/**
 * @class Unity.System.LaunchData
 * @namespace Unity.System
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * An object containing a name/value pair of launch data received when an application is launched.
 * @author maps
 * @version 4.2
 */
Unity.System.LaunchData = {

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
// *********** UNITY DATABASE API **********
// *****************************************

/**
 * @class Unity.Database.Database
 * @namespace Unity.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing local SQlite database.
 * @author maps
 * @version 1.0
 */
Unity.Database.Database = {

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
 * @class Unity.Database.ResultSet
 * @namespace Unity.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides a set of SQLite database query results.
 * @author maps
 * @version 1.0
 */
Unity.Database.ResultSet = {

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
     * A list of returned rows. <br/><br/>For further information see, {@link Unity.Database.ResultSetRow ResultSetRow}.
     * @type {Unity.Database.ResultSetRow[]}
     */
	 RowsList : []
};

/**
 * @class Unity.Database.ResultSetRow
 * @namespace Unity.Database
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides the data for a SQLite database query result row.
 * @author maps
 * @version 1.0
 */
Unity.Database.ResultSetRow = {

    /**
     * The objects returned for the current result set row.
     * @type {Object[]}
     */
	 ColumnsList : []
};

// *****************************************
// *********** UNITY FYLESYSTEM API ********
// *****************************************

/**
 * @class Unity.FileSystem.DirectoryData
 * @namespace Unity.FileSystem
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing Directory (folder) in the filesystem.
 * @author maps
 * @version 1.0
 */
Unity.FileSystem.DirectoryData = {

    /**
     * The relative path of the current Directory (folder) in the filesystem.
     * @type {String}
     */
	FullName : ''

};

/**
 * @class Unity.FileSystem.FileData
 * @namespace Unity.FileSystem
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about an existing File in the filesystem.
 * @author maps
 * @version 1.0
 */
Unity.FileSystem.FileData = {

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
// *********** UNITY I/O API ********
// *****************************************

/**
 * @class Unity.IO.IOHeader
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a Header to be included on the Request/Response (as a pair of Name and Value).
 * @author maps
 * @version 2.1
 */
Unity.IO.IOHeader = {
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
 * @class Unity.IO.IOCookie
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a HTTP Cookie to be included on the Request/Response (as a pair of Name and Value).
 * @author maps
 * @version 2.1
 */
Unity.IO.IOCookie = {
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
 * @class Unity.IO.IOHeaders
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Request/Response common data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Unity.IO.IOHeaders = {
	/**
     * The request/response content type. MIME TYPE.
     * In case this content type attribute is specified on the IORequest object, 
	 * its value would override the mime type mapped for the service (service type configuration) for that request.
     * @type {String}
     */
	ContentType : '',
	
	/**
     * The headers array (name,value pairs) to be included on the I/O service request. <br/><br/>For further information see, {@link Unity.IO.IOHeader IOHeader}.
     * @type {Unity.IO.IOHeader[]}
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
     * The session context for the Request/Response. <br/><br/>For further information see, {@link Unity.IO.IOSessionContext IOSessionContext}.
     * @type {Unity.IO.IOSessionContext}
     */
	Session: null
};

/**
 * @class Unity.IO.IORequest
 * @namespace Unity.IO
 * @extends Unity.IO.IOHeaders
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Request data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Unity.IO.IORequest = {
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
	 * {@link Unity.IO#HTTP_PROTOCOL_VERSION_1_0 HTTP_PROTOCOL_VERSION_1_0},
	 * {@link Unity.IO#HTTP_PROTOCOL_VERSION_1_1 HTTP_PROTOCOL_VERSION_1_1} <br/><br/>
	 * @version 3.8
	 * @type {int}
     */
	ProtocolVersion : 0,
};

/**
 * @class Unity.IO.IOResponse
 * @namespace Unity.IO
 * @extends Unity.IO.IOHeaders
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the Response data for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Unity.IO.IOResponse = {
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
 * @class Unity.IO.IOSessionContext
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines the session context for a remote invocation service.
 * @author maps
 * @version 1.0
 */
Unity.IO.IOSessionContext = {
	/**
     * The cookies array (name,value pairs) to be included on the I/O service session (request and response). <br/><br/>For further information see, {@link Unity.IO.IOCookie IOCookie}.
     * @type {Unity.IO.IOCookie[]}
     */
	Cookies : []
};

/**
 * @class Unity.IO.IOService
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a remote invocation service (end-point path, host, port, exchanged data, etc..).
 * @author maps
 * @version 1.0
 */
Unity.IO.IOService = {
	/**
     * The name of the service (not unique, to uniquely define a service, use Name and Type).
     * @type {String}
     */
	Name : '',
	
	/**
     * The type of the service.
	 * <br/>Possible values: 
	 * {@link Unity.IO#SERVICETYPE_AMF_SERIALIZATION SERVICETYPE_AMF_SERIALIZATION},
	 * {@link Unity.IO#SERVICETYPE_GWT_RPC SERVICETYPE_GWT_RPC}, 
	 * {@link Unity.IO#SERVICETYPE_OCTET_BINARY SERVICETYPE_OCTET_BINARY}, 
	 * {@link Unity.IO#SERVICETYPE_REMOTING_SERIALIZATION SERVICETYPE_REMOTING_SERIALIZATION}, 
	 * {@link Unity.IO#SERVICETYPE_REST_JSON SERVICETYPE_REST_JSON} 
	 * {@link Unity.IO#SERVICETYPE_REST_XML SERVICETYPE_REST_XML}
	 * {@link Unity.IO#SERVICETYPE_SOAP_JSON SERVICETYPE_SOAP_JSON} 
	 * {@link Unity.IO#SERVICETYPE_SOAP_XML SERVICETYPE_SOAP_XML}
	 * {@link Unity.IO#SERVICETYPE_XMLRPC_JSON SERVICETYPE_XMLRPC_JSON}
	 * & {@link Unity.IO#SERVICETYPE_XMLRPC_XML SERVICETYPE_XMLRPC_XML}
	 * @type {int}
     */
	Type : 0,
	
	/**
     * The data for the service end-point. <br/><br/>For further information see, {@link Unity.IO.IOServiceEndpoint IOServiceEndpoint}.
     * @type {Unity.IO.IOServiceEndpoint}
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
 * @class Unity.IO.IOServiceEndpoint
 * @namespace Unity.IO
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a remote service end-point data (host, port, etc).
 * @author maps
 * @version 1.0
 */
Unity.IO.IOServiceEndpoint = {
	
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
// *********** UNITY GEO API ********
// *****************************************

/**
 * @class Unity.Geo.Acceleration
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the current device acceleration (meters/second/second in the 3 axis: X , Y and Z).
 * @author maps
 * @version 1.0
 */
Unity.Geo.Acceleration = {
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
 * @class Unity.Geo.LocationCoordinate
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about the current device geographical position (coordinates).
 * @author maps
 * @version 1.0
 */
Unity.Geo.LocationCoordinate = {
	
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
 * @class Unity.Geo.LocationDescription
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides generic information (name, description, category, etc.) for a given Location.
 * @author maps
 * @version 1.0
 */
Unity.Geo.LocationDescription = {
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
     * Main category this Location (POI) belongs to. <br/><br/>For further information see, {@link Unity.Geo.LocationCategory LocationCategory}.
     * @type {Unity.Geo.LocationCategory}
     */
	CategoryMain: '',
	
	/**
     * List of categories this Location (POI) belongs to. <br/><br/>For further information see, {@link Unity.Geo.LocationCategory LocationCategory}.
     * @type {Unity.Geo.LocationCategory[]}
     */
	Categories: ''
};

/**
 * @class Unity.Geo.LocationCategory
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a specific category (POIs use to be categorized).
 * @author maps
 * @version 1.0
 */
Unity.Geo.LocationCategory = {
	/**
     * Name for this Category.
     * @type {String}
     */
	Name: ''
};

/**
 * @class Unity.Geo.POI
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A POI (Point of Interest) is a GPS point location that someone may find useful or interesting.
 * <br/>This point of interest specifies, at least, the latitude and longitude. A name or description for the POI is usually included, and other information such as altitude or a telephone number may also be attached.
 * <br/>The POIs are normally categorized. This means that each POI belongs to a specific category (such as, restaurants, hospitals, etc.), and applications typically use icons to represent different categories of POI on a map graphically.
 * @author maps
 * @version 1.0
 */
Unity.Geo.POI = {
	/**
     * Unique identifier for this Point of Interest.
     * @type {String}
     */
	ID: '',
	
	/**
     * Location coordinates for this Point of Interest. <br/><br/>For further information see, {@link Unity.Geo.LocationCoordinate LocationCoordinate}.
     * @type {Unity.Geo.LocationCoordinate}
     */
	Location: null,
	
	/**
     * Location description for this Point of Interest. <br/><br/>For further information see, {@link Unity.Geo.LocationDescription LocationDescription}.
     * @type {Unity.Geo.LocationDescription}
     */
	Description: null,
	
	/**
     * The category this Point of Interest belongs to. <br/><br/>For further information see, {@link Unity.Geo.LocationCategory LocationCategory}.
     * @type {Unity.Geo.LocationCategory}
     */
	Category: null
};


/**
 * @class Unity.Geo.GeoDecoderAttributes
 * @namespace Unity.Geo
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a specific category (POIs use to be categorized).
 * @author maps
 * @version 1.0
 */
Unity.Geo.GeoDecoderAttributes = {
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
// *********** UNITY MEDIA API *************
// *****************************************

/**
 * @class Unity.Media.MediaMetadata
 * @namespace Unity.Media
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Provides information about a media file.
 * @author maps
 * @version 1.0
 */
Unity.Media.MediaMetadata = {
	/**
     * The media file type.
	 * <br/>Possible values: {@link Unity.Media#MEDIATYPE_NOT_SUPPORTED MEDIATYPE_NOT_SUPPORTED}, 
	 * {@link Unity.Media#MEDIATYPE_AUDIO MEDIATYPE_AUDIO}, 
	 * {@link Unity.Media#MEDIATYPE_VIDEO MEDIATYPE_VIDEO} & {@link Unity.Media#MEDIATYPE_PHOTO MEDIATYPE_PHOTO}
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
 * @class Unity.Media.MediaQRContent
 * @namespace Unity.Media
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes, the class does not really exist in this package, do not try to instantiate it.<br/><br/>
 * Provides information about a QR Code content read.
 * @author maps
 * @version 3.9
 */
Unity.Media.MediaQRContent = {

	/**
     * The media text included inside the QR Code.
	 * @type {String}
     */
	Text: '',
	
	/**
     * The media QR Code type.
	 * <br/>Possible values: {@link Unity.Media#QRTYPE_ADDRESSBOOK QRTYPE_ADDRESSBOOK}, 
	 * {@link Unity.Media#QRTYPE_EMAIL_ADDRESS QRTYPE_EMAIL_ADDRESS}, 
	 * {@link Unity.Media#QRTYPE_TEXT QRTYPE_TEXT},
	 * {@link Unity.Media#QRTYPE_GEO QRTYPE_GEO},
	 * {@link Unity.Media#QRTYPE_TEL QRTYPE_TEL},
	 * {@link Unity.Media#QRTYPE_SMS QRTYPE_SMS},
	 * {@link Unity.Media#QRTYPE_CALENDAR QRTYPE_CALENDAR}, 
	 * {@link Unity.Media#QRTYPE_WIFI QRTYPE_WIFI}, 
	 * {@link Unity.Media#QRTYPE_ISBN QRTYPE_ISBN}, 
	 * {@link Unity.Media#QRTYPE_PRODUCT QRTYPE_PRODUCT} & {@link Unity.Media#QRTYPE_URI QRTYPE_URI}
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
// *********** UNITY MESSAGING API *************
// *****************************************

/**
 * @class Unity.Messaging.EmailData
 * @namespace Unity.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email data to be send by email (subject, from address, cc adress, attchaments, etc).
 * @author maps
 * @version 1.0
 */
Unity.Messaging.EmailData = {
	
	
	 /**
     * The email subject.
	 * @type {String}
     */	
	 Subject: '',
	
	 /**
     * The email from address (the address we are sending from the email). <br/><br/>For further information see, {@link Unity.Messaging.EmailAddress EmailAddress}.
	 * @type {Unity.Messaging.EmailAddress}
     */
	 FromAddress: null,
	
	 /**
     * The email TO recipients list. <br/><br/>For further information see, {@link Unity.Messaging.EmailAddress EmailAddress}.
	 * @type {Unity.Messaging.EmailAddress[]}
     */
	 ToRecipients: [],
	 
	 /**
     * The email CC recipients list. <br/><br/>For further information see, {@link Unity.Messaging.EmailAddress EmailAddress}.
	 * @type {Unity.Messaging.EmailAddress[]}
     */
	 CcRecipients: [],
	 
	 /**
     * The email BCC recipients list. <br/><br/>For further information see, {@link Unity.Messaging.EmailAddress EmailAddress}.
	 * @type {Unity.Messaging.EmailAddress[]}
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
     * The email attached files. <br/><br/>For further information see, {@link Unity.Messaging.AttachmentData AttachmentData}.
	 * @type {Unity.Messaging.AttachmentData[]}
     */
	Attachment: []
	
};

/**
 * @class Unity.Messaging.EmailAddress
 * @namespace Unity.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email address data (email attributes FromAddress, ToRecipients, CcRecipients, BccRecipients will contain email addresses).
 * @author maps
 * @version 1.0
 */
Unity.Messaging.EmailAddress = {
	
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
 * @class Unity.Messaging.AttachmentData
 * @namespace Unity.Messaging
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Attachment data for an email (email attributes Attachment shoould contain AttachmentData objects).
 * @author maps
 * @version 1.0
 */
Unity.Messaging.AttachmentData = {
	
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
     * The Messaging API will use this reference url if no contents are provided on the {@link Unity.Messaging.AttachmentData#Data Data[]}
	 * @type {String}
     */
	 ReferenceUrl: ''
	
};


// *************************************************************************
// ************************** UNITY NET API ****************************
// *************************************************************************

/**
 * @class Unity.Net.NetworkData
 * @namespace Unity.Net
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Data related to the device active network connection.
 * @author ddbc
 * @version 3.8.5
 */
 Unity.Net.NetworkData = {
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
// *********** UNITY PIM (Personal Information Management) API *************
// *************************************************************************

/**
 * @class Unity.Pim.Contact
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Data to be "stored on" or "provided by" the phone's agenda as contact data.
 * @author maps
 * @version 1.0
 */
Unity.Pim.Contact = {
	
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
     * The company this contact belongs to.
	 * @type {String}
     */ 
	Company: '',
       
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
	 * {@link Unity.Pim#RELATIONSHIP_BROTHER RELATIONSHIP_BROTHER}, 
	 * {@link Unity.Pim#RELATIONSHIP_CHILD RELATIONSHIP_CHILD}, 
	 * {@link Unity.Pim#RELATIONSHIP_FRIEND RELATIONSHIP_FRIEND}, 
	 * {@link Unity.Pim#RELATIONSHIP_NONE RELATIONSHIP_NONE} 
	 * {@link Unity.Pim#RELATIONSHIP_PARENT RELATIONSHIP_PARENT}
	 * {@link Unity.Pim#RELATIONSHIP_PARTNER RELATIONSHIP_PARTNER} 
	 * {@link Unity.Pim#RELATIONSHIP_RELATIVE RELATIONSHIP_RELATIVE}
	 * {@link Unity.Pim#RELATIONSHIP_SISTER RELATIONSHIP_SISTER}
	 * & {@link Unity.Pim#RELATIONSHIP_SPOUSE RELATIONSHIP_SPOUSE}
	 * @type {int}
     */
	 Relationship: 0,
	
	/**
     * The list of phone numbers for this contact. <br/><br/>For further information see, {@link Unity.Pim.ContactPhone ContactPhone}.
	 * @type {ContactPhone[]}
     */
	Phones: [],
       
	/**
     * The mime type of the current attachment. <br/><br/>For further information see, {@link Unity.Pim.ContactEmail ContactEmail}.
	 * @type {ContactEmail[]}
     */
	Emails: [],
       
	/**
     * The mime type of the current attachment. <br/><br/>For further information see, {@link Unity.Pim.ContactAddress ContactAddress}.
	 * @type {Unity.Pim.ContactAddress[]}
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
 * @class Unity.Pim.ContactPhone
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Phone data for a contact.
 * @author maps
 * @version 1.0
 */
Unity.Pim.ContactPhone = {
	
	/**
     * The type of phone number.
	 * <br/>Possible values: 
	 * {@link Unity.Pim#NUMBERTYPE_FIXED_LINE NUMBERTYPE_FIXED_LINE}, 
	 * {@link Unity.Pim#NUMBERTYPE_HOME_FAX NUMBERTYPE_HOME_FAX}, 
	 * {@link Unity.Pim#NUMBERTYPE_MOBILE NUMBERTYPE_MOBILE}, 
	 * {@link Unity.Pim#NUMBERTYPE_OTHER NUMBERTYPE_OTHER} 
	 * {@link Unity.Pim#NUMBERTYPE_PAGER NUMBERTYPE_PAGER}
	 * {@link Unity.Pim#NUMBERTYPE_WORK NUMBERTYPE_WORK} 
	 * & {@link Unity.Pim#NUMBERTYPE_WORK_FAX NUMBERTYPE_WORK_FAX}
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
 * @class Unity.Pim.ContactEmail
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Email data for a contact.
 * @author maps
 * @version 1.0
 */
Unity.Pim.ContactEmail = {
	
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
	 * {@link Unity.Pim#DISPOSITIONTYPE_HOME_OFFICE DISPOSITIONTYPE_HOME_OFFICE}, 
	 * {@link Unity.Pim#DISPOSITIONTYPE_OTHER DISPOSITIONTYPE_OTHER}, 
	 * {@link Unity.Pim#DISPOSITIONTYPE_PERSONAL DISPOSITIONTYPE_PERSONAL}, 
	 * & {@link Unity.Pim#DISPOSITIONTYPE_WORK DISPOSITIONTYPE_WORK} 
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
 * @class Unity.Pim.ContactAddress
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Address data (street, number, postal code, city, etc.) for a contact.
 * @author maps
 * @version 1.0
 */
Unity.Pim.ContactAddress = {
	
	/**
     * The type of contact address (home, work, etc.)
	 * <br/>Possible values: 
	 * {@link Unity.Pim#DISPOSITIONTYPE_HOME_OFFICE DISPOSITIONTYPE_HOME_OFFICE}, 
	 * {@link Unity.Pim#DISPOSITIONTYPE_OTHER DISPOSITIONTYPE_OTHER}, 
	 * {@link Unity.Pim#DISPOSITIONTYPE_PERSONAL DISPOSITIONTYPE_PERSONAL}, 
	 * & {@link Unity.Pim#DISPOSITIONTYPE_WORK DISPOSITIONTYPE_WORK} 
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
 * @class Unity.Pim.CalendarEntry
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Personal entries to be "stored on" or "provided by" the phone's calendar.
 * @author maps
 * @version 1.0
 */
Unity.Pim.CalendarEntry = {
	
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
	 * {@link Unity.Pim#CALENDARTYPE_BIRTHDAY CALENDARTYPE_BIRTHDAY}, 
	 * {@link Unity.Pim#CALENDARTYPE_CALDAV CALENDARTYPE_CALDAV}, 
	 * {@link Unity.Pim#CALENDARTYPE_EXCHANGE CALENDARTYPE_EXCHANGE}, 
	 * {@link Unity.Pim#CALENDARTYPE_IMAP CALENDARTYPE_IMAP} 
	 * {@link Unity.Pim#CALENDARTYPE_LOCAL CALENDARTYPE_LOCAL} 
	 * {@link Unity.Pim#CALENDARTYPE_OTHER CALENDARTYPE_OTHER}
	 * & {@link Unity.Pim#CALENDARTYPE_SUBSCRIPTION CALENDARTYPE_SUBSCRIPTION} 
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
     * The start date for this calendar entry. <br/><br/>For further information see, {@link Unity.DateTime DateTime}.
	 * @type {Unity.DateTime}
     */
	StartDate: null,
	
	/**
     * The end date for this calendar entry. <br/><br/>For further information see, {@link Unity.DateTime DateTime}.
	 * @type {Unity.DateTime}
     */
	EndDate: null,
	
	/**
     * The attendees list for this calendar entry. <br/><br/>For further information see, {@link Unity.Pim.CalendarAttendee CalendarAttendee}.
	 * @type {Unity.Pim.CalendarAttendee[]}
     */
	Attendees: [],
	
	/**
     * The alarms list (type and frequency) for this calendar entry. <br/><br/>For further information see, {@link Unity.Pim.CalendarAlarm CalendarAlarm}.
	 * @type {Unity.Pim.CalendarAlarm[]}
     */
	Alarms: [],
	
	/**
     * Whether this calendar entry is a recurrent event or not.
	 * @type {Boolean}
     */
	IsRecurrentEvent: false,
	
	/**
     * The recurrence - if any - of this calendar entry. <br/><br/>For further information see, {@link Unity.Pim.CalendarRecurrence CalendarRecurrence}.
	 * @type {Unity.Pim.CalendarRecurrence}
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
 * @class Unity.Pim.CalendarRecurrence
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The recurrence data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Unity.Pim.CalendarRecurrence = {
	/**
     * The recurrence type - if any - of this calendar entry (daily, monthly, etc.)
	 * <br/>Possible values: 
	 * {@link Unity.Pim#RECURRENCE_FORTNIGHTLY RECURRENCE_FORTNIGHTLY}, 
	 * {@link Unity.Pim#RECURRENCE_FOURWEEKLY RECURRENCE_FOURWEEKLY}, 
	 * {@link Unity.Pim#RECURRENCE_MONTLY RECURRENCE_MONTLY}, 
	 * {@link Unity.Pim#RECURRENCE_WEEKLY RECURRENCE_WEEKLY} 
	 * & {@link Unity.Pim#RECURRENCE_YEARLY RECURRENCE_YEARLY} 
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
     * The date the recurrence ends. <br/><br/>For further information see, {@link Unity.DateTime DateTime}.
	 * @type {Unity.DateTime}
     */
	EndDate: null

};

/**
 * @class Unity.Pim.CalendarAttendee
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The attendee data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Unity.Pim.CalendarAttendee = {
	
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
	 * {@link Unity.Pim#ATTENDEESTATUS_ACCEPTED ATTENDEESTATUS_ACCEPTED}, 
	 * {@link Unity.Pim#ATTENDEESTATUS_DECLINED ATTENDEESTATUS_DECLINED}, 
	 * {@link Unity.Pim#ATTENDEESTATUS_NeedsAction ATTENDEESTATUS_NeedsAction},
	 * & {@link Unity.Pim#ATTENDEESTATUS_TENTATIVE ATTENDEESTATUS_TENTATIVE} 
	 * @type {int}
     */
	 Status: 0
	
};

/**
 * @class Unity.Pim.CalendarAlarm
 * @namespace Unity.Pim
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * The alarm data for a calendar entry.
 * @author maps
 * @version 1.0
 */
Unity.Pim.CalendarAlarm = {
	
	
	/**
     * The type of alarm for a calendar entry (display, sound, etc)
	 * <br/>Possible values: 
	 * {@link Unity.Pim#ALARM_DISPAY ALARM_DISPAY}, 
	 * {@link Unity.Pim#ALARM_EMAIL ALARM_EMAIL}, 
	 * {@link Unity.Pim#ALARM_SOUND ALARM_SOUND},
	 * & {@link Unity.Pim#ATTENDEESTATUS_TENTATIVE ATTENDEESTATUS_TENTATIVE} 
	 * @type {int}
     */
	Action: 0,
	
	/**
     * The datetime trigger to start the alarm. <br/><br/>For further information see, {@link Unity.DateTime DateTime}.
	 * @type {Unity.DateTime}
     */
	Trigger: null,
	
	/**
     * The email address for an alarm of type {@link Unity.Pim#ALARM_EMAIL ALARM_EMAIL}.
	 * @type {String}
     */
	EmailAddress: '',
	
	/**
     * The sound to be executed for an alarm of type {@link Unity.Pim#ALARM_SOUND ALARM_SOUND}.
	 * @type {String}
     */
	Sound: ''
};

// *****************************************
// *********** UNITY I18N API **************
// *****************************************

/**
 * @class Unity.I18N.Locale
 * @namespace Unity.I18N
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a specific geographical, political, or cultural region, by giving the language and country 
 * @author maps
 * @version 1.0
 */
Unity.I18N.Locale = {

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
 * @class Unity.I18N.ResourceLiteralDictionary
 * @namespace Unity.I18N
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Dictionary object (or hashmap) with all the keyed literals mapped for the current locale or for a given locale.
 * <br/> You could get the value of a keyed literal checking <b>resourceLiteralDictionary.MY_KEY</b> or <b>resourceLiteralDictionary["MY_KEY"]</b>
 * @author maps
 * @version 3.2
 */
Unity.I18N.ResourceLiteralDictionary = {};

// *************************************************
// *********** UNITY NOTIFICATION API **************
// *************************************************

/**
 * @class Unity.Notification.NotificationData
 * @namespace Unity.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data received on a remote or local notificaition (alert message, sound to be played, badged number to be displayed on the application icon, and any required custom data (JSON format)
 * @author maps
 * @version 3.9
 */
Unity.Notification.NotificationData = {

    /**
     * The message text to be shown on this notification.
     * @type {String}
     */
	AlertMessage : '',
	
	/**
     * The name of a sound file in the application bundle, that would be played as an alert. If the sound file does not exist or default is specified as the value, the default alert sound is played. 
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
 * @class Unity.Notification.RegistrationToken
 * @namespace Unity.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent the device token, or registration token, that contains information that enables the Push Notifications Service (APNs for Apple, or GCM for Google) to locate the device on which the client application is installed. It is also used to authenticate the routing of a notification.
 * @author maps
 * @version 3.9
 */
Unity.Notification.RegistrationToken = {

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
 * @class Unity.Notification.RegistrationError
 * @namespace Unity.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent error data on a failure registration for receiving remote notifications.
 * @author maps
 * @version 3.9
 */
Unity.Notification.RegistrationError = {
	/**
     * The error code.
	 * <br/>Possible values: {@link Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT REMOTE_NOTIFICATION_REGISTRATION_FAILURE_DEFAULT}, {@link Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID REMOTE_NOTIFICATION_REGISTRATION_FAILURE_MISMATCH_SENDERID} & {@link Unity.Notification#REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER REMOTE_NOTIFICATION_REGISTRATION_FAILURE_GCM_SERVER}
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
 * @class Unity.Notification.SchedulingData
 * @namespace Unity.Notification
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represent scheduling data for firing a local notification at a specific time (fire date and interval).
 * @author maps
 * @version 3.9
 */
Unity.Notification.SchedulingData = {
	
	/**
     * The fire date for the scheduled local notification. <br/><br/>For further information see, {@link Unity.DateTime DateTime}.
	 * @type {Unity.DateTime}
     */
	FireDate : '',
	
	/**
     * The repeat interval for the scheduled local notification
	 * <br/>Possible values: 
	 * {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_NO_REPEAT LOCAL_NOTIFICATION_REPEAT_INTERVAL_NO_REPEAT}, 
	 * {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_HOURLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_HOURLY}, 
	 * {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_DAILY LOCAL_NOTIFICATION_REPEAT_INTERVAL_DAILY}, 
	 * {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_WEEKLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_WEEKLY} 
	 * {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_MONTHLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_MONTHLY} 
	 * & {@link Unity.Notification#LOCAL_NOTIFICATION_REPEAT_INTERVAL_YEARLY LOCAL_NOTIFICATION_REPEAT_INTERVAL_YEARLY} 
	 * @type {int}
     */
	RepeatInterval : 0
};

// *****************************************
// *********** UNITY WEBTREKK API **************
// *****************************************

/**
 * @class Unity.Webtrekk.WebtrekkParametersCollection
 * @namespace Unity.Webtrekk
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A collection of Webtrekk Parameters (a name/value pairs) to be transmitted in addition to a content tracked.
 * @author maps
 * @version 3.8
 */
Unity.Webtrekk.WebtrekkParametersCollection = {

    /**
     * Array of Webtrekk parameters. <br/><br/>For further information see, {@link Unity.Webtrekk.WebtrekkParameter WebtrekkParameter}.
     * @type {WebtrekkParameter}
     */
	AdditionalParameters : []

};

/**
 * @class Unity.Webtrekk.WebtrekkParameter
 * @namespace Unity.Webtrekk
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * A Webtrekk Parameter (a name/value pair) to be transmitted in addition to a content tracked.
 * @author maps
 * @version 3.8
 */
Unity.Webtrekk.WebtrekkParameter = {

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
// ******* UNITY APPLOADER API *************
// *****************************************

/**
 * @class Unity.AppLoader.ModuleContext
 * @namespace Unity.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data required to initialize the working context for the AppLoader API.
 * <br><br>For example, the field <b>{@link Unity.AppLoader.ModuleContext#User User}</b> is used by this API to store contents under a specific 'User' folder (so they can only be accessible if context is initialized for that user).
 * <br><br>There are also some context fields to change the default text displayed on some native loading messages (LoadingMessage_xxxx) or error alerts (AlertMessage_xxx).
 * <br><br>See more information at <b>Unity.AppLoader.InitializeModuleContext</b>.
 * @author maps
 * @version 4.0
 */
Unity.AppLoader.ModuleContext = {
	
	/**
     * The  current user (name). It is used by the API to store user contents under a specific folder, only accessible by this user.
     * @type {String}
     */
	User: '',
	
	/**
     * The current user credentials. OPTIONAL.<br/> It should be the <b>'username:password'</b> string concatenation encoded in <a href="http://en.wikipedia.org/wiki/Base64"><b>Base64</b></a>.<br/> If provided, the <a href="http://en.wikipedia.org/wiki/Basic_access_authentication#Client_side"><b>HTTP Basic Authentication</b></a> header (Authorization) will be send when updating modules.
     * @type {String}
     */
	Credentials: '',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when updating a bunch of modules (by calling the method <b>Unity.AppLoader.UpdateModules</b>).
     * @type {String}
     */
	LoadingMessage_UpdateModules: 'Updating Modules',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when updating a single module (by calling the method <b>Unity.AppLoader.UpdateModule</b>, or calling the <b>Unity.AppLoader.LoadModule</b> with the 'autoUpload' flag set to true).
     * @type {String}
     */
	LoadingMessage_UpdateModule: 'Updating Module',
	
	/**
     * The custom text (localized by the application) for the native loading mask that is shown when deleting a bunch of modules (by calling the method <b>Unity.AppLoader.DeleteModules</b>).
     * @type {String}
     */
	LoadingMessage_DeleteModule: 'Deleting Modules',
		
	/**
     * The custom text (localized by the application) for the native notification alert <b>title</b> that is shown when an error occurres loading a module (by calling the method <b>Unity.AppLoader.LoadModule</b>).
     * @type {String}
     */
	AlertMessage_Title: 'AppLoader Alert',
	
	/**
     * The custom text (localized by the application) for the native notification alert <b>body</b> that is shown when an error occurres loading a module (by calling the method <b>Unity.AppLoader.LoadModule</b>).
     * @type {String}
     */
	AlertMessage_LoadModuleError: 'The module could not be loaded',
};

/**
 * @class Unity.AppLoader.Module
 * @namespace Unity.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the data required to update, install, delete or load a module (or sub application) inside the parent application. <br><br>See more information at <b>Unity.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Unity.AppLoader.Module = {
	
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
 * @class Unity.AppLoader.ModuleVersion
 * @namespace Unity.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents the version data of a module (or sub application). <br><br> Application version is composed in the format of <b>Major.Minor.Revision</b>. <br><br>See more information at <b>Unity.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Unity.AppLoader.ModuleVersion = {

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
 * @class Unity.AppLoader.ModuleParam
 * @namespace Unity.AppLoader
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Defines a Parameter to be included on the Request when loading an specific Module into the current platform WebView (as a pair of Name and Value); by using the method <b>Unity.AppLoader.LoadModule</b>
 * <br><br>See more information at <b>Unity.AppLoader</b>.
 * @author maps
 * @version 4.0
 */
Unity.AppLoader.ModuleParam = {

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
// ********** UNITY SECURITY API ***********
// *****************************************

/**
 * @class Unity.Security.KeyPair
 * @namespace Unity.Security
 * @extends Object
 * This is a sample class.<br/><br/>
 * Used only for Documentation purposes (the class does not really exist in this package, do not try to instantiate it).<br/><br/>
 * Represents a key/value pair to be stored/retrieved/removed into/from the device local secure storage<br><br> See more information at <b>Unity.Security</b>.
 * @author ddbc
 * @version 4.2
 */
Unity.Security.KeyPair = {

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
 
 
 
 