import { useState } from "react";
import { ActivityIndicator } from "react-native";
import axios from "axios";
import { HomeScreen } from "../../screens/Home";
import { REGIONS } from "../../constants/endpoints";
import { useApiRequest } from "../../core/useApiRequest";
import { chooseRandomIndex } from "../../utils/randomCountry";

export const HomeContainer = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const requestInitiator = () => {
    return axios.get(REGIONS + selectedValue.toLocaleLowerCase());
  };
  const { data, isLoading, refetch, isError, error } = useApiRequest(
    ["random_country"],
    requestInitiator,
    { enabled: false }
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <HomeScreen
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      refetch={refetch}
      randomCountry={data?.data[chooseRandomIndex(data?.data.length)]}
    />
  );
};
