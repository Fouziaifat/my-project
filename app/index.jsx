import { useState } from "react";
import {  FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [images, setimages] = useState([
    require('../assets/images/img1.jpg'),
    require('../assets/images/img2.jpg'),
    require('../assets/images/img3.jpg'),
    require('../assets/images/img4.jpg'),
    require('../assets/images/img5.jpg'),
    require('../assets/images/img6.jpg'),
    require('../assets/images/img7.jpg'),
  ]);
  return (
    
    <View style={styles.container}>
           <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.backgroundImage} >
            
            
      <View style={styles.box}>
        <View style ={styles.boxs}>
          <Text style={styles.num}>34.2k</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style ={styles.boxs}>
          <Text style={styles.num}>851</Text>
          <Text style={styles.text}>Photos</Text>
        </View>
        <View style ={styles.boxs}>
          <Text style={styles.num}>947</Text>
          <Text style={styles.text}>Likes</Text>
        </View>
      </View>

        <View style={styles.overlay}>
            <View style={styles.inside}>
                <Text style={styles.text1}>Evie Sharon</Text>
                <Text style={styles.text2}>Norway</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>FOLLOW</Text>
                </TouchableOpacity>
                <Text style={styles.text3}>Photos</Text>
                  <FlatList
                  horizontal={true} // Enables horizontal scrolling
                  showsHorizontalScrollIndicator={false} // Hides the scroll indicator
                  data={images}
                  renderItem={ ({ item, index }) => (
                    <Image source={item} /* Use item to set the image source */
                    key={index} /* Important to set a key for list items,
                    but it's wrong to use indexes as keys, see below */
                  style={{
       width:90,
       height:80,
       margin:8,
       borderRadius:10,
     }}
    />
     )}
/>


              


                
                <Text style={styles.text4}>About</Text>
                <Text style={styles.text5}>Lorem ipsum dolor sit amet, consectetur ipsum adipisicing elit the cupiditate molestias iure maxime impedit assum</Text>
            </View>
        </View>

            </ImageBackground>      
     </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems:'center',
    },
    boxs:{
        marginTop:60,
        width:100,
        height:100, 
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        padding: 20,
    },
    num: {
        zIndex: 1,
        fontSize: 30,
        fontWeight:"800",
        color:'white',
    },
    text:{
        zIndex: 1,
        fontSize: 15,
        color:'gray',
    },
    overlay: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40,
        height: '40%',
        width: '100%',
        position: 'absolute',
        bottom: 0, 
        justifyContent: 'flex-end',
      },
      inside: {
        position: 'absolute',
        top:0,
        justifyContent: 'flex-start',
        zIndex: 1,
        padding:30,
        width:'100%',
      },
      text1: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
      },
      text2: {
        color: 'gray',
        fontSize: 16,
      },
      button: {
        position: 'absolute',
        right:40,
        top: 35,
        borderWidth: 2,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
      },
      buttonText: {
        color: 'black',
        letterSpacing: 3,
        fontSize: 14,
        fontWeight: '900',
      },
      text3:{
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop:20,
      },
      text4: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
       
      },
      text5: {
        lineHeight: 25,
        color: 'gray',
        fontSize: 16,
      },
  });
