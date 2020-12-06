import React from "react";
import { View, Text } from "react-native";

type Props = {
  userId: string;
  item: Message;
};

export function ChatItem({ item, userId }: Props) {
  return (
    <View
      style={
        userId == item.userId
          ? {
              alignSelf: "flex-end",
              backgroundColor: "gray",
              padding: 5,
              borderRadius: 10,
              borderBottomRightRadius: 0,
              marginBottom: 8,
            }
          : {
              alignSelf: "flex-start",
              backgroundColor: "#195",
              padding: 5,
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              marginBottom: 8,
            }
      }
    >
      <Text style={userId == item.userId ? { color: "#fff" } : {}}>
        {item.text}
      </Text>
    </View>
  );
}
