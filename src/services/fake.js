import fileHelper from "../helpers/file.js";
import generatorHelper from "../helpers/generator.js";

class FakeService {
  constructor() {
    const rawDevices = fileHelper.readFile("device.json");
    this.devices = JSON.parse(rawDevices);
  }

  randomPhone() {
    const phone = generatorHelper.getRandomElements(this.devices.phone, 1);
    return phone;
  }

  createDeviceInfo() {
    const phone = this.randomPhone();
    console.log(phone);
  }
}

const fakeService = new FakeService();
export default fakeService;
