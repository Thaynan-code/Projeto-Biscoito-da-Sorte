/*import { StatusBar} from "expo-status-bar";*/
import React, {
  useState,
} from "react"; /* Importa a função usestate do pacote react */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native"; /* Importar componentes */

export default function App() {
  const [img, setImg] = useState(
    require("./src/biscoito.png")
  ); /* usa hook useState */
  const [textoFrase, setTextoFrase] =
    useState(""); /*textoFrase: estado   settextoFrase:função */

  let frases = [
    /*array */ "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(
      Math.random() * frases.length
    ); /*escolhe frase aleaotria com base no tamanho do array */

    setTextoFrase('"' + frases[numeroAleatorio] + '"');
    setImg(require("./src/biscoitoAberto.png"));
  }

  function reiniciarBiscoito() {
    setImg(require("./src/biscoito.png"));
    setTextoFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <View style={styles.estiloArea}>
          <Text style={styles.estiloTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.estiloArea}>
          <Text style={[styles.estiloTexto, { color: "#121212" }]}>
            Outro Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  estiloArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  estiloTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
