import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
			<div className="flex flex-col justify-center gap-8">
				<h1 className="h1-bold">
					Organize, Network, Commemorate: Your Occasions, Our
					Platform!
				</h1>
				<p className="p-regular-20 md:p-regular-24">
					Connect, Learn, Grow: Access Insights from 3,168+ Mentors in
					Top-Tier Companies, Empowered by Our Global Network.
				</p>
				<Button size="lg" asChild className="button w-full sm:w-fit">
					<Link href="#events">Explore</Link>
				</Button>
			</div>

			<Image
				src="/assets/images/hero.png"
				alt="Hero image"
				width={1000}
				height={1000}
				className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
			/>
		</div>
	);
};

export default Hero;
