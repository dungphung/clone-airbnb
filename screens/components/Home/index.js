import React, { Component } from "react";
import { View, Image, Text } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "#b63838"
            }}
          >
            PRIVATE ROOM - 2 BEDS
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold"
            }}
          >
            The Cozy Place
          </Text>
          <Text style={{ fontSize: 10 }}>82$</Text>
        </View>
      </View>
    );
  }
}
