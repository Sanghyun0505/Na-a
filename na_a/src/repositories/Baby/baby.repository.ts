import { customAxios } from "../../libs/Axios/customAxios";
import {
  BabyImgResponse,
  BabyListIdResponse,
  BabyListResponse,
} from "../../types/Baby/baby.type";
import { BabyListIdDailyParam, BabyPostDailyParam } from "./baby.param";

class BabyRepository {
  public async postImgFile(file: FormData): Promise<BabyImgResponse> {
    const { data } = await customAxios.post("/files", file);
    return data;
  }

  public async postBaby(post: BabyPostDailyParam): Promise<void> {
    await customAxios.post("/children", post);
  }

  public async getBabyList(): Promise<BabyListResponse> {
    const { data } = await customAxios.get("/children");
    return data;
  }

  public async getBabyListId(id: string): Promise<BabyListIdResponse> {
    const { data } = await customAxios.get(`/children/${id}`);
    return data;
  }

  public async deleteBabyListId(id: string): Promise<void> {
    await customAxios.delete(`/children/${id}`);
  }

  public async patchBabyListId(id: string): Promise<void> {
    await customAxios.patch(`/children/${id}`);
  }

  public async getBabyListIdDaily(id: string): Promise<BabyListIdResponse> {
    const { data } = await customAxios.get(`/children/${id}/daily`);
    return data;
  }

  public async postBabyListIdDaily({
    id,
    date,
    content,
  }: BabyListIdDailyParam): Promise<void> {
    await customAxios.post(`/children/${id}/daily`, { date, content });
  }

  public async getBabyListIdDailyId(id: string, dailyid: string): Promise<any> {
    const { data } = await customAxios.get(`/children/${id}/daily/${dailyid}`);
    return data;
  }

  public async patchBabyListIdDailyId(
    id: string,
    dailyid: string
  ): Promise<void> {
    await customAxios.patch(`/children/${id}/daily/${dailyid}`);
  }

  public async deleteBabyListIdDailyId(
    id: string,
    dailyid: string
  ): Promise<void> {
    await customAxios.delete(`/children/${id}/daily/${dailyid}`);
  }
}

export default new BabyRepository();
