import SelectionBox from "./subcomponents/SelectionBox";
export default function Header({ info, onKeywordSelect }) {
  return (
    <header>
      <div className="relative -z-10 min-h-[11.5rem] bg-[var(--Desaturated-Dark-Cyan)] bg-[url('/images/bg-header-mobile.svg')] dark:bg-[url('/images/bg-header-mobile-dark.svg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/images/bg-header-desktop.svg')] dark:sm:bg-[url('/images/bg-header-desktop-dark.svg')] dark:bg-[#0b1d22]"></div>
      <SelectionBox info={info} onKeywordSelect={onKeywordSelect} />
    </header>
  );
}
