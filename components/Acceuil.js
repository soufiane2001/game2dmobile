import * as React from 'react'; 
import { Text, View, StyleSheet, Image ,ImageBackground,Pressable} from 'react-native';
import { Audio } from 'expo-av'; 
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

export default function Acceui() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });



async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/opus.mp3')
    );


    console.log('Playing Sound');
    await sound.playAsync();
  }



    React.useEffect(() => {
  
playSound()
  


  }, []);

  return (
    <View  style={{width:'100%',height:'100%'}}>
    

<ImageBackground source={require('../assets/Diego-Maradona-1986.png')} style={{width:'100%',height:'100%',transform: [{rotate: '180deg'}, {scale: 1}]}}>
  <Text>111</Text>
</ImageBackground>
<View  style={{width:'100%',height:'100%',backgroundColor:'#141414',position:'absolute',opacity:0.40
}}>
  <Text>111</Text>
</View>


<View  style={{width:'100%',height:'100%',position:'absolute',opacity:1,display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
  <Text style={{color:'white',fontSize:55,width:'150%',textAlign:'center',fontFamily:'Poppins_900Black',
textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
 ,transform: [{rotate: '90deg'}, {scale: 1}]}}>ilyass Adventure</Text>


  <Text style={{color:'white',fontSize:20,width:'150%',textAlign:'center',
textShadowColor: 'rgba(0, 0, 0, 0.75)',marginLeft:'-10%',marginTop:'-20%',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
 ,transform: [{rotate: '90deg'}, {scale: 1}]}}>By Soufiane Boutatss</Text>




</View>

 <Pressable style={{backgroundColor:'#0E64F1',width:'30%',position:'absolute', marginLeft:'15%',borderRadius:5,top:'50%',height:'6%',
  transform: [{rotate: '90deg'}, {scale: 1}]}} 
>   
           

  
    <Text   style={{color:'white',fontSize:26 ,textAlign:'center',borderRadius:5, fontFamily:'Poppins_500Medium'}} >Play</Text>

  
  </Pressable>
     




    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
