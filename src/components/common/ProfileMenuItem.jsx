import { Item, ItemMedia, ItemActions } from "#components/ui/item";

export default function ProfileMenuItem({
  onClick,
  children,
  className,
  Icon,
}) {
  return (
    <Item variant="outline" size="sm" className={className} onClick={onClick}>
      <div className="flex cursor-pointer gap-4">
        <ItemMedia variant="icon">
          <Icon />
        </ItemMedia>
        <ItemActions>{children}</ItemActions>
      </div>
    </Item>
  );
}
