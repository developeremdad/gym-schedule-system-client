"use client";
import { useGetTrainerClassScheduleQuery } from "@/redux/features/classSchedule/classSchedule.api";
import { TUser } from "@/types/user.types";

const MyAssignedClass = () => {
  const { data, isFetching } = useGetTrainerClassScheduleQuery(null);
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Schedule Date</th>
              <th className="border px-4 py-2">Start Time</th>
              <th className="border px-4 py-2">End Time</th>
              <th className="border px-4 py-2">Trainees</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((schedule) => (
              <tr key={schedule._id}>
                <td className="border px-4 py-2">
                  {new Date(schedule.scheduleDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {new Date(schedule.startTime).toLocaleTimeString()}
                </td>
                <td className="border px-4 py-2">
                  {new Date(schedule.endTime).toLocaleTimeString()}
                </td>
                <td className="border px-4 py-2">
                  {schedule.trainees && schedule.trainees?.length > 0 ? (
                    <ul>
                      {schedule?.trainees?.map((trainee: TUser) => (
                        <li key={trainee._id} className="capitalize">
                          {trainee.fullName}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>No trainees</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignedClass;
