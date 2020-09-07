export default function formateCurrency(price){
    return "$ " + Number(price.toFixed(1)).toLocaleString() + " ";
}