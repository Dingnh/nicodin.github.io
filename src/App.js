import React from 'react';
import Links from './components/links/links.js'
import moment from 'moment';
import Image from './assets/images/image.svg'
import './App.css';

function getDay() {
  let days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  return days[moment().day()]
}

function getDate() {

  let date = moment().date();
  let ones = date;
  let tens = 0;
  let day;
  while (ones >= 10) {
    ones -= 10
    tens += 1
  }

  let number = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]

  if (tens === 1) {
    day = "十";
    if (ones !== 0) {
      day = "十" + number[ones - 1]
    }
  }
  else if (tens >= 1) {
    day = number[tens - 1] + "十";
    if (ones !== 0) {
      day = number[tens - 1] + "十" + number[ones - 1]
    }
  }
  else {
    day = number[ones - 1]
  }

  return day + "日";
}

function getMonth() {
  let months = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
  return months[moment().month()] + "月"
}

function getGreetings() {
  if (moment().format('HH') >= 18) {
    return "こんばんは";
  }
  else {
    return "こんばんは"
  }
}

function App() {

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#e9e9e9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    day: {
      position: "absolute",
      top: 30,
      left: 40,
      fontSize: 24
    },
    date: {
      fontSize: 24
    },
    month: {
      fontSize: 24,
      marginRight: 20
    },
    timeContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 200,
      marginTop: -150
    },
    time: {
      fontSize: 32,
      letterSpacing: 6,
    },
    greetings: {
      fontSize: 32,
      letterSpacing: 6,
    },
  }

  return (
    <div style={styles.container}>
      <div className="day" >{getDay()}</div>
      <div className="date">
        <div style={styles.month}>{getMonth()}</div>
        <div style={styles.date}>{getDate()}</div>
      </div>
      <div style={styles.timeContainer}>
        <div style={styles.time}>{moment().format('HH:mm')}</div>
        <div style={styles.greetings}>{getGreetings()}</div>
      </div>
      <div className="contentContainer">
        <img className="image" src={Image} alt="logo" />
        <Links
          linktitle={"メジャー"}
          links={[
            {
              link: "インスタ",
              linkdir: "https://www.instagram.com/"
            },
            {
              link: "ブーック",
              linkdir: "https://www.facebook.com/"
            },
            {
              link: "ユーチューブ",
              linkdir: "https://www.youtube.com/"
            },
            {
              link: "レジット",
              linkdir: "https://www.reddit.com/"
            }
          ]}
        />
        <Links
          linktitle={"デヴー"}
          links={[
            {
              link: "ジット",
              linkdir: "https://www.github.com/"
            },
            {
              link: "スレロ",
              linkdir: "https://www.trello.com/"
            }
          ]}
        />
        <Links
          linktitle={"アカデミー"}
          links={[
            {
              link: "メール",
              linkdir: "http://www.imail.sunway.edu.my/"
            },
            {
              link: "アイゾン",
              linkdir: "https://izone.sunway.edu.my/"
            },
            {
              link: "イーランー",
              linkdir: "https://elearn.sunway.edu.my/"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;