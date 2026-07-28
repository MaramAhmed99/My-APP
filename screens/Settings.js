import { useState } from "react";

import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View
} from "react-native";

export default function Settings() {

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Settings
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Account
        </Text>

        <Text style={styles.cardText}>
          Manage your application preferences.
        </Text>

      </View>

      <View style={styles.row}>

        <Text style={styles.rowText}>
          Notifications
        </Text>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />

      </View>

      <View style={styles.row}>

        <Text style={styles.rowText}>
          Dark Mode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Language
        </Text>

        <Text style={styles.cardText}>
          English
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          About App
        </Text>

        <Text style={styles.cardText}>
          Task Manager App
          {"\n"}
          Version 1.0.0
          {"\n"}
          Organize your daily tasks easily.
        </Text>

      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    elevation: 3
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6
  },

  cardText: {
    fontSize: 16,
    color: "#555"
  },

  row: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3
  },

  rowText: {
    fontSize: 18
  }

});