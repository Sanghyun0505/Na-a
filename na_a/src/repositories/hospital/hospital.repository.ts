import { customAxios } from "../../libs/Axios/customAxios";

class HostpitalRepository {
  public async postHopistalNear(): Promise<void> {
    await customAxios.post("/hosptial/near");
  }

  public async getHosptailIdReview(id: string): Promise<any> {
    const { data } = await customAxios.get(`/hosptail/${id}/review`);
    return data;
  }

  public async postHosptailIdReview(id: string): Promise<void> {
    await customAxios.get(`/hosptail/${id}/review`);
  }

  public async patchHosptailIdReviewId(
    id: string,
    reviewId: string
  ): Promise<void> {
    await customAxios.patch(`/hosptail/${id}/review/${reviewId}`);
  }

  public async deleteHosptailIdReviewId(
    id: string,
    reviewId: string
  ): Promise<void> {
    await customAxios.delete(`/hosptail/${id}/review/${reviewId}`);
  }
}

export default new HostpitalRepository();
