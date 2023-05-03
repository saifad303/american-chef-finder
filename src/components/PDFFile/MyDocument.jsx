import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          The webpage created is dedicated to providing answers to commonly
          asked questions related to React, a popular JavaScript library for
          building user interfaces. The page appears to be well-organized and
          user-friendly, with questions grouped into relevant categories to help
          visitors quickly find the information they need. Each question is
          answered concisely and informatively, providing valuable insights and
          guidance to those who are learning or working with React. The page
          serves as a helpful resource for individuals who want to deepen their
          understanding of React and improve their skills in front-end
          development. By providing clear and accurate answers to common
          questions, the page contributes to the broader React community and
          helps individuals to overcome challenges and build better user
          interfaces. Overall, the page is an excellent resource for anyone who
          is working with React or interested in learning more about this
          powerful library. The content is high-quality and accessible, and the
          page is designed to be user-friendly and informative.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
