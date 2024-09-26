import colors from "colors";
import delayHelper from "../helpers/delay.js";
import authService from "./auth.js";

class TaskService {
  constructor() {}

  async getAllTask(user) {
    const body = { resourceId: 2056 };
    try {
      const { data } = await user.http.post(1, "task/list", body);
      if (data.success) {
        return data.data.data[0].taskList.data;
      } else {
        user.log.logError(
          `Lấy danh sách nhiệm vụ thất bại: ${colors.gray(`[${data?.code}]`)} ${
            data?.message
          }`
        );
        return [];
      }
    } catch (error) {
      user.log.logError(
        `Lấy danh sách nhiệm vụ thất bại: ${colors.gray(
          `[${error?.response?.status}]`
        )} ${error?.response?.statusText}`
      );
      return [];
    }
  }

  async completeTask(user, task) {
    const body = { resourceIdList: [task.resourceId], referralCode: null };
    try {
      const { data } = await user.http.post(1, "task/complete", body);
      if (data.success) {
        if (task.resourceId === 2057) {
          user.log.log(
            `Checkin thành công ${colors.blue(
              `${data?.data?.completedCount || 1} ngày liên tiếp`
            )}, phần thưởng: ${
              colors.yellow(task?.rewardList[0]?.amount) + user.currency
            }`
          );
        } else {
          user.log.log(
            `Làm nhiệm vụ ${colors.blue(
              task?.rewardList[0]?.code
            )} thành công, phần thưởng: ${
              colors.yellow(task?.rewardList[0]?.amount) + user.currency
            }`
          );
        }
        return true;
      } else {
        user.log.logError(
          `Làm nhiệm vụ ${colors.blue(
            `[${task.resourceId}] - ${task?.rewardList[0]?.code}`
          )} thất bại: ${colors.gray(`[${data?.code}]`)} ${data?.message}`
        );
        return false;
      }
    } catch (error) {
      user.log.logError(
        `Làm nhiệm vụ ${colors.blue(
          `[${task.resourceId}] - ${task?.rewardList[0]?.code}`
        )} thất bại: ${colors.gray(`[${error?.response?.status}]`)} ${
          error?.response?.statusText
        }`
      );
      return false;
    }
  }

  isNoCheckedIn(taskCheckin) {
    return taskCheckin?.status === "IN_PROGRESS";
  }

  async handleCheckin(user) {
    const tasks = await this.getAllTask(user);
    const taskCheckin = tasks.find((task) => task.resourceId === 2057);
    let isNoCheckedIn = false;
    if (taskCheckin) {
      isNoCheckedIn = this.isNoCheckedIn(taskCheckin);
    }
    if (isNoCheckedIn) {
      await this.completeTask(user, taskCheckin);
      await authService.getProfile(user);
    } else {
      user.log.log(
        colors.magenta(
          `Đã checkin hôm nay! ${colors.blue(
            `${taskCheckin?.completedCount || 1} ngày liên tiếp`
          )}`
        )
      );
    }
  }

  async handleTask(user) {
    const skipTasks = [2057, 2058];
    const tasks = await this.getAllTask(user);
    const tasksFilter = tasks.filter(
      (task) =>
        !skipTasks.includes(task.resourceId) && task.status === "IN_PROGRESS"
    );

    if (tasksFilter.length) {
      user.log.log(
        `Còn ${colors.blue(tasksFilter.length)} nhiệm vụ chưa hoàn thành`
      );
    } else {
      user.log.log(colors.magenta(`Đã làm hết các nhiệm vụ`));
      return;
    }

    for (const task of tasksFilter) {
      await delayHelper.delay(5);
      await this.completeTask(user, task);
      await authService.getProfile(user);
      await this.getAllTask(user);
    }

    user.log.log(colors.magenta("Đã làm hết nhiệm vụ"));
  }
}

const taskService = new TaskService();
export default taskService;
