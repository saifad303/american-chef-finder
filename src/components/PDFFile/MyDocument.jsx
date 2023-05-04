import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.body}>
      <Image style={styles.image} src="/img/reactNode.jpg" />
      <Text style={styles.subtitle}>
        Important QnA related to ReactJS and NodeJS
      </Text>
      <Text style={styles.text}>
        The webpage created is dedicated to providing answers to commonly asked
        questions related to React, a popular JavaScript library for building
        user interfaces. The page appears to be well-organized and
        user-friendly, with questions grouped into relevant categories to help
        visitors quickly find the information they need. Each question is
        answered concisely and informatively, providing valuable insights and
        guidance to those who are learning or working with React. The page
        serves as a helpful resource for individuals who want to deepen their
        understanding of React and improve their skills in front-end
        development. By providing clear and accurate answers to common
        questions, the page contributes to the broader React community and helps
        individuals to overcome challenges and build better user interfaces.
        Overall, the page is an excellent resource for anyone who is working
        with React or interested in learning more about this powerful library.
        The content is high-quality and accessible, and the page is designed to
        be user-friendly and informative
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
