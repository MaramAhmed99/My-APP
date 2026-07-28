import { useState } from "react";

import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

export default function Profile() {

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("Maram Ahmed");
  const [email, setEmail] = useState("maram@gmail.com");
  const [phone, setPhone] = useState("0599123456");
  const [university, setUniversity] = useState("Palestine University");
  const [major, setMajor] = useState("Software Engineering");

  function handleButton() {
    setEditing(!editing);
  }

  function Field(label, value, setValue) {
    return (
      <View style={styles.fieldContainer}>

        <Text style={styles.label}>
          {label}
        </Text>

        {
          editing ?

            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
            />

            :

            <View style={styles.valueBox}>

              <Text style={styles.valueText}>
                {value}
              </Text>

            </View>

        }

      </View>
    );
  }

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 30 }}
    >

      <View style={styles.profileCard}>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }}
          style={styles.image}
        />

        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

      </View>


      <View style={styles.infoCard}>

        {Field("Full Name", name, setName)}

        {Field("Email", email, setEmail)}

        {Field("Phone", phone, setPhone)}

        {Field("University", university, setUniversity)}

        {Field("Major", major, setMajor)}


        <Pressable
          style={styles.button}
          onPress={handleButton}
        >

          <Text style={styles.buttonText}>

            {editing ? "Save" : "Edit Profile"}

          </Text>

        </Pressable>

      </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#f4f6f8"

  },

  profileCard: {

    backgroundColor: "#4CAF50",

    alignItems: "center",

    paddingVertical: 30,

    borderBottomLeftRadius: 30,

    borderBottomRightRadius: 30,

    marginBottom: 20

  },

  image: {

    width: 110,

    height: 110,

    borderRadius: 55,

    borderWidth: 3,

    borderColor: "#fff",

    marginBottom: 15

  },

  name: {

    fontSize: 24,

    fontWeight: "bold",

    color: "white"

  },

  email: {

    fontSize: 16,

    color: "white",

    marginTop: 5

  },

  infoCard: {

    marginHorizontal: 20,

    backgroundColor: "white",

    borderRadius: 15,

    padding: 20,

    elevation: 4

  },

  fieldContainer: {

    marginBottom: 18

  },

  label: {

    fontSize: 15,

    fontWeight: "bold",

    color: "#555",

    marginBottom: 6

  },

  valueBox: {

    borderWidth: 1,

    borderColor: "#ddd",

    borderRadius: 10,

    padding: 14,

    backgroundColor: "#f8f8f8"

  },

  valueText: {

    fontSize: 16,

    color: "#333"

  },

  input: {

    borderWidth: 1,

    borderColor: "#4CAF50",

    borderRadius: 10,

    padding: 12,

    fontSize: 16,

    backgroundColor: "#fff"

  },

  button: {

    backgroundColor: "#4CAF50",

    padding: 15,

    borderRadius: 10,

    marginTop: 15

  },

  buttonText: {

    color: "white",

    textAlign: "center",

    fontSize: 18,

    fontWeight: "bold"

  }

});