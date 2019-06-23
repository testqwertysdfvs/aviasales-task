export default function (price: number): string {
    return Math.round(price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}
