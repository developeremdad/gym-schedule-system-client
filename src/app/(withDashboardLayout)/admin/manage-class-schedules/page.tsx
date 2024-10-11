"use client";
import CustomSpinner from "@/components/shared/CustomSpinner";
import { useGetAllTrainersQuery } from "@/redux/features/admin/admin.api";
import {
  useAssignTrainerToClassScheduleMutation,
  useDeleteClassScheduleMutation,
  useGetAllClassSchedulesQuery,
} from "@/redux/features/classSchedule/classSchedule.api";
import { TError } from "@/types/global";
import { toast } from "sonner";

const ManageClassSchedules = () => {
  const { data, isFetching } = useGetAllClassSchedulesQuery(null);
  const [deleteClassSchedule, { data: dData, error }] =
    useDeleteClassScheduleMutation();

  const [assignTrainerToClassSchedule, { data: uData, error: uError }] =
    useAssignTrainerToClassScheduleMutation();

  const { data: trainers, isFetching: tIsFetching } =
    useGetAllTrainersQuery(null);

  if (error) {
    toast.error((error as TError)?.data?.message);
  }
  if (dData) {
    toast.success(dData.message, {
      duration: 2000,
    });
  }

  if (uError) {
    toast.error((uError as TError)?.data?.message);
  }
  if (uData) {
    toast.success(uData.message, {
      duration: 2000,
    });
  }

  const handleDeleteSchedule = (id: string) => {
    deleteClassSchedule(id);
  };

  const handleUpdateTrainer = (trainerId: string, classScheduleId: string) => {
    const assignData = {
      classScheduleId,
      data: {
        trainerId: trainerId,
      },
    };
    assignTrainerToClassSchedule(assignData);
  };

  const selectedTrainerFullName = (id: string) => {
    const trainer = trainers?.data?.find((t) => t._id === id);
    return trainer?.fullName;
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
              <th className="p-2 border">Max Trainees</th>
              <th className="p-2 border">Assigned Trainer</th>
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
                <td className="p-2 border">{schedule.maxTrainees}</td>
                <td className="p-2 border">
                  {!tIsFetching ? (
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={(e) =>
                        handleUpdateTrainer(e.target.value, schedule?._id)
                      }
                    >
                      <option disabled selected>
                        {selectedTrainerFullName(schedule?.trainer) ||
                          "Assign a trainer"}
                      </option>
                      {trainers?.data?.map((t) => (
                        <option value={t?._id} key={t?._id}>
                          {t?.fullName}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <CustomSpinner />
                  )}
                </td>
                <td className="p-2 border">
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDeleteSchedule(schedule._id)}
                  >
                    Delete
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
