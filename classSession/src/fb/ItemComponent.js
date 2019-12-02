import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
 } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
  

render() {
    return (
      <View style={styles.itemsList}>
        <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => (
                <View>
                  <ScrollView horizontal={true}>
                    <TouchableWithoutFeedback>
                      <View style={{ paddingTop: 10 }}>
                        <Text
                          style={{ color: "#4B0082" }}
                          onPress={() => this.deleteItem(item)}
                        >
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                    {/* <TouchableWithoutFeedback
                      onPress={() =>
                        this.setState({
                          selecteditem: item,
                          itemname: item.name
                        })
                      }
                    >
                      <View>
                        <Text style={styles.item}>{item.name} </Text>
                      </View>
                    </TouchableWithoutFeedback> */}
                  </ScrollView>
                </View>
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})