import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const quickActions = [
  { icon: "📊", label: "Analytics", color: "#ff6b6b" },
  { icon: "💰", label: "Payments", color: "#4ecdc4" },
  { icon: "🔢", label: "Services", color: "#48dbfb" },
  { icon: "⚙️", label: "Settings", color: "#f9ca24" },
];

const activities = [
  { label: "Tasks", value: "24" },
  { label: "Hours", value: "8.5h" },
  { label: "Progress", value: "92%" },
];

const updates = [
  { title: "New Feature Released", desc: "Check out our latest mobile update", time: "2 hours ago" },
  { title: "Welcome to the Team!", desc: "5 new members joined today", time: "4 hours ago" },
];

const HomeScreen: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ paddingVertical: 16 }}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.profileWrap}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileTxt}>JD</Text>
          </View>
          <View style={styles.notifBadge}>
            <Text style={styles.notifText}>3</Text>
          </View>
        </View>
      </View>

      <View style={styles.logoutRow}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/login')}>
          <Text style={styles.logoutText}>← Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>Search anything...</Text>
      </View>
      
      <Text style={styles.secTitle}>Quick Actions</Text>
      <View style={styles.qaGrid}>
        {quickActions.map(({icon, label, color}, idx) => (
          <TouchableOpacity key={idx} style={[styles.qaBtn, { backgroundColor: color + "22" }]}>
            <Text style={{ fontSize:32 }}>{icon}</Text>
            <Text style={styles.qaLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[styles.secTitle, { marginTop: 30 }]}>Recent Activity</Text>
      <View style={styles.card}>
        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
          <Text style={styles.summaryTitle}>Daily Summary</Text>
          <Text style={{ color:'#888' }}>Today</Text>
        </View>
        <View style={styles.statsRow}>
          {activities.map((a, idx) => (
            <View key={idx} style={styles.statItem}>
              <Text style={styles.statVal}>{a.value}</Text>
              <Text style={styles.statLabel}>{a.label}</Text>
            </View>
          ))}
        </View>
        <View style={styles.barBg}>
          <View style={styles.barFill} />
        </View>
      </View>

      <Text style={[styles.secTitle, { marginTop: 30 }]}>Latest Updates</Text>
      {updates.map((u, i) => (
        <View style={styles.updateCard} key={i}>
          <Text style={styles.updateTitle}>{u.title}</Text>
          <Text style={styles.updateDesc}>{u.desc}</Text>
          <Text style={styles.updateTime}>{u.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginBottom: 12 },
  greeting: { fontSize:15, color:'#999', marginBottom:1 },
  name: { fontSize:21, fontWeight:'bold', color:'#222' },
  profileWrap: { position:'relative' },
  profileCircle: { backgroundColor:'#9062ec', width:44, height:44, borderRadius:22, alignItems:'center', justifyContent:'center' },
  profileTxt: { color:'#fff', fontWeight:'bold', fontSize:17 },
  notifBadge: { position:'absolute', top:-4, right:-5, backgroundColor:'#ff6b6b', borderRadius:8, height:18, minWidth:18, alignItems:'center', justifyContent:'center', paddingHorizontal:2 },
  notifText: { color:'#fff', fontWeight:'bold', fontSize:12 },
  logoutRow: { flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 20, marginBottom: 16 },
  logoutButton: { backgroundColor: '#ff6b6b', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  logoutText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  searchBox: { backgroundColor:'#f7f7fa', borderRadius:10, flexDirection:'row', alignItems:'center', marginHorizontal:18, padding:12, marginBottom:20 },
  searchIcon: { fontSize:20, marginRight:6, color:'#bdbdbd' },
  searchText: { fontSize:16, color:'#aaa' },
  secTitle: { fontWeight:'bold', fontSize:18, marginLeft:10, marginBottom:10 },
  qaGrid: { flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', paddingHorizontal:10 },
  qaBtn: { width:'45%', aspectRatio:1, marginBottom:16, borderRadius:15, alignItems:'center', justifyContent:'center' },
  qaLabel: { fontSize:16, marginTop:13, color:'#333', fontWeight:'500' },
  card: { backgroundColor:'#f9f9fd', borderRadius:14, padding:17, marginBottom:18, marginHorizontal:10 },
  summaryTitle: { fontWeight:'bold', fontSize:16 },
  statsRow: { flexDirection:'row', justifyContent:'space-around', marginVertical:12 },
  statItem: { alignItems:'center', flex:1 },
  statVal: { fontWeight:'bold', fontSize:18, color:'#9062ec' },
  statLabel: { fontSize:13, color:'#555', marginTop:2 },
  barBg: { width:'100%', height:6, backgroundColor:'#e4e0ef', borderRadius:3, marginTop:8 },
  barFill: { width:'92%', height:6, backgroundColor:'#9169F2', borderRadius:3 },
  updateCard: { backgroundColor:'#f4f4fa', borderRadius:14, padding:16, marginBottom:13, marginHorizontal:10 },
  updateTitle: { fontWeight:'bold', fontSize:16, marginBottom:2 },
  updateDesc: { color:'#444', marginBottom:3 },
  updateTime: { color:'#aaa', fontSize:13 },
});

export default HomeScreen;
