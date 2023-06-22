
import {  Text, View } from 'react-native';

interface Props{

    Text:string;
}
export default function TextComponent (props:Props){

return(
    <View>
    <Text style={{ fontSize: 20, fontWeight: '400' }}>{this.porps.Text}</Text>
    <Text style={{ fontSize: 20, fontWeight: '300', opacity: 0.6 }}>{this.props.Text}</Text>
    
</View>

) 

}