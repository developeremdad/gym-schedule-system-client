"use client";
import CustomSpinner from "@/components/shared/CustomSpinner";
import { useAddNewBookingMutation } from "@/redux/features/booking/booking.api";
import { useGetAllClassSchedulesQuery } from "@/redux/features/classSchedule/classSchedule.api";
import { TError } from "@/types/global";
import { toast } from "sonner";

const ManageClassSchedules = () => {
  const { data, isFetching } = useGetAllClassSchedulesQuery(null);
  const [addBooking, { data: bData, error: bError }] =
    useAddNewBookingMutation();

  if (bError) {
    toast.error((bError as TError)?.data?.message);
  }
  if (bData) {
    toast.success(bData.message, {
      duration: 2000,
    });
  }

  const handleBookSchedule = (classScheduleID: string) => {
    addBooking(classScheduleID);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Class Schedule Management ({data?.data?.length || 0})
        </h1>
      </div>
      {!isFetching ? (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Schedule Date</th>
              <th className="p-2 border">Start Time</th>
              <th className="p-2 border">End Time</th>
              <th className="p-2 border">Available Seat</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((schedule) => (
              <tr key={schedule._id}>
                <td className="p-2 border">
                  {new Date(schedule.scheduleDate).toLocaleDateString()}
                </td>
                <td className="p-2 border">
                  {new Date(schedule.startTime).toLocaleTimeString()}
                </td>
                <td className="p-2 border">
                  {new Date(schedule.endTime).toLocaleTimeString()}
                </td>
                <td className="p-2 border">
                  {schedule.maxTrainees - schedule?.trainees?.length}
                </td>

                <td className="p-2 border">
                  <button
                    className="btn btn-outline mr-2"
                    disabled={schedule?.trainees?.length >= 10}
                    onClick={() => handleBookSchedule(schedule._id)}
                  >
                    Booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default ManageClassSchedules;
