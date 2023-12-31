'use client'

import { MENU_OPTION } from "@/contains";
import Link from "next/link";

export const Menu = () => {
    const onURL = e => {
        e.preventDefault();
        const target = e.currentTarget;
        const value = target.getAttribute('href')
        const offsetTop = document.querySelector(value).offsetTop

        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
    }
    return (
        <nav>
            <ul>
                {MENU_OPTION.map(item => <li key={item.id}>
                    <Link href={item.url} onClick={onURL}>{item.name}</Link>

                </li>)}
            </ul>
        </nav>
    );
};