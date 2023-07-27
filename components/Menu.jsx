'use client'

import { MENU_OPTION } from "@/contains";
import Link from "next/link";

export const Menu = () => {

    return (
        <nav>
            <ul>
                {MENU_OPTION.map(item => (
                    <li key={item.id}>
                        <Link href='url'>
                            {item.name}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    );
};