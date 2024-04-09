import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { HomeContainer } from "../containers/screens/HomeContainer";

const Stack = createNativeStackNavigator();
const client = new QueryClient();

export const Root = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
