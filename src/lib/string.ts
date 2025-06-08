import BigNumber from "bignumber.js"
export const cutString = (data: string, count: number) => {
  const F = data.slice(0, count || 3);
  const L = data.slice(-count);
  return F ? `${F}...${L}` : "-";
}
export const cutEndString = (data: string, count: number) => {
  const F = data.slice(0, count || 3);
  return F ? `${F}...` : "-";
}

export const DollarNumber = (data: number) => {
  const i = new Intl.NumberFormat("en-US", {
    currency: 'USD'
  }).format(data)
  return i
}

export function convertToSporeNumber(bigNumber: string) {
  const bn = new BigNumber(bigNumber).dividedBy(new BigNumber('1000000000000000000'))
  const stringNumber = bn.toString()
  const USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  return USDollar.format(+stringNumber)
}

export function bigNumberToNumber(bigNumber: string) {
  const bn = new BigNumber(bigNumber)
  const stringNumber = bn.toString()
  const USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
  });
  return USDollar.format(+stringNumber)
}
export function bigNumberToInt(bigNumber: string) {
  const bn = new BigNumber(bigNumber)
  const stringNumber = bn.toString()
  return +stringNumber
}