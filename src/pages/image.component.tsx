import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

interface Props{

    image:string;
}
export default function ImageComponent (props:Props){

return(
    <Image style={styles.flag} source={{ uri:this.props.image}} />
)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card :{
        width:"90%",
        aspectRatio:2.9,
        backgroundColor: '#1919',
        
        shadowColor:'#000',
        borderRadius: 15,
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginVertical:15,
        marginHorizontal:25
     
    

    },
    flag:{
   width:100,
   height:90,
   borderRadius:5,
   marginHorizontal:15,
   marginVertical:10
    }
 });
  
        
    






















