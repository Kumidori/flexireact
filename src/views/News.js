import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import $ from "jquery";




// RSS FEED PER JQUERY HOLEN UND EINBAUEN

$( document ).ready(function() {

    var eintraege = [];

    $.get('https://cors-anywhere.herokuapp.com/https://felix.hs-furtwangen.de/rss/personal/beckerth.hfu/XLZrRj/olat.rss', function (data) {
        $(data).find("item").each(function () {
            console.log(this);
            var item = xml2json(this);
            var title = item['title'];
            var link = item['link'];
            var description = item['description'];
            if(description != "Mit diesem Link gelangen Sie zu FELIX."){
                var short_description = description.split("<ul class='list-unstyled'><li>");
                short_description = short_description[1].split("</ul>");
                short_description = short_description[0].split("</li><li>");
                short_description.forEach(function(element) {
                    var date_time=element.split("<span class='o_nowrap o_date'>am ");
                    var date_time=date_time[1].split("</span>");
                    var date_time=date_time[0];
                    var date= date_time.slice(0, 10);
                    var time= date_time.slice(11, 17);
                    
                    // console.log(time);
                    
                    var message=element.split(">");
                    var message=message[3].split("</a");
                    // var message=message[0].split(" von ");
                    var autor=message[1];
                    var message=message[0];
                    // console.log(message, autor);
                    eintraege.push([+date[3]+date[4]+" "+date[0]+date[1]+", "+ date[6]+date[7]+date[8]+date[9]+" "
                    
                    
                    +time[0]+time[1]+":"
                    +time[3]+time[4]+":00"
                    ,message,date,time,title]);
                });
            }
            
        });
        console.log(eintraege);
        eintraege.sort(function(a, b) {
            var dateA = new Date(a[0]), dateB = new Date(b[0]);
            console.log(dateA);
            return dateB - dateA;
        });
        console.log(eintraege);
        console.log(new Date("2018-02-03-T19:23:00Z"));
        eintraege.forEach(function(eintrag) {
            console.log(eintrag);
            var new_card = '<div class="card light-green darken-3"><i class="material-icons left white-text">chat_bubble_outline</i><div class="card-content white-text"><span class="card-title">'+eintrag[2]+' '+eintrag[3]+' '+eintrag[4]+'</span>'+eintrag[1]+'</div><div class="card-action white-text"><a class="white-text"></a><a href="'+eintrag[0]+'" class="right white-text">Link</a></div></div>';
            
            var news_content = $('.col.s12.m12.testzugriffperjquery').html();
            $('.col.s12.m12.testzugriffperjquery').html(news_content+new_card);
            // console.log(link);
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
