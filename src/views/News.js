import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import $ from "jquery";




// RSS FEED PER JQUERY HOLEN UND EINBAUEN

$( document ).ready(function() {
    $.get('https://cors-anywhere.herokuapp.com/https://felix.hs-furtwangen.de/rss/personal/beckerth.hfu/XLZrRj/olat.rss', function (data) {
        $(data).find("item").each(function () {
            console.log(this);
            var item = xml2json(this);
            var title = item['title'];
            var link = item['link'];
            var description = item['description'];
            

            var new_card = '<div class="card light-green darken-3"><i class="material-icons left white-text">chat_bubble_outline</i><div class="card-content white-text"><span class="card-title">'+title+'</span>'+description+'</div><div class="card-action white-text"><a class="white-text"></a><a href="'+link+'" class="right white-text">Link</a></div></div>';
            
            var news_content = $('.col.s12.m12.testzugriffperjquery').html();
            $('.col.s12.m12.testzugriffperjquery').html(news_content+new_card);
            console.log(link);
        });
    });
});



// Funktion ändert Rss-xml zu json

function xml2json(xml) {
    try {
      var obj = {};
      if (xml.children.length > 0) {
        for (var i = 0; i < xml.children.length; i++) {
          var item = xml.children.item(i);
          var nodeName = item.nodeName;
  
          if (typeof (obj[nodeName]) == "undefined") {
            obj[nodeName] = xml2json(item);
          } else {
            if (typeof (obj[nodeName].push) == "undefined") {
              var old = obj[nodeName];
  
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xml2json(item));
          }
        }
      } else {
        obj = xml.textContent;
      }
      return obj;
    } catch (e) {
        console.log(e.message);
    }
  }






export default class News extends Component {


    render(){
        return(
            <div class="row center">
                <Topbar/>
                <Navbar/>
                <div class="col s12 m12 testzugriffperjquery">
        </div>

            </div>
        );
    }
}
