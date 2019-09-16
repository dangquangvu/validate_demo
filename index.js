var Validator = require('jsonschema').Validator;
var v = new Validator();

//"$schmea": "http://json-schema.org/draft-04/schema#",
var UserSchema = {
    "id": "/SimpleAddress",
    "title": "User",
    "description": "User profile",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "enum": ["Tran Van A", "Tran Van B"],
        },
        "date": {
            "type": "string",
            "format": "date"
        },
        "email": {
            "type": "string",
            "format": "email",
            "minLength": 0,
            "maxLength": 180,
        },
        "telephoneNumber": {
            "type": "string",
            "pattern": "(09|01[2|6|8|9])+([0-9]{8})"
        },
        "GPA": {
            "type": "number",
            "minimum": 0,
            "maximum": 4
        }
    },
    "required": ["name", "date", "email", "telephoneNumber", "GPA"]
}


/**
 * name # enum
date  
email
sdt
thang điểm # hs:4
{
    name :
    date:
    email:
    sdt:
    gpa:
}
 */