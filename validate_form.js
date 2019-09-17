var Validator = require('jsonschema').Validator;
var v = new Validator();

var ViettelSchema = {
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
let data = {
    "actionUserDTO": {
        "ipAddress": "103.48.76.138",
        "shopCode": "4100240023",
        "staffCode": "DUYTV_HNI_CST",
        "systemType": "SYSTEM_HIEPTHANH_VIETTEL"
    },
    "customerDTO": {
        "name": "Nguyen Van Kien",
        "sex": "M",
        "birthDate": "1997-08-20",
        "nationality": "Việt Nam",
        "province": "V064",
        "district": "002",
        "precinct": "003",
        "streetBlock": "",
        "home": "3",
        "streetName": "2",
        "streetBlockName": "1",
        "areaCode": "V064002003",
        "address": "Số nhà 3 Đường 2  Tổ 1 Bà Rịa Vũng Tàu Bà Rịa Phước Trung ",
        "custType": "VIE",
        "listCustIdentity": {
            "idNo": "012466555555",
            "idType": "ID",
            "idIssueDate": "2019-09-13",
            "idIssuePlace": "HN",
            "Required": "true"
        },
        "custTypeDTO": {
            "custType": "VIE",
            "groupType": "1"
        }
    },
    "subscriberDTO": {
        "isdn": "123456789",
        "serial": "012345678901234567",
        "productCode": "ECO50",
        "regType": "HM_KC70",
        "payType": "2",
        "telecomServiceId": 1,
        "shopCodeErp": "HIEP_THANH_123",
        "shopNameErp": "Hiệp thành Mobi",
        "staffCodeErp": "trungnb",
        "staffNameErp": "Nguyễn Bảo Trung",
        "addressErp": "Mai Dịch Cầu Giấy Hà Nội",
        "telFaxErp": "0123456789",
        "signDate": "2019-09-13",
        "subObject": "CN01"
    },
    "profileDocumentDTO": {
        "lstFile": [{
                "contentType": "jpg",
                "contentsOfArray": "iVBORw0KGgoAAAANSUhEUgAABAoAAALMCAYAAABtxVC/AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nGy92XJsyXUluHw6Q0QAuJlJstSqblWpqlSttm5rs/6B/jb+qN5kJomZ5L1ADGfwqR62Lz87ggQNdplA4Azue1h77cHN",
                "fileName": "2.jpg",
                "size": 502863,
                "fileCode": "CMNDMT"
            },
            {
                "contentType": "jpeg",
                "contentsOfArray": "iVBORw0KGgoAAAANSUhEUgAABAoAAALMCAYAAABtxVC/AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nGy92XJsyXUluHw6Q0QAuJlJstSqblWpqlSttm5rs/6B/jb+qN5kJomZ5L1ADGfwqR62Lz87ggQNdplA4Azue1h77cHN",
                "fileName": "IMG_3568.JPG",
                "size": 260089,
                "fileCode": "CMNDMS"
            },
            {
                "contentType": "jpg",
                "contentsOfArray": "iVBORw0KGgoAAAANSUhEUgAABAoAAALMCAYAAABtxVC/AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nGy92XJsyXUluHw6Q0QAuJlJstSqblWpqlSttm5rs/6B/jb+qN5kJomZ5L1ADGfwqR62Lz87ggQNdplA4Azue1h77cHN",
                "fileName": "035098001691_CMT.jpg",
                "size": 23793,
                "fileCode": "CMNDMS"
            }
        ]
    }
}
console.log(v.validate(data, ViettelSchema));