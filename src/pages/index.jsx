import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'
import Header from '@/component/common/Header';
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header />
      <main className={`${styles.main} ${inter.className}`}>
        トップ<br />
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


      </main>
      <footer>
        フッタ
      </footer>
    </>
  );
}
