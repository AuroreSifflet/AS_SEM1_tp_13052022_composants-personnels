import { StyleSheet, View, Text, Image } from "react-native";

const CustomImageTextDesc = (props) => {
  const { urlImg, titletImg, descImg } = props;

  return (
    <View style={styles.viewBloc}>
      <View style={styles.view1}>
        <Image source={urlImg} style={styles.image} />
      </View>

      <View style={styles.view2}>
        <Text style={styles.view2Titre}>{titletImg}</Text>
        <Text style={styles.view2Description}>{descImg}</Text>
      </View>
    </View>
  );
};
// mes styles container
const styles = StyleSheet.create({
  view2Titre: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 25,
    paddingHorizontal: 20,
  },
  viewBloc: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 50,
  },
  view2Description: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  view1: {
    flex: 1,
  },
  view2: {
    flex: 2,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
});

export default CustomImageTextDesc;
