import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const changeStatus2 = async (type: ExampleTypes, value: string) => {
    const obj = {
        "order": {
            "status": "CANCELLED",
            "substatus": "SHOP_FAILED"
        }
    }

    const response = await fetch('https://api.partner.market.yandex.ru/campaigns/53165603/orders/337028005/status', {
        method: 'PUT',
        headers: {
            "Authorization": "OAuth oauth_token=y0_AgAEA7qiLuAhAArOdgAAAADx2SB0829r7OugRH-PY4lQua25C0NA3fs, oauth_client_id=ec7b480a87794f12a62b6cbf66ee1fb2"
        },
        body: JSON.stringify(obj)
    })

    const result = await response.json()
    console.log(result)
}