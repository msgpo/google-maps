module.exports = {
    "name": "Google Maps",
    "acronym": "GM",
    "entityTypes": ["geo", "string"],
    "logging": {level: 'info'},
    entityTypes: ['geo'],
    customTypes:[
        {
            key: 'latLong',
            regex: /[-+]?([1-8]?\d(\.\d\d+)+|90(\.0+)+),\s*[-+]?(180(\.0+)+|((1[0-7]\d)|([1-9]?\d))(\.\d\d+)+)/
        },
        {
            key: 'unitedStatesPropertyAddress',
            regex: /\d{1,9} ([^\n\r0-9,]{2,100}, ([A-Za-z ]{1,20}\d{1,9}|\d{1,3}[A-Za-z ]{1-20})[, ]?[^\n\r0-9]{2,100}[, ]?|(N |S |E |W |north |south |east |west )?\d{1,9}[^\n\r0-9 ][^\n\r0-9]{2,100}|(N |S |E |W |north |south |east |west )?\d{1,9}[^\n\r0-9, ][^\n\r0-9,]{2,100},[A-Za-z ]{1,20}\d{1,9},?[^\n\r0-9,]{2,100},?|[^\n\r0-9,]{2,100},[A-Za-z ]{1,20}\d{1,9},?[^\n\r0-9]{2,100},?|[^\n\r0-9]{2,100})[, ](AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New[ ]Hampshire|New[ ]Jersey|New[ ]Mexico|New[ ]York|North[ ]Carolina|North[ ]Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode[ ]Island|South[ ]Carolina|South[ ]Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West[ ]Virginia|Wisconsin|Wyoming)[, ]+\d{5}(?:-\d{4})?/
        }
    ],
    "block": {
        "component": {
            "file": "./components/block.js"
        },
        "template": {
            "file": "./template/block.hbs"
        }
    },
    "javascript": [
        "./javascript/vendor.js"
    ],
    "options": [
        {
            "key": "apikey",
            "name": "API Key",
            "description": "Your Google Maps API Key",
            "default": "",
            "type": "text",
            "userCanEdit": true,
            "adminOnly": false
        },
        {
            "key": "lookupLatLong",
            "name": "Lookup Latitude Longitude Pairs",
            "description": "If checked, the integration will lookup latitude and longitude pairs",
            "default": true,
            "type": "boolean",
            "userCanEdit": true,
            "adminOnly": false
        },
        {
            "key": "lookupAddress",
            "name": "Lookup Street Addresses",
            "description": "If checked, the integration will lookup street addresses",
            "default": true,
            "type": "boolean",
            "userCanEdit": true,
            "adminOnly": false
        }
    ]
};