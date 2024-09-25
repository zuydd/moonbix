import colors from "colors";
import delayHelper from "../helpers/delay.js";
import authService from "./auth.js";
import payloadService from "./payload.js";

class GameService {
  constructor() {}

  async startGame(user, index) {
    const body = { resourceId: 2056 };
    try {
      const { data } = await user.http.post(1, "game/start", body);
      if (data.success) {
        user.log.log(
          `Bắt đầu chơi game [lượt ${index}], hoàn thành sau: ${colors.blue(
            `45s`
          )}`
        );
        await authService.getProfile(user);
        return data.data;
      } else {
        user.log.logError(
          `Bắt đầu chơi game thất bại: ${colors.gray(`[${data?.code}]`)} ${
            data?.message
          }`
        );
        return null;
      }
    } catch (error) {
      user.log.logError(
        `Bắt đầu chơi game thất bại: ${colors.gray(
          `[${error?.response?.status}]`
        )} ${error?.response?.statusText}`
      );
      return null;
    }
  }

  async completeGame(user, dataStart) {
    const bodyData = payloadService.createPayload(user, dataStart);
    await delayHelper.delay(47);
    if (bodyData) {
      const body = {
        resourceId: 2056,
        payload: bodyData.payload,
        log: bodyData.log,
      };
      try {
        const { data } = await user.http.post(1, "game/complete", body);
        if (data.success) {
          user.log.log(
            `Chơi game thành công, phần thưởng: ${
              colors.yellow(bodyData.log) + user.currency
            }`
          );
          await authService.getProfile(user);
          return true;
        } else {
          user.log.logError(
            `Chơi game thất bại: ${colors.gray(`[${data?.code}]`)} ${
              data?.message
            }`
          );
          return false;
        }
      } catch (error) {
        user.log.logError(
          `Chơi game thất bại: ${colors.gray(`[${error?.response?.status}]`)} ${
            error?.response?.statusText
          }`
        );
      }
    } else {
      user.log.logError(`Chơi game thất bại do không tạo được dữ liệu payload`);
    }
  }

  async handlePlayGame(user, awaitTime) {
    const profile = await authService.getProfile(user);
    if (profile) {
      const totalPlayGame =
        profile?.metaInfo?.totalAttempts - profile?.metaInfo?.consumedAttempts;
      if (totalPlayGame > 0) {
        user.log.log(`Còn ${colors.blue(totalPlayGame)} lượt chơi game`);
        for (let index = 0; index < totalPlayGame; index++) {
          const dataStart = await this.startGame(user, index + 1);
          if (dataStart) {
            await this.completeGame(user, dataStart);
          }
        }

        user.log.log(
          colors.magenta(
            `Chơi game xong! Chờ lần chơi mới sau: ${colors.blue(
              Math.abs(awaitTime) + " phút"
            )}`
          )
        );
      } else {
        user.log.log(colors.magenta(`Đã dùng hết lượt chơi game`));
      }
    }
  }
}

const gameService = new GameService();
export default gameService;
