import { TQueryParam, TResponseRedux } from "@/types/global";
import { TUser } from "@/types/user.types";
import { baseApi } from "../../api/baseApi";

const allApiManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonors: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/donor-list",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ["user"],
    }),

    addNewBlog: builder.mutation({
      query: (payload) => {
        return {
          url: `/create-blog`,
          method: "POST",
          body: payload,
        };
      },
    }),

    addNewExperience: builder.mutation({
      query: (payload) => {
        return {
          url: `/create-experience`,
          method: "POST",
          body: payload,
        };
      },
    }),

    addNewProject: builder.mutation({
      query: (payload) => {
        return {
          url: `/create-project`,
          method: "POST",
          body: payload,
        };
      },
    }),

    addNewSkill: builder.mutation({
      query: (payload) => {
        return {
          url: `/create-skill`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetAllDonorsQuery,
  useAddNewBlogMutation,
  useAddNewExperienceMutation,
  useAddNewProjectMutation,
  useAddNewSkillMutation,
} = allApiManagement;
