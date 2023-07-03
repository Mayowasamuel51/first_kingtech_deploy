<PaymentForm
    applicationId="sandbox-sq0idb-76u0wvFNrLgKObp2N18WtQ"
    cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
        const tok = String(token.token)
        const response = await fetch("/api/pay", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                sourceId: tok
                // token.token,
            }),
        });
        console.log(await response.json());
        // const data = await response.json()
        // console.log(data)
        // return data;
    }}
    createPaymentRequest={() => ({
        countryCode: "US",
        currencyCode: "USD",
        total: {
            amount: 5,
            label: "Total",
        },
    })}
    locationId="LT5BRPZ47EFEA"
>

    {/* <GooglePay /> */}
    <CreditCard
        buttonProps={{
            css: {
                backgroundColor: "#771520",
                fontSize: "14px",
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#530f16",
                },
            },
        }}
    />
</PaymentForm>













// export async function POST(req, res) {
    
//     const body = req.body;
  
    
//     const { sourceId } = body;
//     if (!sourceId) {
//         console.log('error in frontend')
//         return NextResponse.json('errror ')
//     }
//     const { result } = await paymentsApi.createPayment({
//         // idempotencyKey: randomUUID(),
//         // sourceId: sourceId,
//         // amountMoney: {
//         //     currency: "USD",
//         //     amount: 100,
//         // },
//         idempotencyKey: randomUUID(),
//         sourceId: sourceId,
//         amountMoney: {
//             currency: "USD",
//             amount: 100,
//         },
//         body,
//     });
//     console.log(result);
//     console.log('working ...................', result)
//     return NextResponse.json(result);
// }
// /   if (req.method === "POST") {
    // const { sourceId } =req.body;