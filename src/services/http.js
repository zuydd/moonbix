import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { v4 as uuidv4 } from "uuid";

export class HttpService {
  constructor(log, device, proxy = null) {
    this.baseURL = [
      "https://www.binance.com/bapi/growth/v1/friendly/growth-paas/third-party/",
      "https://www.binance.com/bapi/growth/v1/friendly/growth-paas/mini-app-activity/third-party/",
    ];
    this.proxy = proxy;
    this.log = log;
    this.token = null;
    this.device = device;
    this.headers = {
      accept: "*/*",
      "accept-language": "vi-VN,vi;q=0.9",
      lang: "vi",
      priority: "u=1, i",
      "bnc-location": "",
      clienttype: "web",
      "content-type": "application/json",
      "sec-fetch-site": "same-origin",
      "Accept-Encoding": "gzip, deflate, br",
      "sec-fetch-mode": "cors",
      Host: "www.binance.com",
      origin: "https://www.binance.com",
      referer: "https://www.binance.com/vi/game/tg/moon-bix",
      Connection: "keep-alive",
      "sec-fetch-dest": "empty",
      "x-passthrough-token": "",
      csrftoken: "d41d8cd98f00b204e9800998ecf8427e",
      "device-info": this.device.deviceInfo,
      "bnc-uuid": this.device.bnc_uuid,
      "user-agent": this.device.userAgent,
      "fvideo-id": "",
      "fvideo-token": "",
    };
  }

  updateToken(token) {
    this.token = token;
  }

  initConfig() {
    const trace_id = uuidv4();
    const headers = {
      ...this.headers,
      "x-trace-id": trace_id,
      "x-ui-request-trace": trace_id,
    };

    if (this.token) {
      headers["x-growth-token"] = `${this.token}`;
    }
    const config = {
      headers,
    };
    if (this.proxy && this.proxy !== "skip") {
      config["httpsAgent"] = new HttpsProxyAgent(this.proxy);
    }
    return config;
  }

  get(domain, endPoint) {
    const url = this.baseURL[domain] + endPoint;
    const config = this.initConfig();
    return axios.get(url, config);
  }

  post(domain, endPoint, body) {
    const url = this.baseURL[domain] + endPoint;
    const config = this.initConfig();
    return axios.post(url, body, config);
  }

  put(domain, endPoint, body) {
    const url = this.baseURL[domain] + endPoint;
    const config = this.initConfig();
    return axios.put(url, body, config);
  }

  async checkProxyIP() {
    if (!this.proxy || this.proxy === "skip") {
      this.log.updateIp("🖥️");
      return null;
    }
    try {
      const proxyAgent = new HttpsProxyAgent(this.proxy);
      const response = await axios.get("https://api.ipify.org?format=json", {
        httpsAgent: proxyAgent,
      });
      if (response.status === 200) {
        const ip = response.data.ip;
        this.log.updateIp(ip);
        return ip;
      } else {
        throw new Error("Proxy lỗi, kiểm tra lại kết nối proxy");
      }
    } catch (error) {
      this.log.updateIp("🖥️");
      return -1;
    }
  }
}
