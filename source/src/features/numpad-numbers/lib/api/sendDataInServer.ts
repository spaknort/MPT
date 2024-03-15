import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes";

const obj = {
    items: [
        {
            "id": 489923179,
            "code": "1234",
            "slip": "1232121",
            "activate_till": "20-12-2023"
        },
        {
            "id": 489923179,
            "code": "1234",
            "slip": "1232121",
            "activate_till": "20-12-2023"
        },
        {
            "id": 489923179,
            "code": "1234",
            "slip": "1232121",
            "activate_till": "20-12-2023"
        }
    ]
}

export async function sendDataInServer(type: ExampleTypes, value: string) {
    const response = await fetch('https://api.partner.market.yandex.ru/campaigns/53165603/orders/366569606/deliverDigitalGoods', {
        method: 'POST',
        headers: {
            "Authorization": "OAuth oauth_token=y0_AgAEA7qiLuAhAArOdgAAAADx2SB0829r7OugRH-PY4lQua25C0NA3fs, oauth_client_id=ec7b480a87794f12a62b6cbf66ee1fb2"
        },
        body: JSON.stringify(obj)
    })

    const result = await response.json()
    console.log(result)
}