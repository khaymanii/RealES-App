import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import HomeCard from "./HomeCard";

export default function Home() {
  return (
    <View style={tw`mx-4 mb-8`}>
      <Text style={tw`font-semibold text-xl text-center py-8`}>
        Homes For You
      </Text>
      <View>
        <HomeCard />
      </View>
    </View>
  );
}
