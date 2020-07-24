import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const rows = [
  { id: 0, text: 'TOP  50  WEBSITE  VISIT IN NEPAL' },
  { id: 1, text: 'https://www.youtube.com' },
  { id: 2, text: 'https://www.Onlinekhabar.com' },
  { id: 3, text: 'https://www.facebook.com' },
  { id: 4, text: 'https://www.Ratopati.com' },
  {id:5,    text:'https://www.janaboli.com'},
   { id: 6, text: 'https://www.khabarhub.com' },
    { id: 7, text: 'https://www.Bongscams.com' },
     { id: 8, text: 'https://www.News24nepal.tv' },
      { id: 9, text: 'https://www.Nagariknetwork.com' },
        { id: 10, text: 'https://www.Sanckarkendra.com' },
         { id: 11, text: 'https://www.ReportersNepl.com' },
          { id: 12, text: 'https://www.Dcnepal.com' },
           { id: 13, text: 'https://www.Wikipedia.com' },
            { id: 14, text: 'https://www.Dainikonline.com' },
             { id: 15, text: 'https://www.Ekantipur.com' },
              { id: 16, text: 'https://www.Zoom.us' },
               { id: 17, text: 'https://www.Nepallive.com' },
                { id: 18, text: 'https://www.Setopati.com' },
                 { id: 19, text: 'https://www.Thahakhabar.com' },
                  { id: 20, text: 'https://www.cdsc.com.np' },
                   { id: 21, text: 'https://www.NEWSofnepal.com' },
                    { id: 22, text: 'https://www.Nepalipaisa.com' },
                     { id: 23, text: 'https://www.lokaantar.com' },
                      { id: 24, text: 'https://www.google.com.np' },
                       { id: 25, text: 'https://www.instagram.com' },
                        { id: 26, text: 'https://www.imagekhabar.com' },
                         { id: 27, text: 'https://www.Nayapage.com' },
                          { id: 28, text: 'https://www.stackoverflow.com' },
                           { id: 29, text: 'https://www.Hamropatro.com' },
                            { id: 30, text: 'https://www.Netflix.com' },
                             { id: 31, text: 'https://www.Hamrokhelkud.com' },
                              { id: 32, text: 'https://www.TWitter.com' },
                               { id: 33, text: 'https://www.Rssnepal.org.np' },
                                { id: 34, text: 'https://www.Merojob.com' },
                                 { id: 35, text: 'https://www.Microsoft.com' },
                                  { id: 36, text: 'https://www.businessansar.com' },
                                   { id: 37, text: 'https://www.Karnalikhabar.com' },
                                    { id: 38, text: 'https://www.osnepal.com' },
                                     { id: 39, text: 'https://www.Arthasarokar.com' },
                                      { id: 40, text: 'https://www.koshionline.com' },
                                       { id: 41, text: 'https://www.Etajakhabar.com' },
                                        { id: 42, text: 'https://www.Baahrakhari.com' },
                                         { id: 43, text: 'https://www.Purblinesa.com' },
                                          { id: 44, text: 'https://www.Medinap.com' },
                                           { id: 45, text: 'https://www.thahakhabar.com' },
                                            { id: 46, text: 'https://www.Nepalipatre.com' },
                                             { id: 47, text: 'https://www.Nepalipaisa.com' },
                                              { id: 48, text: 'https://www.Aajakokhabar.com'}
                                              ,
                                               { id: 49, text: 'https://www.Nepalstock.com' },
                                                { id: 50, text: 'https://www.Nagariknews.com' },

]

const extractKey = ({ id }) => id

export default class App extends Component {

  renderItem = ({ item }) => {
    return (
      
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (
        
      <FlatList
        style={styles.container}
        data={rows}
          renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})