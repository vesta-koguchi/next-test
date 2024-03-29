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
      </main>
      <footer>
        フッタ
      </footer>
    </>
  );
}
