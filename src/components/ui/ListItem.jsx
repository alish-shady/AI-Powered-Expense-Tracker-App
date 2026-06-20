import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

function ListItem({ expense, setShowDeleteForm }) {
  return (
    <li className="bg-one text-three border-four/40 flex items-center justify-between rounded-xl border px-4 py-4 text-sm shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-three/70 text-xs">{expense.position}</span>
        <span className="text-three font-medium">{expense.category}</span>
        <span className="text-three/70 text-xs">{expense.amount}</span>
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <span className="text-three hover:text-three/50 cursor-pointer transition-colors">
          <MdModeEditOutline />
        </span>
        <span
          onClick={() =>
            setShowDeleteForm({ show: true, expenseId: expense.id })
          }
          className="text-three hover:text-error cursor-pointer transition-colors"
        >
          <MdDeleteOutline />
        </span>
      </div>
    </li>
  );
}

export default React.memo(ListItem);
