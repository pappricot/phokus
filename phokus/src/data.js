import { v4 as uuidv4 } from "uuid";
import GolosVody from "../src/assets/songs/Голос води.m4a"
import Time from "../src/assets/songs/ONUKA-TIME.mp3"
import Princess from "../src/assets/songs/ES_The Princess - Victor Lundberg.mp3"
import Olympos from "../src/assets/songs/ES_Olympos - Ooyy.mp3"
import QuantumSonata from "../src/assets/songs/FormantX - Quantum Sonata.mp3"
import Byrr from "../src/assets/songs/ES_Byrr - Hampus Naeselius.mp3"

function chillHop() {
  return [
    {
      name: "Sound of Water",
      cover:
        "https://lh3.googleusercontent.com/Y90z2C-WuiiFO4s1dTJ26Ntq7d5jW7jFtO7JF1wF50Wq6RFUaAAPDngYgGhvWWLotWp9DoxiG9xt9SgtDw=w544-h544-l90-rj",
      artist: "Maneken, Onuka, Dakha Brakha",
      audio: GolosVody,
      color: ["#9DC7CD", "#689B8A"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Time",
      cover:
        "https://lh3.googleusercontent.com/WlmhBQDGLN1WWAag0Fe6hrsSJjD0JJeK3IKsjqt5Iax4j6Y1ZZWbkjz3bf2ciMm6tQ6kZfOK1Ts7NFy5=w544-h544-l90-rj",
      artist: "Onuka",
      audio: Time,
      color: ["#BBBCC0", "#E20712"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Princess",
      cover:
        "https://lh3.googleusercontent.com/KC4NO7u2fWy8z_9JoayRr-XNMfFmUAyVhu9qOekPq1q3HAqGWfZ9LCWmulJYFumcHjd7KdU5XC1IctSAWQ=w544-h544-l90-rj",
      artist: "Victor Lundberg",
      audio: Princess,
      color: ["#56C5D8", "#2A4042"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Olympos",
      cover:
        "https://lh3.googleusercontent.com/_oGythnvXmRgZ0BJemWzh7JIOSJqkGaYKLp4KJLVjKEYQeH7YRXx_aLvq4JMjOtwrdcTiJHITrrpEc0=w544-h544-l90-rj",
      artist: "Ooyy",
      audio: Olympos,
      color: ["#D2D2D2", "#141414"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Quantum Sonata",
      cover:
        "https://lh3.googleusercontent.com/m4twBf6OOqTrFyI11eZSeBkEhK_dhBZa8PZ5IaP5kvcNRTwCrO4D3zJgI0j5cjCT9VVDGMLLfyjoUTD53w=w544-h544-l90-rj",
      artist: "FormantX",
      audio: QuantumSonata,
      color: ["#EA656F", "#622736"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Byrr",
      cover:
        "https://lh3.googleusercontent.com/xXekOf6DMXlEhCnMXnJXXuIzjNAVGdWCgwL2OZawlUFZW_3dR2lzKMFWXD2_-9ufXVSgIrfGNspg_Mwy=w544-h544-l90-rj",
      artist: "Hampus Naeselius",
      audio: Byrr,
      color: ["#656B49", "#003E44"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
