"use client";
import CustomSpinner from "@/components/shared/CustomSpinner";
import {
  useCancelBookingMutation,
  useGetMyBookingsQuery,
} from "@/redux/features/booking/booking.api";
import { TError } from "@/types/global";
import { toast } from "sonner";

const ManageClassSchedules = () => {
  const { data, isFetching } = useGetMyBookingsQuery(null);

  const [cancelBooking, { data: dData, error }] = useCancelBookingMutation();

  if (error) {
    toast.error((error as TError)?.data?.message);
  }
  if (dData) {
    toast.success(dData.message, {
      duration: 2000,
    });
  }

  const handleDeleteBooking = (id: string) => {
    console.log(id);
    cancelBooking(id);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Class Schedule Management ({data?.data?.length || 0})
        </h1>
      </div>
      {!isFetching ? (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Schedule Date</th>
                <th className="border px-4 py-2">Start Time</th>
                <th className="border px-4 py-2">End Time</th>
                <th className="border px-4 py-2">Booking Date</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((booking) => (
                <tr key={booking._id}>
                  <td className="border px-4 py-2">
                    {new Date(
                      booking.classSchedule.scheduleDate
                    ).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(
                      booking.classSchedule.startTime
                    ).toLocaleTimeString()}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(
                      booking.classSchedule.endTime
                    ).toLocaleTimeString()}
                  </td>
                  <td className="border px-4 py-2">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeleteBooking(booking._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Cancel Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default ManageClassSchedules;
