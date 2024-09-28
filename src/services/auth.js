import colors from "colors";
import dayjs from "dayjs";
import fileHelper from "../helpers/file.js";

class AuthService {
  constructor() {}

  async login(user, skipLog = false) {
    user.http.updateToken(null);
    const body = {
      queryString: user.query_id,
      socialType: "telegram",
    };
    try {
      const { data } = await user.http.post(0, "access/accessToken", body);
      if (data?.success) {
        return {
          access: data?.data?.accessToken,
          isNewToken: true,
        };
      } else {
        if (!skipLog) {
          user.log.logError(
            `Đăng nhập thất bại: ${colors.gray(`[${data?.code}]`)} ${
              data?.message
            }`
          );
        }
        return null;
      }
    } catch (error) {
      if (!skipLog) {
        user.log.logError(
          `Đăng nhập thất bại: ${colors.gray(`[${error?.response?.status}]`)} ${
            error?.response?.statusText
          }`
        );
      }
      return null;
    }
  }

  async participated(user) {
    const body = {
      resourceId: 2056,
    };
    try {
      const { data } = await user.http.post(1, "game/participated", body);
      if (data.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  async handleLogin(user) {
    console.log(
      `============== Chạy tài khoản ${user.index} | ${user.info.fullName.green} ==============`
    );

    const tokenData = fileHelper.getTokenById(user.info.id);

    let expired = dayjs().unix();
    let token = null;
    if (tokenData) {
      const arrTokenData = tokenData.split("|");
      expired = arrTokenData[0];
      token = arrTokenData[1];
    }

    if (token && dayjs().unix() < expired) {
      const info = {
        access: token,
        isNewToken: false,
      };
      const profile = await this.handleAfterLogin(user, info, true);
      if (profile) {
        return {
          status: 1,
          profile,
        };
      }
    }

    let infoLogin = await this.login(user);

    if (infoLogin) {
      const profile = await this.handleAfterLogin(user, infoLogin);
      if (profile) {
        return {
          status: 1,
          profile,
        };
      }
    }
    user.log.logError(
      "Quá trình đăng nhập thất bại, vui lòng kiểm tra lại thông tin tài khoản (có thể cần phải lấy mới query_id). Hệ thống sẽ thử đăng nhập lại sau 60s"
    );
    return {
      status: 0,
      profile: null,
    };
  }

  async getProfile(user, skipLog = false) {
    const body = { resourceId: 2056 };
    try {
      const { data } = await user.http.post(1, `user/user-info`, body);
      if (data.success) {
        return data.data;
      } else {
        if (!skipLog) {
          user.log.logError(
            `Lấy thông tin tài khoản thất bại: ${colors.gray(
              `[${data?.code}]`
            )} ${data?.message}`
          );
        }
        return null;
      }
    } catch (error) {
      if (!skipLog) {
        user.log.logError(
          `Lấy thông tin tài khoản thất bại: ${colors.gray(
            `[${error?.response?.status}]`
          )} ${error?.response?.statusText}`
        );
      }
      return null;
    }
  }

  async referral(user) {
    const body = {
      resourceId: 2056,
      agentId: user?.database?.ref,
    };
    try {
      const { data } = await user.http.post(1, "referral", body);
    } catch (error) {}
  }

  async handleAfterLogin(user, info, skipLog = false) {
    const accessToken = info.access || null;
    user.http.updateToken(accessToken);
    if (info.isNewToken) {
      const timestampExp = dayjs().add(6, "hour").unix();
      const tokenSave = timestampExp + "|" + accessToken;
      fileHelper.saveToken(user.info.id, tokenSave);
    }

    let profile = await this.getProfile(user, skipLog);
    if (profile) {
      if (profile.userId === null) {
        await this.referral(user);
        await this.participated(user);
        profile = await this.getProfile(user);
      }
      user.log.log(
        colors.green("Đăng nhập thành công: ") +
          `Số điểm: ${
            colors.yellow(
              profile?.metaInfo?.totalGrade +
                profile?.metaInfo?.referralTotalGrade || 0
            ) + user.currency
          }`
      );
    }
    return profile;
  }
}

const authService = new AuthService();
export default authService;
