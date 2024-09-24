import colors from "colors";
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

  async handleLogin(user) {
    console.log(
      `============== Chạy tài khoản ${user.index} | ${user.info.fullName.green} ==============`
    );

    let token = fileHelper.getTokenById(user.info.id);

    let isExpired = false;
    if (token) {
      const info = {
        access: token,
      };
      const profile = await this.handleAfterLogin(user, info);
      if (profile) {
        return {
          status: 1,
          profile,
        };
      } else {
        isExpired = true;
      }
    }

    let infoLogin = await this.login(user);
    console.log(infoLogin);

    if (infoLogin) {
      const profile = await this.handleAfterLogin(user, infoLogin);
      console.log("123", profile);
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

  async getProfile(user) {
    const body = { resourceId: 2056 };
    try {
      const { data } = await user.http.post(1, `user/user-info`, body);
      if (data.success) {
        return data.data;
      } else {
        user.log.logError(
          `Lấy thông tin tài khoản thất bại: ${colors.gray(
            `[${data?.code}]`
          )} ${data?.message}`
        );
        return null;
      }
    } catch (error) {
      user.log.logError(
        `Lấy thông tin tài khoản thất bại: ${colors.gray(
          `[${error?.response?.status}]`
        )} ${error?.response?.statusText}`
      );

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

  async handleAfterLogin(user, info) {
    const accessToken = info.access || null;
    user.http.updateToken(accessToken);
    fileHelper.saveToken(user.info.id, accessToken);
    let profile = await this.getProfile(user);
    if (profile) {
      if (profile.userId === null) {
        await this.referral(user);
        profile = await this.getProfile(user);
      }
      user.log.log(
        colors.green("Đăng nhập thành công: ") +
          `Số điểm: ${
            colors.yellow(Math.round(profile?.metaInfo?.totalGrade)) +
            user.currency
          }`
      );
    }
    return profile;
  }
}

const authService = new AuthService();
export default authService;
