import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [remember, setRemember] = useState(true);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTxt}>A</Text>
      </View>

      <Text style={styles.title}>MyApp</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.rememberRow}>
        <TouchableOpacity onPress={() => setRemember(!remember)} style={styles.checkboxBorder}>
          {remember && <View style={styles.checkboxFill} />}
        </TouchableOpacity>
        <Text style={styles.rememberText}>Remember me</Text>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/home1')}>
        <Text style={styles.loginText}>Login In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const CHECKBOX_SIZE = 18;

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff', padding:24 },
  avatar: { backgroundColor:'#9062ec', width:70, height:70, borderRadius:35, alignItems:'center', justifyContent:'center', marginBottom:20 },
  avatarTxt: { color:'#fff', fontSize:34, fontWeight:'700' },
  title: { fontSize:28, fontWeight:'700', marginBottom:2 },
  subtitle: { fontSize:16, color:'#888', marginBottom:26 },
  inputGroup: { width:'100%', marginBottom:14 },
  label: { fontSize:14, color:'#555', marginBottom:6 },
  input: { backgroundColor:'#f2f3f7', borderRadius:8, padding:12, fontSize:16, color:'#222' },
  rememberRow: { flexDirection:'row', alignItems:'center', alignSelf:'flex-start', marginVertical:10 },
  checkboxBorder: { width:CHECKBOX_SIZE, height:CHECKBOX_SIZE, borderRadius:4, borderWidth:1.5, borderColor:'#9062ec', justifyContent:'center', alignItems:'center', marginRight:7 },
  checkboxFill: { width:CHECKBOX_SIZE-6, height:CHECKBOX_SIZE-6, borderRadius:2, backgroundColor:'#9062ec' },
  rememberText: { color:'#555', fontSize:15 },
  loginBtn: { width:'100%', backgroundColor:'#9062ec', borderRadius:8, paddingVertical:15, alignItems:'center', marginTop:16 },
  loginText: { color:'#fff', fontSize:17, fontWeight:'bold' },
  forgotPassword: { color:'#9062ec', marginTop:14, fontSize:15, textDecorationLine:'underline' },
});

export default LoginScreen;
