import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./components/Explore/Category";
import Home from "./components/Home";
import Tag from "./components/Tag";
const { height, width } = Dimensions.get("window");
export default class Explore extends Component {
  componentWillMount = () => {
    this.startHeaderHeight = 120;
    this.endHeaderHeight = 80;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.scrollY = new Animated.Value(0);
    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animationOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    this.andimationTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });

    this.animationBackgroundColor = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: ["rgb(0,0,0)", "rgb(255, 0, 0)"],
      extrapolate: "clamp"
    });
  };

  componentDidMount = () => {
    console.log("fasdf");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.andimationTagTop,
                // opacity: this.animationOpacity
                backgroundColor: this.animationBackgroundColor
              }}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                marginTop: 20
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  backgroundColor: "white",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Varun?
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../assets/home.jpg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../assets/home-2.jpg")}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require("../assets/home-3.jpeg")}
                    name="Resturant"
                  />
                </ScrollView>
              </View>
              <View
                style={{
                  marginTop: 40,
                  paddingHorizontal: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700"
                  }}
                >
                  Introducing Airbnb Plus
                </Text>
                <Text
                  style={{
                    fontWeight: "100",
                    marginTop: 10
                  }}
                >
                  A new selection of homes verified for qulity & comfort
                </Text>
                <View
                  style={{
                    width: width - 40,
                    height: 200,
                    marginTop: 20
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#ddd"
                    }}
                    source={require("../assets/home.jpg")}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 40
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Home around the world
              </Text>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  imageUri={require("../assets/home-3.jpeg")}
                  width={width}
                />
                <Home
                  imageUri={require("../assets/home-3.jpeg")}
                  width={width}
                />
                <Home
                  imageUri={require("../assets/home-3.jpeg")}
                  width={width}
                />
                <Home
                  imageUri={require("../assets/home-3.jpeg")}
                  width={width}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
