import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const sendOrderDataInServer = async (type: ExampleTypes, value: string) => {
    const obj = {
        "order":{
            "businessId":52363841,
            "id":400540982,
            "currency":"RUR",
            "itemsTotal":1290,
            "total":1439,
            "deliveryTotal":149,
            "subsidyTotal":0,
            "totalWithSubsidy":1439,
            "buyerItemsTotal":1290,
            "buyerTotal":1439,
            "buyerItemsTotalBeforeDiscount":1290,
            "buyerTotalBeforeDiscount":1439,
            "paymentType":"PREPAID",
            "paymentMethod":"GOOGLE_PAY",
            "fake":true,
            "items":[
                {
                    "id":530471079,
                    "feedId":19291957,
                    "offerId":"411",
                    "feedCategoryId":"152",
                    "offerName":"DrWeb Security Space для 1 ПК, 1 лицензия на 12 мес, 64-разрядная ОС",
                    "fulfilmentShopId":52364435,
                    "price":1290,
                    "buyerPrice":1290,
                    "buyerPriceBeforeDiscount":1290,
                    "priceBeforeDiscount":1290,
                    "count":1,
                    "vat":"VAT_20_120",
                    "shopSku":"411",
                    "sku":"0",
                    "subsidy":0,
                    "warehouseId":569667,
                    "partnerWarehouseId":"b72e17fa-7eca-4824-9c9b-d6c94a830ecb",
                    "buyer-price":1290
                }
            ],
            "delivery":{
                "type":"DIGITAL",
                "serviceName":"Доставка на электронную почту",
                "price":149,
                "subsidy":0,
                "deliveryPartnerType":"SHOP",
                "dates":{
                    "fromDate":"08-02-2024",
                    "toDate":"08-02-2024"
                },
                "region":{
                    "id":198,
                    "name":"Улан-Удэ",
                    "type":"CITY",
                    "parent":{
                        "id":121100,
                        "name":"Городской округ Улан-Удэ",
                        "type":"SUBJECT_FEDERATION_DISTRICT",
                        "parent":{
                            "id":11330,
                            "name":"Республика Бурятия",
                            "type":"SUBJECT_FEDERATION",
                            "parent":{
                                "id":73,
                                "name":"Дальневосточный федеральный округ",
                                "type":"COUNTRY_DISTRICT",
                                "parent":{
                                    "id":225,
                                    "name":"Россия",
                                    "type":"COUNTRY"
                                }
                            }
                        }
                    }
                },
                "address":{
                    "country":"HIDDEN",
                    "postcode":"HIDDEN",
                    "city":"HIDDEN",
                    "street":"HIDDEN",
                    "house":"HIDDEN",
                    "block":"HIDDEN",
                    "apartment":"HIDDEN",
                    "lat":"HIDDEN",
                    "lon":"HIDDEN"
                },
                "vat":"VAT_20_120",
                "deliveryServiceId":99,
                "dispatchType":"BUYER",
                "shipments":[
                    {
                        "id":395276434,
                        "shipmentDate":"09-02-2024",
                        "shipmentTime":"08:56"
                    }
                ]
            },
            "taxSystem":"OSN",
            "buyer":{
                "lastName":"HIDDEN",
                "firstName":"HIDDEN",
                "type":"PERSON"
            }
        }
    }

    const response = await fetch('http://mpt/index.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

    const result = await response.json()
    console.log(result)
}