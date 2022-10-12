import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, View, 
  TouchableOpacity, Image, Keyboard } from "react-native";

import styles from "./styles";
import iconeCalculadora from "./assets/calculadora.png";

export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function soma() {
    let r =
      Number.parseFloat(valor1.replace(",", ".")) +
      Number.parseFloat(valor2.replace(",", "."));
    setResultado(r);
    Keyboard.dismiss();
  }

  function subtracao() {
    let r =
      Number.parseFloat(valor1.replace(",", ".")) -
      Number.parseFloat(valor2.replace(",", "."));
    setResultado(r);

    Keyboard.dismiss();
  }

  function multiplicacao() {
    let r =
      Number.parseFloat(valor1.replace(",", ".")) *
      Number.parseFloat(valor2.replace(",", "."));
    setResultado(r);
    Keyboard.dismiss();
  }

  function divisao() {
    let r =
      Number.parseFloat(valor1.replace(",", ".")) /
      Number.parseFloat(valor2.replace(",", "."));
    setResultado(r);
    Keyboard.dismiss();
  }

  function limpar() {
    setValor1(0);
    setValor2(0);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Image style={styles.calculadora} source={iconeCalculadora} />

      <Text style={styles.legenda}>Calculadora</Text>

      <Text style={styles.legendaCaixaTexto}>Digite o primeiro valor </Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={(texto) => setValor1(texto)}
        style={styles.caixaTexto}
        value={valor1.toString()}
      />

      <Text style={styles.legendaCaixaTexto}>Digite o segundo valor </Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(texto) => setValor2(texto)}
        style={styles.caixaTexto}
        value={valor2.toString()}
      />

      <View style={styles.areaBotoes} >
        <TouchableOpacity style={styles.botao} onPress={() => soma()}>
         <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => subtracao()}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => multiplicacao()}>
        <Text style={styles.textoBotao}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => divisao()}>
          <Text style={styles.textoBotao}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => limpar()}>
        <Text style={styles.textoBotao}>🧹</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Text style={styles.resultado}>Resultado: {resultado.toFixed(2)} </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}
