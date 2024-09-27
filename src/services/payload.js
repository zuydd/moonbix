import CryptoJS from "crypto-js";
import dayjs from "dayjs";
import cryptoHelper from "../helpers/crypto.js";
import generatorHelper from "../helpers/generator.js";

class PayloadService {
  constructor() {
    this.payloadTemplate = {};
  }

  calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  checkPosition(items, template, item) {
    if (items.length === 0) return true;
    const arrTemplate = template.split("|");
    const x1 = parseFloat(arrTemplate[3]);
    const y1 = parseFloat(arrTemplate[4]);
    let isCheckOk = true;

    for (const i of items) {
      const arr = i.template.split("|");
      const x2 = parseFloat(arr[3]);
      const y2 = parseFloat(arr[4]);
      const distance = this.calculateDistance(x1, y1, x2, y2);

      const sizeCheck = parseInt(item.size) / 2 + parseInt(i.size) / 2 + 0;
      if (distance < sizeCheck) {
        isCheckOk = false;
      }
    }
    return isCheckOk;
  }

  convertStartDataToItem(itemSettingList) {
    const reward = [];
    const trap = [];
    const bonus = [];
    const miss = [
      { size: generatorHelper.randomInt(1, 100) + "", type: "-1", reward: 0 },
      { size: generatorHelper.randomInt(1, 100) + "", type: "-1", reward: 0 },
    ];

    const typeId = {
      REWARD: "1",
      TRAP: "0",
      BONUS: "2",
    };

    for (const itemSetting of itemSettingList) {
      for (const rewardPoint of itemSetting?.rewardValueList) {
        const item = {
          size: itemSetting.size + "",
          type: typeId[itemSetting?.type],
          reward: rewardPoint,
        };

        if (itemSetting?.type === "REWARD") {
          reward.push(item);
        } else if (itemSetting?.type === "TRAP") {
          trap.push(item);
        } else if (itemSetting?.type === "BONUS") {
          bonus.push(item);
        }
      }
    }
    const items = {
      reward,
      trap,
      bonus,
      miss,
    };

    return items;
  }

  getDataTemplate(items, item, index, total) {
    let dataTemplate = "";
    if (item.type !== "-1") {
      const maps = {
        6: ["a1", "a2", "a3", "a4", "a5", "a6"],
        7: ["a1", "a2", "a1|a2", "a3", "a4", "a5", "a6"],
        8: ["a1", "a2", "a1|a2", "a3", "a4", "a3|a4", "a5", "a6"],
        9: ["a1", "a2", "a1|a2", "a3", "a4", "a3|a4", "a5", "a6", "a5|a6"],
        10: ["a1", "a2", "a1", "a2", "a3", "a4", "a3|a4", "a5", "a6", "a5|a6"],
        11: [
          "a1",
          "a2",
          "a1",
          "a2",
          "a3",
          "a4",
          "a3",
          "a4",
          "a5",
          "a6",
          "a5|a6",
        ],
        12: [
          "a1",
          "a2",
          "a1",
          "a2",
          "a3",
          "a4",
          "a3",
          "a4",
          "a5",
          "a6",
          "a5",
          "a6",
        ],
        13: [
          "a1",
          "a2",
          "a1",
          "a2",
          "a1|a2",
          "a3",
          "a4",
          "a3",
          "a4",
          "a5",
          "a6",
          "a5",
          "a6",
        ],
        14: [
          "a1",
          "a2",
          "a1",
          "a2",
          "a1|a2",
          "a3",
          "a4",
          "a3",
          "a4",
          "a3|a4",
          "a5",
          "a6",
          "a5",
          "a6",
        ],
        15: [
          "a1",
          "a2",
          "a1",
          "a2",
          "a1|a2",
          "a3",
          "a4",
          "a3",
          "a4",
          "a3|a4",
          "a5",
          "a6",
          "a5",
          "a6",
          "a5|a6",
        ],
      };

      const map = maps[total];
      const area = map[index];
      const arrArea = area.split("|");
      const arrDataTemplate = [];
      arrArea.forEach((area) => {
        arrDataTemplate.push(this.payloadTemplate[area][item.size]);
      });
      dataTemplate = arrDataTemplate.join(";");
    } else {
      dataTemplate = this.payloadTemplate["miss"];
    }

    const arrTemplate = dataTemplate.split(";");
    let template = "";
    const listData = items.filter((i) => i.template && i.type !== "-1");

    let countCheck = 0;
    while (template === "") {
      const indexRandom = generatorHelper.randomInt(0, arrTemplate.length - 1);
      const templateCheck = arrTemplate[indexRandom];
      const isCheck =
        item.type === "-1"
          ? true
          : this.checkPosition(listData, templateCheck, item);
      if (isCheck) {
        template = templateCheck;
      } else {
        countCheck++;
      }
      if (countCheck > 50) {
        template = templateCheck;
      }
    }

    return template;
  }

