var Validator = require('jsonschema').Validator;
var v = new Validator();

//"$schmea": "http://json-schema.org/draft-04/schema#",
var ViettelSchema = {
        "id": "/SimpleAddress",
        "title": "Viettel",
        "description": "pay before",
        "type": "object",
        "properties": {
            "ActionUserDTO": {
                "description": " user thực hiện đấu nối ",
                "type": "object",
                "properties": {
                    "staffCode": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 50
                    },
                    "shopCode": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 50
                    },
                    "systemType": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 20
                    }
                },
                "required": ["staffCode", "shopCode", "systemType"]
            },
            "CustomerDTO": {
                "description": " thông tin khác hàng ",
                "type": "object",
                "properties": {
                    "CustTypeDTO": {
                        "description": " Đối tượng khách hàng",
                        "type": "object",
                        "properties": {
                            "cusType": {
                                "type": "string",
                                "description": "Đối tượng khách hàng",
                                "minLength": 1,
                                "maxLength": 6,
                                "enum": ["VIE", "FOR"]
                            },
                            "groupType": {
                                "type": "string",
                                "description": "Nhóm khách hàng",
                                "maxLength": 1,
                                "enum": ["1", "2", "3"]
                            }
                        },
                        "required": ["cusType", "groupType"]
                    },
                    "ListCustIdentity": {
                        "description": "Danh sách đối tượng khách hàng",
                        "type": "object",
                        "properties": {
                            "idNo": {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 20,
                            },
                            "idType": {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 4,
                                "enum": ["TIN", "ID", "MID", "PASS", "POP", "BUS", "DL", "IDC", "OTH", "IDNG"]
                            },
                            "idIssueDate": {
                                "description": "Ngày tạo vấn đề",
                                "type": "string",
                                "format": "date",
                            },
                            "idIssuePlace": {
                                "description": "Ngày tạo vấn đề",
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 50
                            },
                            "idExpireDate": {
                                "description": "Ngày tạo hết hạn",
                                "type": "string",
                                "format": "date"
                                    //relation with pass and idc in idType
                            },
                            "Required": {
                                "description": "Bắt buộc",
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 50,
                                "default": "true"
                            }
                        },
                        "required": ["idNo", "idType", "idIssueDate", "idIssuePlace", "idExpireDate", "Required"]
                    },
                    "custId": {
                        "type": "integer",
                        "description": "Mã số id của khách hàng",
                        //hidden with new custom
                        //not required
                    },
                    "name": {
                        "description": "Tên khách hàng",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                    },
                    "sex": {
                        "description": "Tên khách hàng",
                        "type": "string",
                        "maxLength": 1,
                        "enum": ["F", "M"]
                    },
                    "birthDate": {
                        "description": "Ngày sinh của khách hàng",
                        "type": "string",
                        "format": "date",
                    },
                    "nationality": {
                        "description": "Quốc tịch khách hàng",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 300
                    },
                    "province": {
                        "description": "Mã tỉnh",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 4
                    },
                    "district": {
                        "description": "Mã quận",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 3
                    },
                    "precinct": {
                        "description": "Mã huyện, thành phố",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 4
                    },
                    "streetBlock": {
                        "description": "tên đường phố",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 5
                            //not required
                    },
                    "home": {
                        "description": "số nhà",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 50
                            //not required
                    },
                    "streetName": {
                        "description": "Tên đường",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 50
                            //not required
                    },
                    "streetBlockName": {
                        "description": "Tên tổ",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 50
                            //not required
                    },
                    "areaCode": {
                        "description": "Mã khu vực",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 250
                    },
                    "address": {
                        "description": "Địa chỉ đầy đủ",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 500
                    }
                },
                "required": ["CustTypeDTO", "ListCustIdentity", "name", "sex", "birthDate", "nationality", "province", "district", "precinct", "areaCode", "address"]
            }
        },
        "SubscriberDTO": {
            "description": "  thông tin thuê bao ",
            "type": "object",
            "properties": {
                "isdn": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 10
                },
                "serial": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 20
                },
                "productCode": {
                    //HAS ENUM???
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 30
                },
                "regType": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 10
                },
                "payType": {
                    "type": "string",
                    "maxLength": 1,
                    "enum": ["1", "2"]
                },
                "shopCodeErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100
                },
                "shopNameErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100
                },
                "staffCodeErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100
                },
                "staffNameErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200
                },
                "addressErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 300
                },
                "telFaxErp": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100
                },
                "signDate": {
                    "type": "string",
                    "format": "date",
                },
                "subObject": {
                    //not required
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "enum": ["CN01", "CN02", "CN03", "CN04", "CN05"]
                }
            },
            "required": ["productCode", "regType", "payType", "shopCodeErp", "shopNameErp", "staffCodeErp", "staffNameErp", "addressErp", "telFaxErp", "signDate"]
        },
        "ProfileDocumentDTO": {
            "description": " thông tin hồ sơ ",
            "type": "object",
            "properties": {
                "lstFile": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "fileName": {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 50,
                            },
                            "size": {
                                "type": "integer",
                                "minimum": 1,
                                "maximum": 2097152,
                            },
                            "fileCode": {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 20,
                            },
                            "contentsOfArray": {
                                "type": "string"

                            },
                            "contentType": {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 50,
                            }
                        },
                        "required": ["fileName", "fileCode", "size", "contentsOfArray", "contentType"]
                    }
                }
            }
        },
    }
    // "userLoginId": {
    //     "description": " ID user thực hiện đấu nối ",
    //     "type": "object",
    //     "properties": {

//     }
// },
// "wsUsername": {
//     "description": " user đăng nhập ws",
//     "type": "object",
//     "properties": {

//     }
// },
// "wsPassword": {
//     "description": " pas đăng nhập ws ",
//     "type": "object",
//     "properties": {

//     }
// },