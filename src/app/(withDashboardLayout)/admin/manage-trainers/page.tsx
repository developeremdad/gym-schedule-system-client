"use client";
import CustomSpinner from "@/components/shared/CustomSpinner";
import {
  useDeleteTrainerMutation,
  useGetAllTrainersQuery,
} from "@/redux/features/admin/admin.api";
import { TError } from "@/types/global";
import Link from "next/link";
import { toast } from "sonner";

const ManageTrainers = () => {
  const { data, isFetching } = useGetAllTrainersQuery(null);
  const [deleteTrainer, { data: dData, error }] = useDeleteTrainerMutation();
  if (error) {
    toast.error((error as TError)?.data?.message);
  }
  if (dData) {
    toast.success(dData.message, {
      duration: 2000,
    });
  }
  const handleDeleteTrainer = (id: string) => {
    deleteTrainer(id);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">
          Trainer Management ({data?.data?.length || 0})
        </h1>
        <Link href="/admin/add-trainer">
          <button className="btn btn-outline btn-sm">Add New Trainer</button>
        </Link>
      </div>
      {!isFetching ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((trainer) => (
              <tr key={trainer._id}>
                <td>{trainer.fullName}</td>
                <td>{trainer.email}</td>
                <td>{trainer.role}</td>
                <td>{new Date(trainer.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-sm btn-warning mx-1">Edit</button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => handleDeleteTrainer(trainer?._id)}
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

export default ManageTrainers;
