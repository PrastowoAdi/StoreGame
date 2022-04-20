// import Link from "next/link";

import { useState } from "react";
import { toast } from "react-toastify";

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function CheckoutConfirmation() {
  const [checkbox, setCheckBox] = useState(false);
  const onSubmit = () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-topup");

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);
    // console.log("submit", checkbox);
    if (!checkbox) {
      toast.error("Patikan anda telah melakukan pembayaran");
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accoutUser: dataTopUp.verifyID,
    };
    console.log(data);
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckBox(!checkbox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm
          Payment
        </button>
      </div>
    </>
  );
}
