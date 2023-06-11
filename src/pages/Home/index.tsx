import { 
  View,
  StyleSheet,
  Text, 
  TouchableOpacity,
  FlatList, 
  Dimensions
} from "react-native";

import { FeedItem } from "../../components/FeedItem";
import { useState, useRef } from "react";

const { height: heightScreen} = Dimensions.get("screen")

export function Home(){
  let feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN',
     },
    {
      id: '2', 
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@henriquesilva',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador',
     },
    {
      id: '3', 
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@sujeitoprogramador',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
     }
  ]

  const [showItem, setShowItem] = useState(feedItems[0]);
  const onViewRef = useRef(({ viewableItems }: any) => {
    if(viewableItems && viewableItems.length > 0){
      setShowItem(feedItems[viewableItems[0].index])
    }
  });

  return(
    <View style={styles.container}>
      
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#FFF" }]}>Pra você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={ ({item}) => <FeedItem data={item} currentVisibleItem={showItem}/> }
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000"
  },

  labels:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    marginTop: 5,
    zIndex: 99
  },

  labelText:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2
  },

  indicator: {
    backgroundColor: "#FFF",
    width: 32,
    height: 2,
    alignSelf: "center"
  }
})