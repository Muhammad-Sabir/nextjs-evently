'use client';

import { headerLinks } from '@/constants';
import link from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
	const pathName = usePathname();
	return (
		<ul className="md:flex-between flex w-full flex-col item-start gap-5 md:flex-row">
			{headerLinks.map((link) => {
				const isActive = pathName == link.route;
				return (
					<li
						key={link.route}
						className={`${
							isActive && 'text-primary-500'
						} flex-center
                        p-medium-16 whitespace-nowrap`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItems;
