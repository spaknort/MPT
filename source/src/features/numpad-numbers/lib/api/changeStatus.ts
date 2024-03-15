import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const changeStatus = async (type: ExampleTypes, value: string) => {
    const obj = {
        "items": [
            {
                "id": 453364404,
                "code": "1234",
                "slip": "12345667",
                "activate_till": "2023-11-16"
            }
        ]
    }

    const response = await fetch('https://api.partner.market.yandex.ru/campaigns/53165603/orders/335754061/deliverDigitalGoods', {
        method: 'POST',
        headers: {
            "Authorization": "OAuth oauth_token=y0_AgAEA7qiLuAhAArOdgAAAADx2SB0829r7OugRH-PY4lQua25C0NA3fs, oauth_client_id=ec7b480a87794f12a62b6cbf66ee1fb2"
        },
        body: JSON.stringify(obj)
    })

    const result = await response.json()
    console.log(result)
    console.log(JSON.stringify(obj))
}