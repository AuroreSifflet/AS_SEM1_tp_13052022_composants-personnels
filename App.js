import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import CustomImageTextDesc from "./components/CustomImageTextDesc";
//importation du fichier json
import data from "./tp.json";
//const data = require("./tp.json");

console.log(data);

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {data.map((val) => (
          <View style={styles.viewBloc}>
            {/* <View style={styles.view1}>
              <Image source={{ uri: val.img }} style={styles.image} />
            </View> */}
            <CustomImageTextDesc
              urlImg={{ uri: val.img }}
              titletImg={val.title}
              descImg={val.desc}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

//----------------------------------------------------------------------------------
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
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
  container: {
    flex: 1,
    flexDirection: "column",
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
