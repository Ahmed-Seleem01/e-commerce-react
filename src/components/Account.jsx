export const Account = () => {
  return (
    <div className="mb-[140px] flex w-full justify-between">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className=" font-medium">Manage My Account</h3>
          <ul className="ml-[35px] text-gray-400">
            <li className="mt-4">
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Address Book</a>
            </li>
            <li>
              <a href="#">My Payment Options</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" font-medium">My Orders</h3>
          <ul className="ml-[35px] text-gray-400">
            <li className="mt-4">My Returns</li>
            <li>My Cancellations</li>
          </ul>
        </div>
        <div>
          <h3 className=" font-medium">My WishList</h3>
          <ul className="ml-[35px] text-gray-400"></ul>
        </div>
      </div>

      <div>
        <form className="flex max-h-[630px] flex-col gap-6 px-[80px] py-10 shadow-md">
          <h3 className="text-xl font-medium text-[#DB4444]">
            Edit Your Profile
          </h3>
          <span className="flex gap-[50px]">
            <label className=" flex flex-col gap-2">
              <span>First Name</span>
              <input
                placeholder="Md"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="text"
                name="firstName"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Last Name</span>
              <input
                placeholder="Rimel"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="text"
                name="firstName"
                required
              />
            </label>
          </span>
          <span className="flex gap-[50px]">
            <label className="flex flex-col gap-2">
              <span>Email</span>
              <input
                placeholder="rimel1111@gmail.com"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="email"
                name="emailAddress"
                required
              />
            </label>
            <label className=" flex flex-col gap-2">
              <span>Address</span>

              <input
                placeholder="Kingston, 5236, United State"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="text"
                name="streetAddress"
                required
              />
            </label>
          </span>
          <span>
            <label className="flex flex-col gap-4">
              <span>Password Changes</span>
              <input
                placeholder="Current Passwod"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="password"
                name=""
              />
              <input
                placeholder="New Passwod"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="password"
                name=""
              />
              <input
                placeholder="Confirm New Passwod"
                className="h-[50px] rounded bg-[#F5F5F5] px-4 py-3"
                type="password"
                name=""
              />
            </label>
          </span>
          <span className="flex items-center gap-8 self-end">
            <button>Cancel</button>
            <button className=" primary-button font-medium">
              Save Changes
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
