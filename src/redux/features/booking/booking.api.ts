import { TBooking } from "@/types/booking.types";
import { TResponseRedux } from "@/types/global";
import { baseApi } from "../../api/baseApi";

const bookingManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewBooking: builder.mutation({
      query: (payload) => {
        return {
          url: `/bookings/create/${payload}`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["booking", "schedule"],
    }),

    getMyBookings: builder.query({
      query: () => {
        return {
          url: "/bookings/my-bookings",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return { data: response.data };
      },
      providesTags: ["schedule", "booking"],
    }),

    cancelBooking: builder.mutation({
      query: (bookingId) => {
        return {
          url: `/bookings/${bookingId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking", "schedule"],
    }),
  }),
});

export const {
  useAddNewBookingMutation,
  useGetMyBookingsQuery,
  useCancelBookingMutation,
} = bookingManagement;