  randomPlayTime(size, type, time, diffMax = 3000) {
    if (type === "-1") return generatorHelper.randomInt(1000, 2000);
    let dataTemplateMinMax = "";
    if (time < 16000) {
      dataTemplateMinMax = this.payloadTemplate.t1;
    } else if (time >= 16000 && time < 28000) {
      dataTemplateMinMax = this.payloadTemplate.t2;
    } else {
      dataTemplateMinMax = this.payloadTemplate.t3;
    }

    const indexData = {
      t0s30: {
        min: 0,
        max: 1,
      },
      t0s50: {
        min: 2,
        max: 3,
      },
      t1s30: {
        min: 4,
        max: 5,
      },
      t1s50: {
        min: 6,
        max: 7,
      },
      t1s70: {
        min: 8,
        max: 9,
      },
      t2s60: {
        min: 10,
        max: 11,
      },
    };
    const keyIndex = `t${type}s${size}`;
    const arrTime = dataTemplateMinMax.split("|");

    const min = parseInt(arrTime[indexData[keyIndex].min]);
    const max = parseInt(arrTime[indexData[keyIndex].max]);
    return generatorHelper.randomInt(min, max - diffMax);
  }

  createRandomPlayTime(items) {
    let diffMax = 0;

    let condition = true;
    let res = [];
    let countCheck = 0;
    let detalDiffMax = 1;
    while (condition && countCheck < 20) {
      res = [];
      const startTimestamp = dayjs().valueOf();
      let currentTime = startTimestamp;
      let countPlayTime = 0;
      for (const item of items) {
        const playTime = this.randomPlayTime(
          item.size,
          item.type,
          countPlayTime,
          diffMax
        );
        res.push(currentTime);
        currentTime += playTime;

        countPlayTime += playTime;
      }
      const totalPlayTime = currentTime - startTimestamp;

      if (totalPlayTime <= 44000 && totalPlayTime >= 41000) {
        condition = false;
      } else {
        detalDiffMax = totalPlayTime > 41000 ? 1 : -1;
        countCheck++;
        if (countCheck === 20) {
          diffMax += 200 * detalDiffMax;
          countCheck = 0;
        }
      }
    }

    return res;
  }

  initItemStart(dataStart) {
    const items = this.convertStartDataToItem(
      dataStart.cryptoMinerConfig.itemSettingList
    );

    // Xác định số lượng item và skip
    let rewardSkip = 2;
    const r_reward = Math.random();
    if (r_reward < 0.2) rewardSkip = 0;
    else if (r_reward < 0.7) rewardSkip = 1;
    const reward = items.reward.length - rewardSkip;

    let trapSkip = 2;
    const r_trap = Math.random();
    if (r_trap < 0.2) trapSkip = 0;
    else if (r_trap < 0.7) trapSkip = 1;
    const trap = items.trap.length - trapSkip;

    let bonusSkip = 0;
    if (Math.random() > 0.8) bonusSkip = 1;
    const bonus = items.bonus.length - bonusSkip;

    let missSkip = 2;
    const r_miss = Math.random();
    if (r_miss < 0.2) missSkip = 0;
    else if (r_miss < 0.7) missSkip = 1;
    const miss = 2 - missSkip;

    let missMode = 0; // miss cuối
    const r_missMode = Math.random();
    if (r_missMode < 0.2) missMode = 1; // miss đầu
    else if (r_missMode < 0.65) missMode = 2; // miss random

    // Random item
    const itemRewardRandom = generatorHelper.getRandomElements(
      items.reward,
      reward
    );
    const itemTrapRandom = generatorHelper.getRandomElements(items.trap, trap);
    const itemBonusRandom = generatorHelper.getRandomElements(
      items.bonus,
      bonus
    );

    const arrItem = [
      ...itemRewardRandom,
      ...itemTrapRandom,
      ...itemBonusRandom,
    ];
    if ((miss === 1 && missMode === 2) || (miss === 2 && missMode !== 2)) {
      arrItem.push(items.miss[0]);
    } else if (miss === 2) {
      arrItem.push(items.miss[0]);
      arrItem.push(items.miss[1]);
    }

    const arrItemRandom = generatorHelper.shuffleArray(arrItem);

    if (missMode === 0) {
      arrItemRandom.push(items.miss[1]);
    } else if (missMode === 1) {
      arrItemRandom.unshift(items.miss[1]);
    }

    let totalReward = 0;
    arrItemRandom.forEach((item) => {
      totalReward += item.reward;
      if (totalReward < 0) totalReward = 0;
    });
    return {
      items: arrItemRandom,
      log: totalReward,
    };
  }

