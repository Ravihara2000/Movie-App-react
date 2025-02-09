import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAndroid } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack,  } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface platformsIconsListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: platformsIconsListProps) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,  
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack gap={2}>
      {platforms.map((platform) => (
        <>
          {Object.entries(iconsMap).map(([key, Icon]) =>
            platform.slug === key ? <Icon key={key} /> : null
          )}
        </>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
