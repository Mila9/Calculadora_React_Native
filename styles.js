import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#101010",
      alignItems: "center",
      justifyContent: "center",
    },
    calculadora: {
      height:140, 
      width:140
    },
  
    legenda: {
      fontSize: 30,
      color: "#bf80ff",
      fontWeight: "bold",      
    },
    caixaTexto: {
      color:"#fff",
      borderColor: "#fff",
      borderRadius: 5,
      borderWidth: 2,
      width: "50%",
      fontSize: 25,
      padding: 10,
      marginBottom: 20,
    },
    textoBotao: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 40,
    },
    legendaCaixaTexto:{
      fontSize: 20,
      color: '#fff',
      marginBottom: 5,
    },

    resultado:{
      backgroundColor:"#fff",
      fontSize: 25,
      color: '#6e00db',
      borderWidth: 2,
      width: "100%",
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
      textAlign: "center",
    },

    botao:{
      borderColor: "#fff",
      borderRadius: 5,
      borderWidth: 2,
      fontSize: 25,
      padding: 10,
      width:70,
  
    },
    areaBotoes:{
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#6e00db',
      justifyContent: 'space-around',
      
    }
    
  });
  

  export default styles;