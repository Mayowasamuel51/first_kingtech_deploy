'use client'
import styles from "../styles/Home.module.css";
import {
    SquarePaymentsForm,
    ApplePay,
    CreditCardInput,
    GooglePay,
    CreditCard,
    PaymentForm,
} from "react-square-web-payments-sdk";
function Payment_s(props) {
    return (
        <>
            <div className={styles.container} >
                <PaymentForm
                    applicationId="sandbox-sq0idb-76u0wvFNrLgKObp2N18WtQ"
                    locationId="LT5BRPZ47EFEA"
                    cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                        try {
                            const response = await fetch(
                                "/api/pay", {
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json",
                                },
                                    body: JSON.stringify({
                                        sourceId: token.token?.token
                                    }),
                            }
                            );
                            alert(JSON.stringify(token, null, 2))
                            if (!response.ok) {
                                // Payment failed
                                console.log("Payment failed");
                                return new Error("worng");
                            }
                            console.log("working................");
                            return await response.json();
                        } catch (error) {
                            console.log(error.message);
                            return new Error(error);
                        }
                    }}>
                    {/* <GooglePay /> */}
                    <CreditCard />
                </PaymentForm>

            </div>
        </>
    )
}


export default Payment_s
'use client'
import styles from "../styles/Home.module.css";
import {
    SquarePaymentsForm,
    ApplePay,
    CreditCardInput,
    GooglePay,
    CreditCard,
    PaymentForm,
} from "react-square-web-payments-sdk";
async function Payment_s() {
    return (
        <>
            <div className={styles.container} >
                <PaymentForm
                    applicationId="sandbox-sq0idb-7D4eUwE-ak0cv-1ta5kJxg"
                    cardTokenizeResponseReceived={ (token, verifiedBuyer) => {
                        const data = {
                            sourceId: token.token,
                            come: "WEwrfr"
                        };
                        const response = await fetch("http://localhost:3000/api/auth/pay", {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                            },
                            mode: 'cors',
                            body: JSON.stringify(data)
                        });
                        console.log("Source ID:", token.token);

                        console.log(await response.json());
                    }}
                    createVerificationDetails={() => ({
                        amount: '1.00',
                        /* collected from the buyer */
                        billingContact: {
                          addressLines: ['123 Main Street', 'Apartment 1'],
                          familyName: 'Doe',
                          givenName: 'John',
                          countryCode: 'GB',
                          city: 'London',
                        },
                        currencyCode: 'GBP',
                        intent: 'CHARGE',
                      })}
                    createPaymentRequest={() => ({
                        countryCode: "US",
                        currencyCode: "USD",
                        total: {
                            amount: "1.00",
                            label: "Total",
                        },
                    })}
                    locationId="LT5BRPZ47EFEA"
                >
                    {/* <ApplePay /> */}
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


            </div>
        </>
    )
}


export default Payment_s