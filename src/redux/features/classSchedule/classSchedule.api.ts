import { TClassSchedule } from "@/types/classSchedule.type";
import { TResponseRedux } from "@/types/global";
import { baseApi } from "../../api/baseApi";

const classScheduleManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClassSchedules: builder.query({
      query: () => {
        return {
          url: "/classSchedules",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TClassSchedule[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ["schedule"],
    }),

    addNewClassSchedule: builder.mutation({
      query: (payload) => {
        return {
          url: `/classSchedules/create`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["schedule"],
    }),

    deleteClassSchedule: builder.mutation({
      query: (classScheduleId) => {
        return {
          url: `/classSchedules/${classScheduleId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["schedule"],
    }),

    updateClassSchedule: builder.mutation({
      query: (payload) => {
        return {
          url: `/classSchedules/${payload.id}`,
          method: "PATCH",
          body: payload.data,
        };
      },
      invalidatesTags: ["schedule"],
    }),
  }),
});

export const {
  useGetAllClassSchedulesQuery,
  useAddNewClassScheduleMutation,
  useDeleteClassScheduleMutation,
  useUpdateClassScheduleMutation,
} = classScheduleManagement;
