import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Popüler' fetchURL={requests.requestPopular} />
        <Row rowID='2' title='En Çok Beğenilenler' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='Yakında' fetchURL={requests.requestUpcoming} />
        <Row rowID='4' title='Suç' fetchURL={requests.requestCrime} />
        <Row rowID='5' title='Savaş' fetchURL={requests.requestWar} />
        <Row rowID='6' title='Aile' fetchURL={requests.requestFamily} />
        <Row rowID='7' title='Keşfet' fetchURL={requests.requestDiscover} />
    </>
  )
}

export default Home