  initTemplate(items) {
    const templateSelect = [];
    let countMiss = 0;
    for (const [index, data] of items.entries()) {
      if (data.type === "-1") {
        countMiss++;
      }
      let condition = true;
      while (condition) {
        const template = this.getDataTemplate(
          items,
          data,
          index - countMiss,
          items.filter((item) => item.type !== "-1").length
        );
        const hashTemplate = CryptoJS.SHA256(template).toString(
          CryptoJS.enc.Hex
        );
        if (!templateSelect.includes(hashTemplate)) {
          data["template"] = template;
          templateSelect.push(hashTemplate);
          condition = false;
        }
      }
    }
    return items;
  }

  createRawData(item) {
    const arrTemplate = item.template.split("|");
    const randomVector = Math.random() > 0.5 ? 1 : -1;
    const template = {
      hookX: arrTemplate[0],
      hookY: arrTemplate[1],
      angle: arrTemplate[2],
      itemX: arrTemplate[3],
      itemY: arrTemplate[4],
    };
    const hookX =
      parseFloat(template.hookX) +
      generatorHelper.randomFloat(0, 2) * randomVector;
    const hookY =
      parseFloat(template.hookY) +
      generatorHelper.randomFloat(0, 2) * randomVector;
    const angle =
      parseFloat(template.angle) +
      generatorHelper.randomFloat(0, 0.03) * randomVector;
    const itemX = template.itemX
      ? (
          parseFloat(template.itemX) +
          generatorHelper.randomFloat(0, 2) * randomVector
        ).toFixed(3)
      : 0;
    const itemY = template.itemY
      ? (
          parseFloat(template.itemY) +
          generatorHelper.randomFloat(0, 2) * randomVector
        ).toFixed(3)
      : 0;
    const type =
      item.type !== "-1" ? item.type : generatorHelper.randomInt(0, 2);
    const size =
      item.size !== "-1" ? item.size : generatorHelper.randomInt(0, 99);
    const level =
      item.type === "2"
        ? parseInt(size) + item.reward
        : generatorHelper.randomInt(1, 199);
    return `${item.timestamp}|${hookX.toFixed(3)}|${hookY.toFixed(
      3
    )}|${angle.toFixed(3)}|${itemX}|${itemY}|${type}|${size}|${level}`;
  }

  createPayload(user, dataStart) {
    if (!user?.database?.payload) {
      user.log.logError(`Không thể chơi game do không có dữ liệu payload`);
      return;
    }

    this.payloadTemplate = user?.database?.payload[user?.indexPayload];
    const itemsData = this.initItemStart(dataStart);
    const itemsWithTemplate = this.initTemplate(itemsData.items);

    const arrTime = this.createRandomPlayTime(itemsWithTemplate);

    const items = itemsWithTemplate.map((item, index) => {
      return {
        ...item,
        timestamp: arrTime[index],
      };
    });

    const arrRaw = [];
    for (const item of items) {
      const raw = this.createRawData(item);
      arrRaw.push(raw);
    }
    const rawFull = arrRaw.join(";");
    const payloadEncode = cryptoHelper.encryptPayload(
      rawFull,
      dataStart.gameTag
    );

    return {
      payload: payloadEncode,
      log: itemsData.log,
    };
  }
}

const payloadService = new PayloadService();
export default payloadService;
