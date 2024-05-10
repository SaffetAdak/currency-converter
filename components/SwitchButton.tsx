import { RiExchangeLine } from "react-icons/ri";

export default function SwitchButton({ onSwitch }: any) {
  return (
    <div>
      <RiExchangeLine
        className="text-5xl text-white cursor-pointer hover:text-primary-500 transition"
        onClick={onSwitch}
      />
    </div>
  );
}
