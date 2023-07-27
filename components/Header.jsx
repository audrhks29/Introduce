'use client'
import styles from './header.module.css'
import Link from "next/link";
import { Menu } from "./Menu";
import { Sns } from "./Sns";

export const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className="inner">
                <h1><Link href="/">Ezen's</Link></h1>
                <Menu />
                <Sns />
            </div>
        </header>
    );
};