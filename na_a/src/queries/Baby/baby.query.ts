import { useMutation, useQuery } from "react-query";
import babyRepository from "../../repositories/Baby/baby.repository";
import {
  BabyListIdDailyParam,
  BabyPostDailyParam,
} from "../../repositories/Baby/baby.param";

export const usePostBabyImgMutation = () => {
  return useMutation((file: FormData) => babyRepository.postImgFile(file));
};

export const usePostBabyMutation = () => {
  return useMutation((post: BabyPostDailyParam) =>
    babyRepository.postBaby(post)
  );
};

export const useGetBabyList = () =>
  useQuery("/children", () => babyRepository.getBabyList(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

export const useGetBabyListId = (id: string) =>
  useQuery(["/children/id", id], () => babyRepository.getBabyListId(id), {
    enabled: !!id,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

export const useGetBabyListIdDaily = (id: string) =>
  useQuery(
    ["/children/id/daily", id],
    () => babyRepository.getBabyListIdDaily(id),
    {
      enabled: !!id,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );

export const usePostBabyListIdDailyMutation = () => {
  return useMutation(({ id, date, content }: BabyListIdDailyParam) =>
    babyRepository.postBabyListIdDaily({ id, date, content })
  );
};

export const useGetBabyListIdDailyId = (id: string, dailyid: string) =>
  useQuery(
    ["/children/id/daily/id", id, dailyid],
    () => babyRepository.getBabyListIdDailyId(id, dailyid),
    {
      enabled: !!id && !!dailyid,
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
  );
