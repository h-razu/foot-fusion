import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-32 lg:my-0">
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">
            {user?.displayName}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

          <p className="pt-8 text-sm">Email: {user?.email}</p>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <div className="h-96 w-full">
          <img
            className="rounded-t-lg h-full w-full object-cover shadow-2xl"
            src={user?.photoURL}
            alt="product image"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
