import DropDownList from "../components/DropDownList/DropDownList";

export const HEADER_LINKS = [
  { id: 1, content: "For Business", href: "/" },
  { id: 2, content: "Help", href: "/" },
  {
    id: 3,
    content: (
      <DropDownList
        title="EN"
        options={[
          { id: 1, lang: "EN" },
          { id: 2, lang: "AR" },
        ]}
        className=" cursor-pointer outline-none bg-transparent   h-full "
      />
    ),
  },
];
