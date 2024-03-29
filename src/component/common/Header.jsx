import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header>
        ヘッダ
        <nav>
            <ul>
                <li><Link href="/">トップページ</Link></li>
                <li><Link href="/portfolio">投資実績</Link></li>
                <li><Link href="/corporate">会社概要</Link></li>
                <li><Link href="/members">メンバー</Link></li>
                <li><Link href="/contact">お問い合わせ</Link></li>
            </ul>
        </nav>
      </header>
    </>
  );
}
