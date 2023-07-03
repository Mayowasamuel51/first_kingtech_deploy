import { Client } from "square";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});
export async function POST(req) {
  const { sourceId } = await req.json();
  if (!sourceId) {
    throw new Error("Invalid sourceId");
  }
  console.log(sourceId)
  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: "USD",
        amount: 100,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, error: "An error occurred while processing the payment." });
  }
}














// export { handler as GET, handler as POST }
// export const postHandler = handler;
// export default {
//   POST: postHandler,
// };
// export { handler as GET, handler as POST }