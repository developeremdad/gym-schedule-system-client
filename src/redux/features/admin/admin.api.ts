import { TResponseRedux } from "@/types/global";
import { TUser } from "@/types/user.types";
import { baseApi } from "../../api/baseApi";

const adminApiManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTrainers: builder.query({
      query: () => {
        return {
          url: "/trainers?role=trainer",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ["user"],
    }),

    addNewTrainer: builder.mutation({
      query: (payload) => {
        return {
          url: `/trainers/create`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["user"],
    }),

    getTrainerById: builder.query({
      query: (trainerId) => ({
        url: `/trainers/${trainerId}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    deleteTrainer: builder.mutation({
      query: (payload) => {
        return {
          url: `/trainers/${payload}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),

    updateTrainer: builder.mutation({
      query: ({ id, data }) => ({
        url: `/trainers/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllTrainersQuery,
  useAddNewTrainerMutation,
  useGetTrainerByIdQuery,
  useDeleteTrainerMutation,
  useUpdateTrainerMutation,
} = adminApiManagement;
