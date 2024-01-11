import transaction from "../assets/transaction.png";
import payment from "../assets/payment.png";
import billing from "../assets/billing.png";
import subplan from "../assets/sub&plan.png";
import SubcriptionCard from "./SubcriptionCard";

export default function BillingSec() {
  return (
    <div className="bg-white1 h-screen p-5">
      <div className="flex space-x-3 text-xs text-blackFont">
        <a href="#">Deshboard</a>
        <p>&gt;</p>
        <a href="#">Account & Billing</a>
        <p>&gt;</p>
        <a href="#" className="text-orange">
          Overview
        </a>
      </div>
      {/* ----------------------------- */}
      <div className="flex items-center flex-wrap my-5 text-sm gap-5">
        <div className="flex items-center text-orange space-x-2 cursor-pointer">
          <img className="bg-orange p-1 rounded" src={subplan} alt="plan" />
          <p>Subscription & add-ons</p>
        </div>
        <div className="group flex items-center space-x-2 cursor-pointer">
          <img
            className="group-hover:bg-orange p-1 rounded"
            src={billing}
            alt="plan"
          />
          <p className="group-hover:text-orange">Billing information</p>
        </div>
        <div className="group flex items-center space-x-2 cursor-pointer">
          <img
            className="group-hover:bg-orange p-1 rounded"
            src={transaction}
            alt="plan"
          />
          <p className="group-hover:text-orange">Transactions</p>
        </div>
        <div className="group flex items-center space-x-2 cursor-pointer">
          <img
            className="p-1 rounded group-hover:bg-orange"
            src={payment}
            alt="plan"
          />
          <p className="group-hover:text-orange">Payment Methods</p>
        </div>
      </div>
      {/* ----------------------------- */}

      <SubcriptionCard />
    </div>
  );
}
