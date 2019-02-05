import React from 'react'
import { View, StyleSheet } from 'react-native'
function moveToBottom(component) {
  return (
    <View style={styles.container}>
      <View style = {{backgroundColor:'white',padding: 12,color: 'black'}}>
        {component}
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
  }
})
export default moveToBottom