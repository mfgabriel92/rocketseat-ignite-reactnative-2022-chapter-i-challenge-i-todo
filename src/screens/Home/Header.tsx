import { Center } from "native-base";
import { Image } from "react-native";

function Header() {
  return (
    <Center width="full" height="25%" backgroundColor="gray.700">
      <Image source={require("../../../assets/logo.png")} />
    </Center>
  );
}

export { Header };
