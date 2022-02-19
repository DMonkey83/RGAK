export default function FormatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  };
  const formatter = Intl.NumberFormat('en-GB', 
    options
  );
  return formatter.format(amount);
}