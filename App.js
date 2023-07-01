import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nama: 'Adi',
          kelas: 10,
        },
        {
          nama: 'Budi',
          kelas: 10,
        },
        {
          nama: 'Ani',
          kelas: 10,
        },
        {
          nama: 'Andi',
          kelas: 10,
        },
      ],
      seleksi: [],
      seleksiItem: (
        <View>
          <Text>Hello</Text>
        </View>
      ),
      seleksiItem2: (
        <View>
          <Text>Hello2</Text>
        </View>
      ),
    };
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({seleksi: item}, () =>
                  console.log(this.state.seleksi),
                );
              }}>
              <Text
                style={{color: this.state.seleksi == item ? 'red' : 'blue'}}>
                {item.nama}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.nama}
        />
        {this.state.seleksi.nama == 'Adi'
          ? this.state.seleksiItem
          : this.state.seleksiItem2}
      </View>
    );
  }
}

export default App;
