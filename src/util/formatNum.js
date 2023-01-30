export default function formatNum(num) {
  if (!num) {
    return num;
  }
  return String(num).replace(/\d+/g, part => part.replace(/(\d)(?=(\d{3})+$)/g, n => `${n},`));
}
