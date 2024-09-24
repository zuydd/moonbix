class GeneratorHelper {
  constructor() {}

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleArray(arr) {
    // Sao chép mảng gốc để không thay đổi nó
    let shuffled = [...arr];

    // Sử dụng thuật toán Fisher-Yates để trộn mảng
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Đổi chỗ 2 phần tử
    }

    return shuffled;
  }

  getRandomElements(arr, x) {
    // Sao chép mảng để không thay đổi mảng gốc
    let shuffled = [...arr];
    shuffled = this.shuffleArray(shuffled);

    // Trả về x phần tử đầu tiên từ mảng đã trộn
    return shuffled.slice(0, x);
  }
}

const generatorHelper = new GeneratorHelper();
export default generatorHelper;