import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const [conteudoFeed, setConteudoFeed] = useState("feed");
  const [novaPostagem, setNovaPostagem] = useState("");
  const [postagens, setPostagens] = useState([
    { icone: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj' },
    { icone: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador' },
    { icone: 'cloud-off', texto: 'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife' },
    // ... outras postagens
  ]);

  function mostrarFeed() {
    setConteudoFeed("feed");
  }

  function mostrarPerfil() {
    setConteudoFeed("perfil");
  }

  function mostrarPost() {
    setConteudoFeed("post");
  }

  function adicionarPostagem() {
    if (novaPostagem) {
      // Aqui você pode definir o ícone que desejar para a nova postagem
      const novaPost = { icone: 'nome-do-icone', texto: novaPostagem };
      setPostagens([novaPost, ...postagens]);
      setNovaPostagem('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome name="home" size={45} color="#848484" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPerfil}>
          <FontAwesome name="user" size={45} color="#848484" />
        </TouchableOpacity>
        <TouchableOpacity onPress={mostrarPost}>
          <FontAwesome name="cubes" size={45} color="#848484" />
        </TouchableOpacity>
      </View>
      <View style={styles.feed}>
        <ScrollView>
          {conteudoFeed === "feed" && <Feed postagens={postagens} />}
          {conteudoFeed === "perfil" && <Perfil />}
          {conteudoFeed === "post" && (
            <View style={styles.postContainer}>
              <TextInput
                style={styles.input}
                placeholder="Nova postagem"
                value={novaPostagem}
                onChangeText={(text) => setNovaPostagem(text)}
              />
              <TouchableOpacity style={styles.publicarButton} onPress={adicionarPostagem}>
                <Text style={styles.publicarButtonText}>Publicar</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#000000',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  feed: {
    backgroundColor: '#2F4F4F',
    flex: 1,
    width: '100%',
  },
  footer: {
    backgroundColor: '#000000',
    height: 50,
    width: '100%',
  },
  postContainer: {
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  publicarButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  publicarButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

function Feed({ postagens }) {
  return (
    <View>
      {postagens.map((post, index) => (
        <Postagem key={index} icone={post.icone} texto={post.texto} />
      ))}
    </View>
  );
}

function Postagem({ icone, texto }) {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      
      <FontAwesome name={icone} size={45} color="#848484" />
      <Text>{texto}</Text>
    </View>
  );
}

function Perfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const salvarInformacoes = () => {
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <View style={{ alignItems: 'center', padding: 40 }}>
      <Image source={require('./create profile.png')} style={{ width: 400, height: 50 }} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />
      <TouchableOpacity style={styles.publicarButton} onPress={salvarInformacoes}>
        <Text style={styles.publicarButtonText}>Salvar Informações</Text>
      </TouchableOpacity>
    </View>
  );
}
