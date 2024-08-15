import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className=" flex justify-center items-center my-5">
      <div>
        <div className=" border-2 border-[#dcc146] rounded-lg px-6 py-8">
          <div className=" mb-8">
            <h1 className=" text-3xl mb-3 font-bold text-center">
              Registration
            </h1>
            <div className=" w-full h-[2px] bg-black mx-auto"></div>
          </div>
          <form className=" flex flex-col gap-5 ">
            <fieldset className=" flex flex-col gap-2">
              <label className=" font-medium text-lg " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className=" text-lg border-2 w-72 rounded-xl py-1 px-3 outline-orange-200"
                id="email"
                name="password"
                required
              />
            </fieldset>
            <fieldset className=" flex flex-col gap-2">
              <label className="  font-medium text-lg " htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className=" text-lg border-2 w-72 rounded-xl py-1 px-3 outline-orange-200"
                id="password"
                name="password"
                required
              />
            </fieldset>
            <input
              className=" py-1 cursor-pointer text-lg font-medium bg-orange-300 rounded-md"
              type="submit"
              value="Register"
            />
          </form>
          <div className="my-4">
            <h1 className="text-center">OR</h1>
          </div>
          <div className=" flex items-center justify-between">
            <button className="py-1 px-4 rounded-md text-lg font-medium bg-blue-200 border border-blue-800">
              Google
            </button>
            <Link to={"/login"}>
              <p className=" cursor-pointer text-blue-500">
                Already have an account?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
