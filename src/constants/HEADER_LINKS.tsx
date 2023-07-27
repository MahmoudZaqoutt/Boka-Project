import DropDownList from "../components/DropDownList/DropDownList";

export const HEADER_LINKS = [
  {
    content: "For Business",
    href: "/",
  },
  {
    content: "Help",
    href: "/",
  },
  {
    content: (
      <DropDownList
        title="EN"
        options={["EN", "AR"]}
        className=" cursor-pointer outline-none bg-transparent   h-full "
      />
    ),
  },
];
