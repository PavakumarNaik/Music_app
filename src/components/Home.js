import { useState, useContext, useEffect } from "react";
import AlbumsList from "./AlbumbList";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";
import AlbumCategory from "./albumCategory";

const Data = {
  albums: {
    items: [
      {
        name: "Tumbe Te Zumba",
        id: 1,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Love Nwtiti",
        id: 2,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 3,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/MKPgrR6Abo/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Justin's Summer Playlist",
        id: 4,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 5,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe97o45Wy/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 6,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gLg609WR/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 7,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ogNWkDbmXJ/NWkLqjAXbm/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 8,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/P37OGQr93D/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
    ],
  },

  artists: {
    items: [
      {
        name: "Arijit Singh",
        id: 1,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1631509967.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1631509967.jpg",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Honey Singh",
        id: 2,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.jpg",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Jass Manak",
        id: 3,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/jBr3gybR1m/Br3gqB1ObR/size_m_1580551014.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Jubin Nautiyal",
        id: 4,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/10q3ZR1352/0q3Z6Lg135/size_m_1628742816.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/artists/10q3ZR1352/0q3Z6Lg135/size_m_1628742816.jpg",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Arman Malik",
        id: 5,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/81l3Mye3rM/81l3Mye3rM/size_m_1620197364.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "A R Rahman",
        id: 6,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/9En3pqeWXD/En3pQZ9WXD/size_m_1558423917.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "AR Deep",
        id: 7,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/9En3pqeWXD/En3praZ8bX/size_m_1568821536.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Justin Bieber",
        id: 8,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/artists/a7LWBzWzXA/7LWBLgNKzX/size_m_1631801811.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
    ],
  },
  playlist: {
    items: [
      {
        name: "Tumbe Te Zumba",
        id: 1,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Love Nwtiti",
        id: 2,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 3,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/MKPgrR6Abo/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Justin's Summer Playlist",
        id: 4,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 5,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe97o45Wy/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 6,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gLg609WR/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 7,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ogNWkDbmXJ/NWkLqjAXbm/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 8,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/P37OGQr93D/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs: [
          {
            track: "Hit my line, call me whenever you want some me",
            duration: "03.05",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          {
            track: "Even though that wasn't in the plans right",
            duration: "05.03",
            artistName: "Arjit Singh",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          {
            track: "King of this fly shit, yeah, I know",
            duration: "04.15",
            artistName: "Arman mallik",
            album: "Qayamat Se Qayamat Tak",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
    ],
  },
};

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const [Album, setAlbum] = useContext(AlbumContext);
  const [CategoryData,setCategoryData]=useState(Data.albums)
  const { albums, artists, playlist } = Data;

  useEffect(() => {
    setAlbum(albums);
  }, []);

  const setCategory = (Category) => {
    setSelectedCategory(Category);
    if(Category === "albums"){
      setCategoryData(Data.albums)
    }
    else if(Category === "artists"){
      setCategoryData(Data.artists)
    }
    else{
      setCategoryData(Data.playlist)
    }
  };


  return (
    <>
     <AlbumCategory albums={albums} artists={artists} playlist={playlist} selectedCategory={selectedCategory} setCategory={setCategory}/>
      <div className={`${selectedCategory === "albums" ? "" : "hide"}`}>
      {selectedCategory ?  CategoryData && <AlbumsList albums={CategoryData} />: null}
      </div>
    </>
  );
};
export default withRouter(Home);
