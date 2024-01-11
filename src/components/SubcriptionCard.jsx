const showData = [
  {
    name: "Current plan",
    data: "Starter",
    action: "Change plan",
  },
  {
    name: "Users",
    data: "1",
    action: "Add User",
  },
  {
    name: "Billing Cycle",
    data: "Yearly",
  },
  {
    name: "Recurring Amount",
    data: "$1536",
  },
  {
    name: "Next Payment",
    data: "07/05/2023",
    action: "Cancel auto-renewal",
  },
  {
    name: "Payment methode",
    data: "Visa **4242",
    action: "Update",
  },
];

export default function SubcriptionCard() {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold">Subcription overview</h1>
          <p className="text-xs"> ID#: 32344</p>
        </div>
        <div className="bg-white1 p-2">
          <select
            name="mngSubc"
            className="bg-transparent text-cardList text-xs"
          >
            <option value="">Manage Subscription</option>
            <option value="">Manage Subscription</option>
            <option value="">Manage Subscription</option>
            <option value="">Manage Subscription</option>
          </select>
        </div>
      </div>

      <div className="flex items-start flex-wrap gap-4 my-5">
        {showData.map((items, index) => (
          <div
            key={index}
            className="min-w-[170px] sm:min-w-[200px] max-w-screen mx-auto"
          >
            <div className="bg-white1 p-5">
              <p className="text-xs text-blackFont">{items.name}</p>
              <p className="font-bold text-lg">{items.data}</p>
            </div>
            <a href="#" className="text-xs text-orange">
              {items?.action}
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-between my-10">
        <h1 className="font-semibold">Add-ons</h1>
        <button className="bg-orange p-2 text-white text-sm rounded">
          Explore Add-ons
        </button>
      </div>
    </div>
  );
}
