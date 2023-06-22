import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import Entity from '../entities/entity';
import ImageComponent from './image.component';
import TextComponent from './TextComponent';
export default function HomePage() {

    const [bandeira, SetBandeiras] = useState<Entity[]>([]);

    useEffect(() => {
        var requestOptions = {
           method: 'GET',
  
        };
        var teamList: Entity[] = [];
  
        fetch('https://restcountries.com/v3.1/all', requestOptions)
           .then(response => response.json())
           .then(result => {
              result.map(item => {
                 teamList.push({
                     id: item.name.common,
                     flagUrl: item.flags.svg,
                     name: item.name.common,
                     ptName: item.translations.por.common,
                     population: item.population,
                     Capital: item.Capital,
                     Region: item.region,
                 })
              })
           })
  
           .catch(error => console.log('error', error));
        SetBandeiras(teamList);
  
     }, [])
  
  

    return (  
      
        <ScrollView>   
        <Text style={{padding:25,paddingHorizontal:118,fontWeight:'700',fontSize:23,flexDirection:'row'}}>Lista de paises</Text>
        <FlatList
        data={(bandeira)}
     renderItem={(bandeira) => 
        
         <View  style={styles.card}>
           <View>
           <ImageComponent image={this.props.image}/>
           </View>
           <View>
          <TextComponent Text={this.props.Text}/>
          <Text>{bandeira.item.population}</Text>

           </View>
           </View>
     }
       keyExtractor={(item) => item.name }
   />
  </ScrollView>
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
  
        
    






















