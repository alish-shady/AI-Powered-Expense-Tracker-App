import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "#components/ui/item";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router";

function ListItem({ expense, position, setShowDeleteForm }) {
  return (
    <Item
      variant="outline"
      className="bg-primary text-primary-foreground border-border/40 shadow-sm transition-shadow hover:shadow-md"
    >
      <ItemHeader>
        <ItemTitle>
          {position} {expense.category}
        </ItemTitle>
        <ItemDescription className="text-primary-foreground/70 text-xs">
          {expense.amount}
        </ItemDescription>
      </ItemHeader>
      <ItemContent className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <ItemTitle className="text-primary-foreground text-xs">
            Description:
          </ItemTitle>
          <ItemDescription>{expense.description.slice(0, 15)}</ItemDescription>
        </div>

        <ItemActions className="flex items-center gap-4 text-base">
          <Link to={`/app/expenses/${expense.id}`}>
            <span className="text-primary-foreground hover:text-primary-foreground/50 cursor-pointer transition-colors">
              <MdModeEditOutline />
            </span>
          </Link>
          <span
            onClick={() =>
              setShowDeleteForm({ show: true, expenseId: expense.id })
            }
            className="text-primary-foreground hover:text-destructive cursor-pointer transition-colors"
          >
            <MdDeleteOutline />
          </span>
        </ItemActions>
      </ItemContent>
    </Item>
  );
}

export default React.memo(ListItem);
