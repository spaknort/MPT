import { ExampleTypes } from "../../../../shared/lib/enums/ExampleTypes"

export const sendStatus = async (type: ExampleTypes, value: string) => {
    const obj = {
        items: [
            {
                id: 451404689, 
                code: '1234',
                slip: "232242",
                activate_till: '13-11-2023'
            }
        ]
    }

    const response = await fetch('https://api.partner.market.yandex.ru/campaigns/53165603/orders/335507787/deliverDigitalGoods', {
        method: 'POST',
        headers: {
            "Authorization": "OAuth oauth_token=y0_AgAEA7qiLuAhAArOdgAAAADx2SB0829r7OugRH-PY4lQua25C0NA3fs, oauth_client_id=ec7b480a87794f12a62b6cbf66ee1fb2"
        },
        body: JSON.stringify(obj)
    })

    const result = await response.text()
    console.log(result)
}